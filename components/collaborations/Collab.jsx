import React, { useEffect, useState, useRef } from "react";
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
  },
  {
    id: 3,
    name: "E-Cell Plaksha",
    logo: "images/Collaboration/ecel.png"
  }
];

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      slideToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === partners.length) {
      sliderRef.current.style.transition = "none";
      setCurrentIndex(0);
      sliderRef.current.style.transform = `translateX(0%)`;
      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      }, 0);
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
              href="mailto:geekroom.club@plaksha.edu.in"
              className="text-[#f15b22] hover:text-[#f15b22]"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {partners.map((partner, index) => (
                  <div
                    key={index}
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
                {/* Clone the first slide */}
                <div className="min-w-full flex justify-center md:p-4">
                  <div className="rounded-lg shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center h-auto w-auto mx-auto md:h-64 md:w-auto">
                    <img
                      src={partners[0].logo}
                      alt={partners[0].name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
