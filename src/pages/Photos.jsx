import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Photos = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  const PhotosList = [
    {
      name: isEng
        ? "Hon'ble Shri Mahamandleshwar Rajeshree Dr. Ramsundar Das ji"
        : "माननीय श्री महामंडलेश्वर राजश्री डॉ. रामसुंदर दास जी",
      post: isEng
        ? "President Chhattis Garh State Gauseva Ayog."
        : "अध्यक्ष छत्तीसगढ़ राज्य गौसेवा आयोग",
      image: "/assets/photos/Image 1.png",
    },
    {
      name: isEng ? "Suresh Soni Ji" : "सुरेश सोनी जी",
      post: isEng
        ? "Central committee member, RSS"
        : "केंद्रीय समिति सदस्य, आरएसएस",
      image: "/assets/photos/Image 2.png",
    },
    {
      name: isEng ? "Shri Harkesh Singh Ji" : "श्री हरकेश सिंह जी",
      post: isEng
        ? "Ex. Vice Chancellor Jai Prakash University Chhapra. Bihar"
        : "पूर्व जय प्रकाश विश्वविद्यालय छपरा के कुलपति प्रो. बिहार",
      image: "/assets/photos/Image 3.png",
    },
    {
      name: isEng
        ? "Shri Amitabh Bachchan Ji Indian Film Actor"
        : "श्री अमिताभ बच्चन जी",
      post: isEng ? "Indian Film Actor" : "भारतीय फिल्म अभिनेता",
      image: "/assets/photos/Image 4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full px-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-3xl sm:text-4xl font-bold">
          {isEng ? "Photos" : "तस्वीरें"}
        </h1>
        {/* Photos List */}
        <div className="flex gap-x-4 gap-y-6 flex-wrap">
          {/* Photo */}
          {PhotosList?.map((_, i) => (
            <div>
              <div className=" max-w-[420px] w-full cursor-pointer h-[300px]">
                <img
                  key={i}
                  draggable={false}
                  className="w-full h-full object-cover select-none border-gray-500"
                  src={_.image}
                  alt=""
                />
              </div>
              <div className="text-sm font-[500] mt-2">{_.name}</div>
              <div className="text-sm font-light">{_.post}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photos;
