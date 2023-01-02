import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isEnglish } from "../utils";

const KrishnPragyaDetails = () => {
  const language = useSelector((state) => state.language.value);
  const isEng = isEnglish(language);

  const bookList = {
    "Vol 1": {
      name: "Vol 1",
      img: "Book 1@2x",
      date: "Oct 2022",
      content: isEng
        ? `Shri Krishn is not a figment of a dreamy mind but a living reality. He is symbolized through symbols but he himself is not a symbol. He is the Supreme. He attracts in all forms, loves, captivates but does not get himself captivated ! Shri Krishn is so learned that he can reveal the mysteries of Vedanta through the strains of his flute. Whatever path he traverses on, he leaves indelible footprints of his aureate memories behind for ages to follow but he himself remains detached from the show. Each of his actions is replete with mysteries and is as arcane as the curiosity about his next move ! Life lies in his consciousness. Krishn is everywhere: Be that his beloved Braj bhoomi or the blessed Goloka , be that his magical flute or peacock feather or the bank of Yamuna, be that his dear Kadamba tree, mount Govardhan or Holy Vrindavan, be that his many names and forms, his Pitambar or the Vaijayanti around his neck.`
        : "",
    },
    "Vol 2": {
      name: isEng ? "Vol 2" : 'खंड 2',
      img: "Book 2@2x",
      date: isEng ? "Nov 2022" : 'नवंबर 2022',
      content: isEng
        ? `A forerunner of his times and sporting a matchless personality, Shri Krishn is Dwapar purusha and an apple of the eyes of the masses. The consciousness of Krishn is spread everywhere. The more one knows him, the more one loses himself in Krishn Consciousness. A rare blend of simplicity and seriousness, Krishn was the one who enjoyed the most prestigious honour in the Rajsuya Yagna of Yudhishthir. But in his utter simplicity, he was seen lifting and cleaning the leftover food plates of the guests ! In the battle of Mahabharata, Krishn served as Arjun’s charioteer and simultaneously planned the strategy for the future. Krishn alone knows how many people called him in distress and got themselves emancipated. He embraced all. Doubtlessly Krishn is the supreme summit of wisdom, religion, politics and sadhana. It is only Krishna's prowess that he transformed karma into his Lila and love as an infinite stream of elixir of human heart. He can be embraced in all ways, through millions of methods. We all are equally curious us to know about his life and Lila. This ‘Curiosity special’ of Krishn Pragya is one humble effort to satisfy such curiosity. Prominent authors, wise men of today’s literary and spiritual world have reflected very deeply on Krishn in these pages.`
        : "अपने समय के अग्रदूत, व्यक्तित्व में अद्वितीय विभिन्नता लिए हुए द्वापर पुरुष जन जन के कृष्ण हैं। वह कृष्ण जिनकी चेतना सब ओर बिखरी है। उन्हें जितना जानो उतने ही उनके भाव में डूबते जाओ। सरलता और गम्भीरता से भरे कृष्ण, जिन्हें युधिष्ठिर के राजसूय यज्ञ में सर्वोच्च स्थान पर बिठा कर पूजा जा रहा था; परंतु वे अपने सरल भाव से अतिथियों के जूठे पत्तल दोने उठा रहे थे। महाभारत युद्ध में सारथी बन घोड़ों की सेवा कर रहे थे, साथ ही रणनीति और भविष्य की योजना बना रहे थे। न जाने कितने लोगों का उद्धार कर रहे थे। जिसे मिले उसे अपना बना लिया। सच में ज्ञान, राजनीति ,धर्म और साधना के शिखर हैं कृष्ण, कर्म को लीला और प्रेम को मानवीय हृदय से बहती विशिष्टतम अनंत रस धार में बदल दें। उसमें जो भी बह जाए वह ब्रह्म ज्ञान पा जाए। कृष्ण के चरित्र को जानने की जिज्ञासा हम सब के मन में है, उसी जिज्ञासा के उत्तर आप को मिलेंगे, इस “जिज्ञासा विशेषांक” में, आज के उन विद्वानों से जिन्होंने कृष्ण के भाव और रस में डूबते हुए ज्ञान साधना की है।",
    },
  };
  const { vol } = useParams();
  return (
    <div className="krishn-pragya-linear-gradient px-6 md:px-16 py-12">
      <div className="flex flex-col items-center  space-y-6 xl:space-y-0 xl:flex-row md:space-x-12 xl:space-x-20">
        <div className="max-w-[540px] flex flex-col justify-center items-center">
          <img
            className="w-full h-full object-contain vol"
            src={`/assets/krishn_pragya/${bookList[vol]?.img}.png`}
            alt=""
          />
          <div className="text-center xl:ml-auto xl:mr-32">
            <span className="text-[#0375A3] text-xl font-bold">
              {bookList[vol]?.name} -{" "}
            </span>
            <span className="text-[#3CA87B] text-xl font-bold">
              {bookList[vol]?.date}
            </span>
          </div>
        </div>
        <div className="space-y-6 xl:w-3/5 flex flex-col h-auto justify-center xl:-mt-16">
          <p className={`text-[#154A6D] text-lg xl:text-xl font-semibold whitespace-pre-wrap ${!isEng ? '!leading-[42px] -mt-20' : '!leading-[30px]'}`}
          
          >
            {bookList[vol]?.content}
          </p>
          <button className={`krishn-pragya-btn rounded-xl py-2 px-4 uppercase text-white font-bold text-lg max-w-[160px] w-full `}>
            {isEng ? 'Read Articals' : 'लेख पढ़ें'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default KrishnPragyaDetails;
