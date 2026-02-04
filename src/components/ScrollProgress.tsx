interface ScrollProgressProps {
  progress: number;
}

const ScrollProgress = ({ progress }: ScrollProgressProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1.5 glass-dark">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 transition-all duration-150 shadow-lg shadow-blue-500/50 relative"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
