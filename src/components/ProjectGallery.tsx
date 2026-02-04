import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  location: string;
  glassType: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Fachada Corporativa Espelhada',
    location: 'São Paulo, SP',
    glassType: 'Vidro Espelhado Prata',
    images: [
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  {
    id: 2,
    title: 'Box de Banheiro Premium',
    location: 'Residência Alphaville',
    glassType: 'Vidro Temperado Incolor',
    images: [
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/7018400/pexels-photo-7018400.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  {
    id: 3,
    title: 'Guarda-Corpo Minimalista',
    location: 'Cobertura Jardins',
    glassType: 'Vidro Laminado 10mm',
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  {
    id: 4,
    title: 'Divisória de Ambientes',
    location: 'Loft Moderno',
    glassType: 'Vidro Jateado',
    images: [
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  {
    id: 5,
    title: 'Espelho Bronze Decorativo',
    location: 'Sala de Estar',
    glassType: 'Espelho Bronze 6mm',
    images: [
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1743226/pexels-photo-1743226.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  {
    id: 6,
    title: 'Janela Panorâmica',
    location: 'Casa de Campo',
    glassType: 'Vidro Temperado Extra Clear',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  {
    id: 7,
    title: 'Porta de Entrada Elegante',
    location: 'Edifício Comercial',
    glassType: 'Vidro Blindex 12mm',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
  {
    id: 8,
    title: 'Sacada Envidraçada',
    location: 'Apartamento Vista Mar',
    glassType: 'Vidro Temperado Acústico',
    images: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=1920',
      'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ],
  },
];

const ProjectGallery = () => {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = projectRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleProjects((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownloadPDF = async () => {
    const button = document.querySelector('.download-pdf-button') as HTMLElement;
    if (button) button.style.display = 'none';

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);

      pdf.setFillColor(15, 23, 36);
      pdf.rect(0, 0, pageWidth, 70, 'F');

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(32);
      pdf.setFont(undefined, 'bold');
      pdf.text('CASA DO VIDRO', pageWidth / 2, 30, { align: 'center' });

      pdf.setFontSize(14);
      pdf.setFont(undefined, 'normal');
      pdf.text('Portfólio de Projetos', pageWidth / 2, 42, { align: 'center' });

      pdf.setFontSize(10);
      pdf.text('Soluções em Vidro com Acabamento Profissional', pageWidth / 2, 52, { align: 'center' });

      pdf.setTextColor(0, 163, 196);
      pdf.setFontSize(9);
      pdf.text('Box | Portas | Fachadas | Espelhos — Projetos sob medida', pageWidth / 2, 60, { align: 'center' });

      pdf.setTextColor(80, 80, 80);
      pdf.setFontSize(11);
      pdf.text('A Casa do Vidro transforma ambientes com projetos em vidro de alta qualidade.', margin, 85);
      pdf.text('Atuação em residências e comércios, instalação e manutenção com garantia.', margin, 92);

      let yPosition = 110;

      for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        if (i > 0 && yPosition > 220) {
          pdf.addPage();
          yPosition = 30;
        }

        pdf.setDrawColor(0, 163, 196);
        pdf.setLineWidth(0.5);
        pdf.line(margin, yPosition - 5, margin + 15, yPosition - 5);

        pdf.setTextColor(15, 23, 36);
        pdf.setFontSize(16);
        pdf.setFont(undefined, 'bold');
        pdf.text(project.title, margin, yPosition + 5);

        pdf.setFontSize(10);
        pdf.setFont(undefined, 'normal');
        pdf.setTextColor(100, 100, 100);
        pdf.text(`📍 ${project.location}`, margin, yPosition + 13);

        pdf.setTextColor(0, 163, 196);
        pdf.text(`🔷 ${project.glassType}`, margin, yPosition + 20);

        yPosition += 28;

        try {
          const img = new Image();
          img.crossOrigin = 'anonymous';

          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = project.images[0];
          });

          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);

          const imgData = canvas.toDataURL('image/jpeg', 0.9);
          const maxImgHeight = 100;
          const imgHeight = Math.min((contentWidth * img.height) / img.width, maxImgHeight);
          const imgWidth = (imgHeight * img.width) / img.height;

          if (yPosition + imgHeight > pageHeight - margin - 10) {
            pdf.addPage();
            yPosition = 30;
          }

          pdf.setDrawColor(167, 198, 221);
          pdf.setLineWidth(0.3);
          pdf.rect(margin - 1, yPosition - 1, imgWidth + 2, imgHeight + 2, 'S');

          pdf.addImage(imgData, 'JPEG', margin, yPosition, imgWidth, imgHeight);
          yPosition += imgHeight + 20;
        } catch (error) {
          console.error('Erro ao carregar imagem:', error);
          yPosition += 10;
        }

        if (i < projects.length - 1) {
          pdf.setDrawColor(230, 247, 252);
          pdf.setLineWidth(0.5);
          pdf.line(margin, yPosition, pageWidth - margin, yPosition);
          yPosition += 15;
        }
      }

      pdf.addPage();
      pdf.setFillColor(15, 23, 36);
      pdf.rect(0, 0, pageWidth, pageHeight, 'F');

      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont(undefined, 'bold');
      pdf.text('Entre em Contato', pageWidth / 2, 80, { align: 'center' });

      pdf.setFontSize(12);
      pdf.setFont(undefined, 'normal');
      pdf.text('Solicite seu orçamento personalizado', pageWidth / 2, 95, { align: 'center' });

      pdf.setTextColor(0, 163, 196);
      pdf.setFontSize(14);
      pdf.text('📞 WhatsApp: (11) 99999-9999', pageWidth / 2, 120, { align: 'center' });
      pdf.text('✉️ contato@casadovidro.com.br', pageWidth / 2, 135, { align: 'center' });

      pdf.setTextColor(247, 250, 255);
      pdf.setFontSize(10);
      pdf.text('Casa do Vidro - Transformando ambientes desde 2020', pageWidth / 2, pageHeight - 30, { align: 'center' });

      pdf.save('casa-do-vidro-portfolio.pdf');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    } finally {
      if (button) button.style.display = 'flex';
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white/90 via-gray-50/80 to-white/90 backdrop-blur-sm py-24 project-gallery-section overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-16">
          <button
            onClick={handleDownloadPDF}
            className="download-pdf-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 glass-dark border-2 border-white/20 relative overflow-hidden group"
          >
            <Download size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="relative z-10">Baixar Portfólio em PDF</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="mb-32 last:mb-0"
          >
            <ProjectCard
              project={project}
              isVisible={visibleProjects.has(index)}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
