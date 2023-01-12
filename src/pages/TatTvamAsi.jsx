import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { isEnglish } from "../utils";

const TYPES = ["soul-pickings", "bubbles-&-balloons", "parables-zone"];

const TatTvamAsi = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  const TypesList = {
    "soul-pickings": {
      image: "/assets/tattvamasi/SoulPickingLogo.png",
      desc: isEng
        ? "A single drop of nectar is sufficient for immortality. The Shabd(Word) is Brahman. If we find right words, we can realize Brahman. When powerful words drenched in the effulgence of the soul emerge, the whole macrocosm is full of ebullience. We will gift you such drops of nectar every day !"
        : `अमृत की एक बूँद भी बहुत है अमरता के लिए। शब्द ब्रह्म है। यदि सही शब्द मिल जाएँ तो मानो ब्रह्म मिल गया। आत्मा से निकले प्रकाशित शब्द जब गूंजते हैं तो सम्पूर्ण ब्रह्मांड ऊर्जा से भर जाता है। ऐसे ही अमृत कण आप के लिए उपहार स्वरूप पहुँचेंगे प्रतिदिन।`,
      quote: isEng
        ? "We must watch our thoughts, words and actions because they create our universe"
        : `क्या एक मौसम का दर्द पूरी उम्र की खुशियाँ छीन लेने की ताक़त रखता है? मौसम और मिजाज़ बदलते रहते हैं, मगर ज़िन्दगी का मिजाज़ हमेशा के लिए नहीं बदल सकते.`,
    },
    "bubbles-&-balloons": {
      image: "/assets/tattvamasi/BubblesAndBallonsLogo.png",
      desc: isEng
        ? "Mind is easily enticed by stories, legends, folktales because they have the unique power of attraction that leads to attention. Attention comes effortlessly after we have developed a meditative state of mind. Which is why through these tales, adepts, elders and scriptures have deeply sown the seeds of values (Sanskars) in our hearts. In Parables Zone we are offering you small stories with mammoth life lessons."
        : "लहर लहर चलती है धारा, जैसे क्षण क्षण चलता है जीवन। हर तरंग के साथ उठते हैं बुलबुले, अपने भीतर एक पूरा अस्तित्व लिए। प्रकाश की किरणें उन्हें बना देते हैं इंद्रधनुषी। किसी के लिए वे हवा में लहराते ग़ुब्बारे हैं और किसी के लिए क्षणिक ख़ुशी। ऐसे ही हैं कुछ दिव्य विचार, जो बुलबुलों की तरह उभरते हैं। ध्यान नहीं गया तो खो जाते हैं। आइए उन्हें खोने न दें।",
      quote: isEng
        ? "The moment you realize your infinite nature you are awakened"
        : "उमंग और आनंद भरी जीवन यात्रा का मूल मंत्र है, समय के प्रवाह के साथ बहो. ऋतुएँ बदलती हैं तो साथ में नए रंग और परिस्थितियाँ और अनुभूतियाँ भी लाती हैं. ठीक ऐसे ही हर क्षण परिवर्तन के बिना पूर्ण नहीं होता. इस परिवर्तन में ही चैतन्य व्यक्त होता है.",
    },
    "parables-zone": {
      image: "/assets/tattvamasi/ParablesZoneLogo.png",
      desc: isEng
        ? "The stream kisses every wave like every moment drives our Life. With each wave fly bubbles, with their absolute existence. Light beams turn them aureate. For some, they are floating balloons and for some, moments of fleeting buoyancy. Divine thought- currents are like bubbles, if left unheeded, they vanish quickly. Let us treasure them...."
        : "मन कहानियों, कथाओं, लोक कथाओं से बहल जाता है, क्योंकि उनमें ध्यान आकर्षण करने की शक्ति होती है। जब ध्यान लग जाए तो एकाग्रता स्वाभाविक है। तभी तो गुरु, दादी- नानी, शास्त्रों ने इन कहानियों के द्वारा संस्कारों के बीज हमारे हृदय के आँगन में बो दिए। सुन रे मनवा में छोटी-छोटी कहानियाँ बड़ी बड़ी बातें समझा रही हैं।",
      quote: `One a disciple sat in front of his master and asked curiously, "Dear Master, please tell me the secret of getting a thing that one loves the most." The master looked at his disciple's face and said in his deep voice, "First learn patience with what you hate, if it happens smoothly. You will get what you love the most"`,
    },
  };
  // use Navigate Hook
  const navigate = useNavigate();
  // use Params Hook
  const { type } = useParams();

  if (!TYPES.includes(type)) {
    // go back to previous page
    navigate(-1);
    return null;
  }

  return (
    <div className="min-h-screen bg-white py-4">
      <div className="max-w-7xl w-full px-6 mt-8 xl:mx-auto">
        {/* <img className='max-w-lg pt-6' src='/assets/Quote.png' /> */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="lg:w-3/6 space-y-4">
            <img className="max-w-[260px] sm:max-w-xs" src={TypesList[type]?.image} alt="" />
            <p className="text-[#2E6295] hidden sm:inline-flex text-lg font-semibold">
              {TypesList[type]?.desc}
            </p>
          </div>
          <div className="lg:w-3/6">
            <div className="max-w-sm px-4 sm:px-0 lg:ml-16 relative">
              <img
                className="w-full"
                src={`/assets/tattvamasi/${
                  isEng ? "Quotes.png" : "QuotesHindi.png"
                }`}
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#552018] max-w-[200px] italic text-center ml-10 text-xl font-semibold  w-full">
                  {TypesList[type]?.quote}
                </div>
              </div>
            </div>
            <p className="text-[#2E6295] mt-4 sm:hidden text-lg font-semibold">
              {TypesList[type]?.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TatTvamAsi;
