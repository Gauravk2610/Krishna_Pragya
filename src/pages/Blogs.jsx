import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Blogs = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="bg-white py-12 min-h-screen">
      <div className="max-w-7xl w-full px-4 xl:mx-auto">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
          {isEng ? "WHITE WINGS (BLOG)" : "श्वेत पंख (ब्लॉग)"}
        </h1>
        <div className="flex flex-col xl:flex-row xl:gap-8 mt-4">
          <figure className="w-full max-w-md">
            <img
              className=" w-full h-full object-cover rounded-lg"
              src="/assets/blogs/White Wings HANS.png"
              alt=""
            />
            <div className="text-xs">
              { isEng ? "Courtesy - Gajendra Singh" : "सौजन्य - गजेंद्र सिंह" }
            </div>
          </figure>
          <div className="font-semibold w-full text-xl xl:ml-4"
          dangerouslySetInnerHTML={{
            __html: 
            isEng
              ? "Swan symbolises the soul for us. White and radiant plumaged Swan recognizes the Truth. He distinguishes between milk and water, between pearl and pebble. Swan picks the essence. Similarly, truthful emotions emerged from the sublime soul-crypts and touch the petals of our hearts...We are presenting them here. We won't call this a vlog; we will call it White Wings."
              : "हम हंस को आत्मा मानते हैं। शुभ्र श्वेत पंखो वाला हंस। सत्य पहचानता है।<br /> नीर- क्षीर, कंकर- मोती में अंतर करता है, हंस । वह सत्य चुनता है। ऐसे ही आत्मा से<br /> उठे सत्य बिंदु हृदयकमल की पंखुड़ियों पर आते हैं, उन्हीं की प्रस्तुति है, यहाँ।<br /> हम इसे ब्लॉग नहीं श्वेत पंख मानते हैं।"
          }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
