export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src="assets/image2.png"
        alt="Aurum Network Ecosystem Platform"
        className="w-full h-full object-cover"
        style={{
          transform: ' scale(1.1) translateX(21%)',
        }}
      />

    

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};
