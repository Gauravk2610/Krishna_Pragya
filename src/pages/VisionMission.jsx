import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const VisionMission = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    // in smal screen background position to left
    <div className="min-h-[90vh] visison_mission md:py-4 bg-left">
      <div className="flex justify-end items-center ">
        <div className="max-w-xl w-full md:pt-16 mx-0 lg:mx-20 flex space-y-12 flex-col justify-center text-white">
          {/* header */}
          <img className="w-full md:hidden" src="/assets/Vision&Mission.png" alt="" />
          <h1 className="uppercase text-3xl sm:text-4xl font-bold text-center">
            {isEng ? "Vision And Mission" : "परिकल्पना और अभियान"}
          </h1>
          {/* Content */}
          <p className="text-center text-lg px-6 pb-16 md:px-12" dangerouslySetInnerHTML={{__html: isEng
              ? `Krishn Pragya is not just a magazine but a knowledge offering for the promulgation of the wisdom inherent in Srimad Bhagvad Gita, Vedanta, Indian philosophy, culture and the message of Sri Krishn among young generation and enthusiasts of indic wisdom. <span class="text-[#FFBE00] font-semibold">Krishn Pragya</span> is a unique effort to disseminate the timeless Krishn wisdom and the essence of Sanatan Dharma not only in the midst of Indians living in and outside of the nation but to mankind as a whole. The core purpose of this spiritual adventure is to bring Krishn to the heart of every person and to bequeath to the wisdom of Indian philosophy and Krishn from one generation to another.`
              : `‘कृष्ण प्रज्ञा’ केवल एक पत्रिका नहीं, ज्ञान यज्ञ है,<br /> श्रीमद्भगवदगीता, वेदान्त, भारतीय दर्शन एवं संस्कृति और<br /> कृष्ण संदेश को युवा पीढ़ी, आस्थावान व्यक्तियों और </br >जिज्ञासुओं तक पहुँचाने का। देश- विदेश में बसे भारतीयों तक ही नहीं</br> बल्कि सम्पूर्ण मानवता को कृष्ण तत्व चिंतन और सनातन धर्म के</br> मर्म को समझाने का अद्भुत प्रयास है - <span class="text-[#FFBE00] font-semibold">कृष्ण प्रज्ञा</span>।<br /> इस अभियान का उद्देश्य है- जन-जन के हृदय तक कृष्ण और<br /> एक पीढ़ी से दूसरी पीढ़ी तक भारतीय दर्शन और<br /> कृष्ण को पहुँचाना।`}} >
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
