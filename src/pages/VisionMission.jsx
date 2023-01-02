import React from "react";

const VisionMission = () => {
  return (
    // in smal screen background position to left
    <div className="min-h-[90vh] visison_mission py-4 bg-left">
      <div className="flex justify-end items-center ">
        <div className="max-w-xl w-full mt-16 mx-0 lg:mx-20 flex space-y-12 flex-col justify-center text-white">
          {/* header */}
          <h1 className="uppercase text-4xl font-bold text-center">
            Vision And Mission
          </h1>
          {/* Content */}
          <p className="text-center text-lg px-12">
            Krishn Pragya is not just a magazine but a knowledge offering for
            the promulgation of the wisdom inherent in Srimad Bhagvad Gita,
            Vedanta, Indian philosophy, culture and the message of Sri Krishn
            among young generation and enthusiasts of indic wisdom. <span className="text-[#FFBE00] font-semibold">Krishn
            Pragya</span> is a unique effort to disseminate the timeless Krishn wisdom
            and the essence of Sanatan Dharma not only in the midst of Indians
            living in and outside of the nation but to mankind as a whole. The
            core purpose of this spiritual adventure is to bring Krishn to the
            heart of every person and to bequeath to the wisdom of Indian
            philosophy and Krishn from one generation to another.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
