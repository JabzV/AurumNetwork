export const StrategicPartners = () => {
  return (
    <div className="w-full py-8 px-4 sm:px-6 md:px-12 lg:px-20 mb-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-sm lg:text-base text-white text-center mb-12 mt-6">
          Strategic Partners from companies all around the world
        </h2>
        
        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-20">
          {/* QMEI Partner */}
          <div className="flex-shrink-0 transition-transform duration-150 hover:scale-102">
            <img 
              src="assets/aurum-network-white.png"
              alt="QMEI Strategic Partner"
              className="h-14 md:h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          {/* QMB Partner */}
          <div className="flex-shrink-0 transition-transform duration-150 hover:scale-102">
            <img 
              src="assets/sp1.png"
              alt="QMB Strategic Partner"
              className="h-12 md:h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>

          {/* QMEI Partner */}
          <div className="flex-shrink-0 transition-transform duration-150 hover:scale-102">
            <img 
              src="assets/sp2.png"
              alt="QMEI Strategic Partner"
              className="h-12 md:h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Perth Mint Partner */}
          <div className="flex-shrink-0 transition-transform duration-150 hover:scale-102">
            <img 
              src="assets/sp3.png"
              alt="Perth Mint Strategic Partner"
              className="h-12 md:h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 