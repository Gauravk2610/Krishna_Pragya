import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Forum = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl w-full mx-4 xl:mx-auto">
        <h1 className="uppercase text-[#2E6295] text-4xl font-bold">{isEng ? "FORUM" : "फोरम"}</h1>
        <div className="flex flex-col xl:flex-row gap-8 py-6 px-4">
          <img
            className="max-w-lg w-full mx-auto h-full object-cover"
            src="/assets/forum/Forum Image.png"
            alt=""
          />
          <div className="space-y-6">
            <div className="space-y-2 pr-6">
                <h2 className="text-2xl font-semibold">
                {isEng ? "A Marquee under which we meet each other to satisfy our spiritual quest." : "एक मार्की जिसके तहत हम एक दूसरे को संतुष्ट करने के लिए मिलते हैं हमारी आध्यात्मिक खोज।"}
                </h2>
                <div className="text-2xl font-semibold text-[#06779F]">
                {isEng ? "THIS WEEK'S TOPIC -" : "इस सप्ताह का विषय -"}
                </div>
                <div className="text-2xl font-semibold">{isEng ? "What is Meditation?" : "ध्यान क्या है?"}</div>
                <div className="font-semibold text-lg">
                To join the video meeting, click this link:{" "}
                <a
                    href="https://meet.google.com/dvt-ctvt-tcv"
                    target={"_blank"}
                    className="text-[#3299D8]"
                >
                    https://meet.google.com/dvt-ctvt-tcv
                </a>{" "}
                Otherwise, to join by phone, dial +1 760-503-5206 and enter this
                PIN: 689 961 706#
                </div>
                <div className="text-[#EF5613] font-semibold">
                On 7th January 2023 at 11:00 AM
                </div>
            </div>
            {/* Enroll yourself for discussion */}
            <form className="max-w-lg w-full space-y-4">
                <h2 className="font-semibold ">{isEng ? "Enroll yourself for discussion" : "चर्चा के लिए खुद को नामांकित करें"}</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex space-x-2">
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder={isEng ? "First Name" : "पहला नाम"}
                        type="text" />
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder={isEng ? "Last Name" : "सरनेम"}
                        type="text" />
                    </div>
                    <div className="flex space-x-2">
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder={isEng ? "E-mail" : "ई-मेल"}
                        type="email" />
                        <input 
                        className="border-2 border-black w-full rounded-md px-3 py-2 placeholder:text-black"
                        placeholder={isEng ? "Phone No." : "फोन नंबर"}
                        type="text" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="linear-bg px-6 py-2 text-xl text-white rounded-md">
                        {isEng ? "Submit" : "सबमिट"}
                    </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
