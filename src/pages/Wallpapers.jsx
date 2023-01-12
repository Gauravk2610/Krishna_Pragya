import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Wallpapers = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full px-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-3xl sm:text-4xl font-bold">
          {isEng ? "Wallpapers" : "वॉलपेपर"}
        </h1>
        {/* Wallpapers List */}
        <div className="flex gap-x-8 gap-y-6 flex-wrap">
          {/* Wallpaper */}
          {[...Array(6)].map((_, i) => (
            <div className="w-[400px] cursor-pointer h-[240px]">
              <img
                key={i}
                draggable={false}
                className="w-full h-full object-contain select-none"
                src={`/assets/wallpapers/${i + 1}.png`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallpapers;
