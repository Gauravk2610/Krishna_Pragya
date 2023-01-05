import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const KrishnsWhispering = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto space-y-6">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">
          {isEng ? "Krishn's Whispering" : "कृष्ण संवाद"}
        </h1>
        {/* Content */}
        <div className="flex gap-x-4">
          {/* img */}
          <div className="max-w-xs w-full h-full">
            <img className="w-[260px]" src="/assets/whispering/1.png" alt="" />
            <div className="text-xs font-semibold">
              {isEng
                ? "Courtesy - Padamshri Krishn Kanhai"
                : "सौजन्य - पद्मश्री कृष्ण कन्हाई"}
            </div>
          </div>
          {/* " HIghlight */}
          <img
            className="mb-auto mt-12"
            src="/assets/Quolan.svg"
            alt="Quolan"
          />
          {/* Description */}
          <div className="space-y-6 lg:pr-20">
            <h1 className="text-2xl text-[#00849B] font-semibold">
              {isEng ? "Pawan K. Sethhi Says" : "कृष्ण संवाद"}
            </h1>
            <p
              className="text-black text-lg font-semibold"
              dangerouslySetInnerHTML={{
                __html: isEng
                  ? "Krishn appears as friend in my inner Vrindavan, he understands each of my emotion and whatever message he sends me everyday, I am sharing here. I hope that same godward emotion engulfs you too because Krishn belongs to us all."
                  : `मेरे अंतर के वृंदावन में अवतरित होते हैं सखा बन कृष्ण, मेरे भीतर के हर भाव को समझते हैं<br /> और प्रतिदिन मुझे जो संदेश देते हैं, वे ही यहाँ लिख रहा हूँ। मैं आशा करता हूँ आप के भीतर भी यह भाव उतरें,<br /> क्योंकि कृष्ण हम सब के हैं।`,
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KrishnsWhispering;
