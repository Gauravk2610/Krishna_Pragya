import React from "react";

const Videos = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
          Videos
        </h1>
        {/* Videos List */}
        <div className="flex gap-x-4 gap-y-6 flex-wrap">
          {/* Video */}
          {[...Array(10)].map((_, i) => (
            <div className="w-[300px] cursor-pointer h-[180px] rounded-lg flex justify-center items-center border-gray-400 border-2">
              <img className="w-8" src="/assets/play.svg" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
