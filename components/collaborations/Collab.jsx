import React, { useState, useEffect, useRef } from "react";
import Typography from "../display/typography/Typography";
import Marquee from "../ui/marquee";

const partners = [
  {
    id: 1,
    name: "GeekforGeeks",
    logo: "images/Collaboration/gfg.png",
    row: 2
  },
  {
    id: 5,
    name: ".xyz",
    logo: "images/Collaboration/xyz.png",
    row: 2
  },
  {
    id: 11,
    name: "DS Brar Center for GWiST",
    logo: "images/Collaboration/ds.png",
    row: 1
  },
  {
    id: 7,
    name: "CodeCrafters",
    logo: "images/Collaboration/cc.png",
    row: 2
  },
  {
    id: 4,
    name: "Perplexity AI",
    logo: "images/Collaboration/perplexity.png",
    row: 1
  },
  {
    id: 8,
    name: "Awadh-IIT Ropar",
    logo: "images/Collaboration/awadh.png",
    row: 1
  },
  {
    id: 9,
    name: "Mphasis F1 Foundation",
    logo: "images/Collaboration/mphasis.png",
    row: 1
  },
  {
    id: 10,
    name: "Hass F1 Team",
    logo: "images/Collaboration/hass.png",
    row: 1
  },
  {
    id: 12,
    name: "Hack Culture",
    logo: "images/Collaboration/hc.png",
    row: 2
  },
  {
    id: 3,
    name: "E-Cell Plaksha",
    logo: "images/Collaboration/ecel.png",
    row: 2
  },
  {
    id: 12,
    name: "GDSC CRCE",
    logo: "images/Collaboration/crce.jpeg",
    row: 2
  },
  {
    id: 2,
    name: "FitoorxPrayas",
    logo: "images/Collaboration/fxp.png",
    row: 2
  },
  {
    id: 6,
    name: "Unstop",
    logo: "images/Collaboration/unstop.png",
    row: 2
  },
  {
    id: 6,
    name: "Indegene",
    logo: "images/Collaboration/Indegene.png",
    row: 1
  },
  {
    id: 6,
    name: "cfe",
    logo: "images/Collaboration/cfe.png",
    row: 1
  },
  {
    id: 6,
    name: "pscst",
    logo: "images/Collaboration/pscst.png",
    row: 1
  }
];

const row1Partners = partners.filter((p) => p.row === 1);
const row2Partners = partners.filter((p) => p.row === 2);

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5 // Trigger when 10% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="w-full pt-5 md:pt-0 pb-20">
      <div className="w-full px-4">
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

        <div className="relative mt-8 w-full space-y-6">
          {isVisible && (
            <>
              <Marquee className="[--duration:35s] w-full">
                {row1Partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center bg-white/5 backdrop-blur-sm mx-4 w-80 h-48 md:w-[30rem] md:h-64 overflow-hidden"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-fill"
                    />
                  </div>
                ))}
              </Marquee>
              <Marquee reverse className="[--duration:35s] w-full">
                {row2Partners.map((partner) => (
                  <div
                    key={partner.id}
                    className="rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center bg-white/5 backdrop-blur-sm mx-4 w-80 h-48 md:w-[30rem] md:h-64 overflow-hidden"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-fill"
                    />
                  </div>
                ))}
              </Marquee>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
