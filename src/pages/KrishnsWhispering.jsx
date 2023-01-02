import React from "react";

const KrishnsWhispering = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
          Krishn's Whispering
        </h1>
        {/* Content */}
        <div className="flex gap-x-4">
            {/* img */}
            <div className="max-w-xs w-full h-full">
              <img className="w-[260px]" src="/assets/whispering/1.png" alt="" />
              <div className="text-xs font-semibold">Courtesy - Padamshri Krishn Kanhai</div>
            </div>
            {/* " HIghlight */}
            <img className="mb-auto mt-12"
            src="/assets/Quolan.svg"
            alt="Quolan"
            />
            {/* Description */}
            <div className="space-y-6 lg:pr-20">
                <h1 className="text-2xl text-[#00849B] font-semibold">Pawan K. Sethhi Says</h1>
                <p className="text-black text-lg font-semibold">
                Krishn appears as friend in my inner Vrindavan, he understands each of my emotion and whatever message he sends me everyday, I am sharing here. I hope that same godward emotion engulfs you too because Krishn belongs to us all.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default KrishnsWhispering;
