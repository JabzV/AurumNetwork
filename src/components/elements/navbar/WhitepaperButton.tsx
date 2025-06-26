export const WhitepaperButton = () => {
  return (
    <a 
      href="#learn-more" 
      className="
        flex items-center justify-center 
        w-full sm:w-[140px] md:w-[150px] lg:w-[153px] h-[45px] md:h-[55px] lg:h-[61px] 
        bg-white text-black 
        border-3 border-black 
        rounded-[90px] 
        transition-all duration-200 
        hover:bg-gray-100
        text-xs sm:text-sm font-medium
      "
    >
      <span className="font-normal">
        Learn More
      </span>
    </a>
  );
}; 