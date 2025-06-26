export const Logo = () => {
  return (
    <div className="flex items-center">
      <a href="/" className="block">
        <img 
          src="assets\aurum-network-white.webp" 
          alt="Aurum Network" 
          className="w-[120px] sm:w-[140px] md:w-[150px] lg:w-[163px] h-auto object-contain"
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