import ImageCarousel from './ImageCarousel';

interface Project {
  id: number;
  title: string;
  location: string;
  glassType: string;
  images: string[];
}

interface ProjectCardProps {
  project: Project;
  isVisible: boolean;
  index: number;
}

const ProjectCard = ({ project, isVisible, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-12 items-center`}
      >
        <div className="relative w-full lg:w-2/3 aspect-[16/10] shadow-2xl cursor-pointer group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <ImageCarousel images={project.images} title={project.title} />
        </div>

        <div className="w-full lg:w-1/3 px-6">
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
            }`}
          >
            <div className="glass-strong rounded-3xl p-8 border border-white/30 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mb-6" />
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                {project.title}
              </h4>
              <div className="space-y-3">
                <p className="text-gray-600 text-base flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  <span className="font-medium">{project.location}</span>
                </p>
                <p className="text-gray-600 text-base flex items-center gap-2">
                  <span className="text-cyan-600">🔷</span>
                  <span className="font-medium">{project.glassType}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
