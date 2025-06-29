import { useRef, useEffect, useState } from 'react';

export const DiscoverSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showUnmuteButton, setShowUnmuteButton] = useState(false);
  const [hasUnmuted, setHasUnmuted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && !hasPlayed) {
          videoRef.current.play().catch(error => {
            console.log('Auto-play prevented:', error);
          });
          setShowUnmuteButton(true);
          setHasPlayed(true);
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setShowUnmuteButton(false);
      setHasUnmuted(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="discover"
      className="w-full py-16 px-4 sm:px-8 md:px-16 lg:px-0 flex justify-center my-12"
    >
      <div className="max-w-7xl w-full flex flex-col items-center gap-2">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
          Discover the Power Behind Aurum Network 
        </h2>
        {/* Gradient Divider */}
        <div className="w-full max-w-5xl h-1 my-2 rounded-full bg-gradient-to-r from-[rgb(222,150,83)]/0 via-[rgb(222,150,83)] to-[rgb(222,150,83)]/0" />
        {/* Subtitle */}
        <p className="text-base md:text-lg text-neutral-300 text-center max-w-4xl mx-auto mt-2">
          Explore how Aurum Network is transforming the gold industry. See the technology, community, and vision driving the future of gold.
        </p>
        {/* Main Content Area */}
        <div className="relative w-full flex justify-center items-center mt-8">
          {/* Glowing Ellipse */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: '65vw',
              maxWidth: 779,
              height: '22vw',
              maxHeight: 132,
              background: 'rgba(255,187,128,1)',
              filter: 'blur(100px) drop-shadow(0 0 23px #FFBB80) drop-shadow(0 0 46px #FFBB80) drop-shadow(0 0 162px #FFBB80) drop-shadow(0 0 250px #FFBB80)',
              zIndex: 0,
              opacity: 0.7,
            }}
          />
          {/* Video/Image Placeholder */}
          <div className="relative z-10 w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 border-[rgb(222,150,83)] bg-neutral-900 flex items-center justify-center">
            {/* Replace this with your video or image */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              //poster="/assets/AurumPoster.jpg"
              muted
              playsInline
              autoPlay
            >
              <source src="assets/AurumVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Unmute Button */}
            {showUnmuteButton && !hasUnmuted && (
              <button
                onClick={handleUnmute}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 z-20"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.794a1 1 0 011.617.794zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Click to unmute</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}; 