import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Connect = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl w-full px-4 xl:mx-auto space-y-8">
        {/* Connect */}
        <div className="space-y-6">
          <h1 className="uppercase text-[#2E6295] text-2xl lg:text-4xl font-bold">
            {isEng ? "Connect" : "कनेक्ट करें"}
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              <img
                className="max-w-[240px] w-full h-full object-cover"
                src="/assets/connect/hand.png"
                alt=""
              />
              <div className="text-xs">
                {isEng ? "" : "सौजन्य - हरि ओम सिंग"}
              </div>
            </div>
            <div>
              <h1 className="uppercase text-xl lg:text-2xl font-semibold">
                {isEng
                  ? "WELCOME TO INTERACT WITH KRISHN PRAGYA TEAM"
                  : "कृष्ण प्रज्ञा टीम के साथ बातचीत में आपका स्वागत है।"}
              </h1>
            </div>
          </div>
        </div>
        {/* Spiritual */}
        <div className="space-y-6">
          <h1 className="uppercase text-[#2E6295] text-2xl lg:text-4xl font-bold">
            {isEng
              ? "SPIRITUAL/ASTRO COUNSELLING"
              : "आध्यात्मिक / खगोलीय परामर्श"}
          </h1>
          <div className="flex flex-col lg:flex-row gap-8">
            <div>
              <img
                className="max-w-xs w-full h-fit object-cover"
                src="/assets/spiritual/Image1.png"
                alt=""
              />
              <div className="text-xs">
                {isEng
                  ? "Courtesy - KESHAV VENKATARAGHAVAN"
                  : "सौजन्य - केशव वेंकटराघवन"}
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">
                  {isEng
                    ? `Guidance Team Advanced Spiritual Seakers for any kind of
                  crisis of faith or in life.`
                    : "मार्गदर्शन टीम आस्था या जीवन में किसी भी प्रकार के संकट के लिए आध्यात्मिक साधकों को उन्नत करती है।"}
                </h3>
                <h3 className="text-xl font-semibold">
                  {isEng
                    ? `Leave your Name, E-mail, Phone Number and your problem in the
                  given space. We will connect with you.`
                    : "दिए गए स्थान में अपना नाम, ई-मेल, फोन नंबर और अपनी समस्या छोड़ दें। हम आपके साथ जुड़ेंगे।"}
                </h3>
              </div>
              <form className="max-w-xl w-full space-y-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                      placeholder={isEng ? "First Name" : "पहला नाम"}
                      type="text"
                    />
                    <input
                      className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                      placeholder={isEng ? "Last Name" : "सरनेम"}
                      type="text"
                    />
                  </div>
                  <input
                    className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                    placeholder={isEng ? "Email" : "ई-मेल"}
                    type="email"
                  />
                  <input
                    className="border-2 border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                    placeholder={isEng ? "Phone No." : "फोन-नंबर"}
                    type="text"
                  />
                  <textarea
                    className="border-2 min-h-[160px] border-gray-500 w-full rounded-lg px-3 py-2 placeholder:text-black"
                    placeholder={isEng ? "Your Queries" : "आपके प्रश्न"}
                    type="text"
                  />
                </div>
                <div className="flex justify-center">
                  <button className="linear-bg px-6 py-2 text-xl text-white rounded-lg">
                    {isEng ? "Submit" : "सबमिट"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="uppercase text-[#2E6295] text-2xl lg:text-4xl font-bold">
              {isEng ? "COMMENTS" : "टिप्पणियाँ"}
            </h1>
            <textarea
              className=" max-w-4xl w-full border-2 border-gray-500 rounded-lg px-3 py-2 placeholder:text-black"
              placeholder={isEng ? "Your Comments" : "आपकी टिप्पणियां"}
              name="comments"
              id=""
              rows="10"
            ></textarea>
            <div className="flex justify-center px-6 max-w-4xl w-full ">
              <button className="linear-bg px-6 py-2 text-xl text-white rounded-lg">
                {isEng ? "Submit" : "सबमिट"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
