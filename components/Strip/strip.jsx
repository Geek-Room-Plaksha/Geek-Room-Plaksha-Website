import React from "react";
import NumberTicker from "@/components/ui/number-ticker";

const StatsDisplay = () => {
  return (
    <div className="flex flex-wrap justify-center md:gap-48 gap-12 p-8 mb-16 md:mt-[-80px]">
      <div className="flex-1 max-w-sm rounded-2xl border-solid border-[#f15b22] px-12 py-12 text-center text-white">
        <div className="md:text-6xl text-4xl font-bold font-sans mb-3">
          <NumberTicker value={35} />
        </div>
        <div className="text-2xl">Active Members</div>
      </div>

      <div className="flex-1 max-w-sm rounded-2xl border-solid border-[#00acb2] px-12 py-12 text-center text-white">
        <div className="md:text-6xl text-4xl font-bold font-sans mb-3">
          <NumberTicker value={9} />
        </div>
        <div className="text-2xl">Events Held</div>
      </div>
    </div>
  );
};

export default StatsDisplay;
