import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Podcast = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full px-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-3xl sm:text-4xl font-bold">
          {isEng ? "Podcast" : "पॉडकास्ट"}
        </h1>
        {/* Podcast List */}
        <div className="flex flex-col gap-y-6 w-full">
          {/* Podcast */}
          {[...Array(10)].map((_, i) => (
            <div className="flex gap-x-6 w-full">
              <div className="w-24 h-24 border-gray-400 border-2 rounded-lg flex justify-center items-center">
                <img className="w-8" src="/assets/play.svg" alt="" />
              </div>
              <div className="w-full flex flex-col justify-between py-2">
                <h1 className="text-xl sm:text-2xl font-bold">Podcast Name</h1>
                <div className="">
                  {/* Input slider  */}
                  <div className="flex justify-between">
                    <span className="text-gray-400">0:00</span>
                    <span className="text-gray-400">5:00</span>
                  </div>
                  <div className="flex items-center w-full">
                    {/* thumbar color change to red */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      className="w-full border-none outline-none h-1 !bg-black "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
