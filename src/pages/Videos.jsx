import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Videos = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full px-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-3xl sm:text-4xl font-bold">
          {isEng ? "Videos" : "वीडियो"}
        </h1>
        {/* Videos List */}
        <div className="flex gap-x-4 gap-y-6 flex-wrap">
          {/* Video */}
          {[...Array(10)].map((_, i) => (
            <div className="w-full sm:w-[300px] cursor-pointer h-[180px] rounded-lg flex justify-center items-center border-gray-400 border-2">
              <img className="w-8" src="/assets/play.svg" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
