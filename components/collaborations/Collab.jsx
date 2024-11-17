import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Typography from "../display/typography/Typography";

const partners = [
  {
    id: 1,
    name: "GeekforGeeks",
    logo: "images/Collaboration/gfg.png"
  },
  {
    id: 2,
    name: "FitoorxPrayas",
    logo: "images/Collaboration/fxp.png"
  }
];

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    setIsMobile(window.innerWidth < 768);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < partners.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full pt-5 md:pt-0 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <Typography variant="h1">Our Collaborations</Typography>
        </div>
        <div className="text-center mb-6">
          <div className="text-gray-400 mt-4">
            Interested in Collaborating ?{" "}
            <a
              href="mailto:geekroomplaksha@gmail.com"
              className="text-blue-400 hover:text-blue-500"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-4 z-10 p-2 rounded-full bg-gray-800 shadow-lg hover:bg-gray-700 ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </button>

            <div className="overflow-hidden mx-16">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="min-w-full flex justify-center md:p-4"
                  >
                    <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center h-auto w-auto mx-auto md:h-64 md:w-auto">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex === partners.length - 1}
              className={`absolute right-4 z-10 p-2 rounded-full bg-gray-800 shadow-lg hover:bg-gray-700 ${
                currentIndex === partners.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
