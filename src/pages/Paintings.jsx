import React, { useRef } from "react";
import ChevronLeft from "@heroicons/react/24/outline/ChevronLeftIcon";
import ChevronRight from "@heroicons/react/24/outline/ChevronRightIcon";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Paintings = () => {
  const language = useSelector((state) => state.language.value);
  
  const isEng = isEnglish(language);
  
  const PaintingsList = [
    {
      painter: isEng ?  "ARTIST - KESHAV VENKATERAGAVAN" : "चित्रकार - केशव वेंकटरागवन",
      desc: isEng ? "Famous painter of modern contemporary art form" : "आधुनिक समकालीन कला के प्रसिद्ध चित्रकार",
      image: [
        {
          img: 'Image 1'
        },
        {
          img: 'Image 2'
        },
        {
          img: 'Image 3'
        },
        {
          img: 'Image 4'
        },
        {
          img: 'Image 5'
        },
      ]
    },
    {
      painter: isEng ? "ARTIST - PRANAY GOSWAMI" : "चित्रकार - प्रणय गोस्वामी",
      desc: isEng ? "Famous and Popular artist of modern art form paintings" : "आधुनिक कला के प्रसिद्ध और लोकप्रिय कलाकार",
      image: [
        {
          img: 'Image 6'
        },
        {
          img: 'Image 7'
        },
        {
          img: 'Image 8'
        },
        {
          img: 'Image 9'
        },
        {
          img: 'Image 10'
        },
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto space-y-8">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
          {isEng ? "Paintings" : "पेंटिंग्स"}
        </h1>
        {
          PaintingsList?.map((_, i) => (
            <PaintingsContainer painter={_.painter} desc={_.desc} image={_.image} />
          ))
        }
      </div>
    </div>
  );
};

const PaintingsContainer = ({painter, desc, image}) => {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current.scrollLeft <= 0) return;
        scrollRef.current.scrollLeft -= 200;
    }

    const scrollRight = () => {
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth) return;
        scrollRef.current.scrollLeft += 200;
    }

  return (
    <div className="space-y-4 pt-4">
        {/* Title */}
      <h2 className="text-[24px]">
        <span className="text-[#06779F] text-[26px] font-bold">
          {painter} 
        </span>{" "}
        <span className="text-[#EF5613]">||</span>{" "}
        <span className="text-[#5D5D5D]">
          {desc}
        </span>
      </h2>
      {/* Paintings List */}
      <div className="relative flex ">
        {/* Left Icon */}
        <div className="absolute -left-12 top-1/2">
            <div 
            onClick={scrollLeft}
            className="bg-[#C9C9C9] py-3 cursor-pointer">
                <ChevronLeft className="w-6 h-6" />
            </div>
        </div>
        {/* Paintings */}
        <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-hidden scroll-smooth w-full">
            {
                image?.map((_, i) => (
                    <img key={i} className="h-[380px] select-none " src={`/assets/paintings/${_?.img}.png`} alt="" />
                ))
            }
        </div>
        {/* Right Icon */}
        <div className="absolute -right-12 top-1/2">
            <div 
            onClick={scrollRight}
            className="bg-[#C9C9C9] py-3 cursor-pointer">
                <ChevronRight className="w-6 h-6" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Paintings;
