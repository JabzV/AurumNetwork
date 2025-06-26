export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src="assets/wmremove-transformed.png"
        alt="Aurum Network Ecosystem Platform"
        className="w-full h-full object-cover"
        style={{
          transform: ' translateX(21%)',
        }}
      />

      {/* Progressive blur overlay - max blur on left, fading to clear on right */}
      <div className="absolute inset-0 blur-mask pointer-events-none"></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};
