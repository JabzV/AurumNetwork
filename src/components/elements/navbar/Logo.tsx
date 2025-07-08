export const Logo = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="block">
        <img 
          src="assets\liveswealthlogo.png" 
          alt="Aurum Network" 
          className="min-w-[140px] w-[150px] sm:w-[160px] md:w-[185px] lg:w-[215px] h-auto object-contain"
          onError={(e) => {
            // Fallback to text if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = '<span class="text-white text-lg sm:text-xl font-bold">AURUM NETWORK</span>';
            }
          }}
        />
      </a>
    </div>
  );
}; 