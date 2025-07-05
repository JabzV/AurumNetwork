export const Logo = () => {
  return (
    <div className="flex items-center mr-8">
      <a href="/" className="block">
        <img 
          src="assets\liveswealthlogo.png" 
          alt="Aurum Network" 
          className="w-[50px] sm:w-[50px] md:w-[70px] lg:w-[85px] h-auto object-contain"
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