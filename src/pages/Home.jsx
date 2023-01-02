import React, { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isEnglish } from "../utils";

const Home = () => {
  const [counter, setCounter] = React.useState(0);

  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  const ContentList = [
    {
      title: isEng
        ? `Welcome to the Vrindavan of Wisdom - Krishn Pragya! It is more
      than a magazine. In fact, it is a divine experience.`
        : `ज्ञान के वृंदावन में आपका स्वागत है - कृष्ण प्रज्ञा ! यह एक पत्रिका से कहीं अधिक है। वास्तव में, यह एक दिव्य अनुभव है।`,
      desc: isEng
        ? `Explore a world of deeper truths through the writings, musings,
      teachings culled from the minds of the greatest thinkers and
      philosophers of today and the past on the subjects of Krishn,
      Krishn Consciousness, Great Scriptures, Bhagwad Gita, Vedas and
      Vedantic philosophy.`
        : `आइए, कृष्ण, कृष्ण चेतना, महान शास्त्रों, भगवद गीता, वेदों और वेदांतिक दर्शन के विषयों पर आज और अतीत के महानतम विचारकों और दार्शनिकों के ज्ञान और अनुभूतियों से ली गई रचनाओं, विचारों, शिक्षाओं के माध्यम से गहरे सत्य की दुनिया को जाने, आत्मसात् करें। ज्ञान के इस पावन यज्ञ का आनंद लें।`,
      img: "Krishna1.png",
      author: "Gopal Swami Khetanchi",
    },
    {
      title: "",
      desc: isEng
        ? `Imbibe the Krishn-Tatva by harnessing the power of your soul, make your life an inner renunciation, outer celebration and learn to live in eternal bliss with Krishn Pragya.`
        : `अपनी आत्मा की शक्ति का उपयोग करके कृष्ण-तत्व को भीतर उतारें, अपने जीवन को आंतरिक त्याग और बाहरी उत्सव बनाएं। ‘कृष्ण प्रज्ञा’ के शब्दों के साथ परमानंद में रहना सीखें। हर शब्द यहाँ अध्यात्म के प्रकाश में उजला है।`,
      img: "Krishna2.png",
      author: "Gopal Swami Khetanchi",
    },
    {
      title: "",
      desc: isEng
        ? `Embark on a spiritual journey to the inner recesses of your heart, to behold your soul, and partake of the nectar of divine knowledge with and of Krishn in Krishn Pragya.`
        : `अपनी आत्मा को निहारने के लिए, और ‘कृष्ण प्रज्ञा’ में कृष्ण के साथ और दिव्य ज्ञान के अमृत का सहभागी बनने के लिए, अपने हृदय के भीतरी कोनों की आध्यात्मिक यात्रा पर आगे बढ़ें।`,
      img: "Krishna3.png",
      author: "Hari Om Singh",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < ContentList.length - 1) {
        setCounter(counter + 1);
      } else {
        setCounter(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [counter]);

  const ImageFrame = ({ image }) => (
    <div className="relative ">
      <div className="relative">
        <img
          src="/assets/Frame (2).svg"
          draggable={false}
          alt="Frame"
          className="max-w-[50vw] w-full h-full object-contain relative"
        />
        <div className="courtesy absolute bottom-32 -right-6 text-[#003E92] text-[12px]">
          Courtesy - {ContentList[counter].author}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center m-14  justify-center">
        <img
          className="w-full"
          effect="blur"
          src={`/assets/images/${ContentList[counter].img}`}
          draggable={false}
          alt=""
        />
      </div>
    </div>
  );

  return (
    <div>
      <section id="" className="px-16  linear-bg pb-14">
        <div className="py-8 flex justify-between space-x-4">
          {/* Content */}
          <div className="mx-auto max-w-lg flex flex-col items-end justify-center">
            {/* Main Content */}
            <div className="flex flex-col px-4 items-center justify-center space-y-6 h-full min-h-[350px]">
              {ContentList[counter].title && (
                <div className="text-[#ffbe00] h-full flex items-end text-center text-2xl">
                  {ContentList[counter].title}
                </div>
              )}
              {ContentList[counter].desc && (
                <div className="text-white h-full flex items-center text-center text-2xl">
                  {ContentList[counter].desc}
                </div>
              )}
              <div className="">
                <img
                  className="w-full h-8 object-contain mb-12"
                  src="/assets/Flute.png"
                  draggable={false}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* Image */}
          <ImageFrame />
        </div>
      </section>
      <section
        id="about-us"
        className="section2 min-h-screen flex items-center justify-end h-full"
      >
        <div className="">
          <div className="flex max-w-3xl w-full px-20 text-[#2E6295] flex-col items-center justify-center space-y-8">
            <h1 className="text-[45px] font-bold text-center">
              {isEng ? "A PILGRIM OF SPIRITUALITY" : "अध्यात्म पथ का यात्री"}
            </h1>
            <p className="text-center text-lg font-semibold">
              {isEng
                ? `Pawan K. Sethhi is associated with media and writing for the last
                35 years. He was drawn to spirituality since his youth. His
                inquisitive spirit would traverse to the inner reflections and
                spiritual inquiries of life and in the pursuits of Vedanta and
                Indian philosophy.`
                : `पवन के सेठी, 35 वर्ष से मीडिया और गहन लेखन से जुड़े हुए हैं। वे युवा अवस्था से अध्यात्म के प्रति समर्पित हो गए। उनका खोजी मन डूब जाता मनन और चिंतन में, धर्म, भारतीय दर्शन और वेदांत के अध्ययन में।`}
            </p>
            <p className="text-center text-lg font-semibold">
              {isEng
                ? `
                His prime areas of study are Advaita darshan, Vedanta, and Shrimad
                Bhagavad-Gita and the expansion of Krishn consciousness. It is a
                rare coincidence and more than that, a blessing of lord Krishn,
                that he has started Krishn Pragya for the seekers and connoisseurs
                of Indian religion and philosophy and the lovers of lord Krishn.
                This move is like a divine Yagya. Moreover, Mr. Sethhi is involved
                in nation-building and social betterment through a dynamic
                spiritual organization named "Tat Tvam Asi" which is determined to
                provide young and talented students with a learning experience
                without cumbersome books.
                `
                : "उन्होंने यदि एक ओर कई विचारकों, चिंतकों और दार्शनिकों के मानस सानिध्य में अंतरचेतना पाई तो दूसरी ओर अपने आध्यात्मिक अनुभवों से अनेक हृदयों को प्रेरणा दी। वे अद्वैत दर्शन, वेदांत और श्रीमद्भगवदगीता और कृष्ण तत्व के प्रसार में निरंतर प्रयत्नरत हैं। यह अद्भुत संयोग और कृष्ण प्रेरणा ही है कि उन्होंने ‘कृष्ण प्रज्ञा’ के रूप में नयी पीढ़ी, कृष्ण प्रेमियों और भारतीय धर्म और दर्शन में रुचि रखने वाले जिज्ञासुओं तक कृष्ण जीवन और कृष्ण तत्व को पहुँचाने का यह यज्ञ आरम्भ किया है। इसी का साथ ही “तत त्वम असि” नाम की समाज सेवी संस्था के निर्माण में संलग्न हैं। जिसके द्वारा प्रतिभाशाली बालकों को पाठ्यपुस्तक रहित नयी प्रणाली से शिक्षा देने का उद्देश्य है।"}
            </p>
          </div>
        </div>
      </section>
      <section
        id=""
        className="section3 min-h-screen pt-20 pb-16 flex items-center justify-start h-full"
      >
        <div className="w-1/2 flex justify-center">
          <div className="max-w-xl w-full flex flex-col justify-center items-center text-[#2E6295] space-y-8">
            <h1 className="text-4xl font-bold text-center">
              {isEng ? "KRISHN PRAGYA" : "कृष्ण प्रज्ञा"}
            </h1>
            <div className="space-y-4">
              <div className="text-center text-lg font-semibold mx-32">
                {isEng
                  ? "Divine confluence of Modernity steeped in ancient wisdom."
                  : "कृष्ण प्रज्ञा- प्राचीन ज्ञान में डूबी आधुनिकता का दिव्य संगम।"}
              </div>
              <div
                className="text-center text-lg font-semibold mx-14"
                dangerouslySetInnerHTML={{
                  __html: isEng
                    ? `Feel the joy of being with Yogeshwar Krishn in the pages of Krishn
                  Pragya. Dance of wisdom and melody <br />of life for you.`
                    : `कृष्ण प्रज्ञा के पृष्ठों में योगेश्वर कृष्ण के साथ होने के आनंद की अनुभूति करें। आपके लिए ज्ञान का नृत्य और जीवन का माधुर्य समेटे हैं ये पृष्ठ।`,
                }}
              ></div>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/krishn-pragya"
                className="krishn-pragya-btn flex items-center justify-center w-40 h-11 rounded-xl text-center text-white font-semibold"
              >
                {isEng ? "MAGAZINE" : "मैग्जीन"}
              </Link>
            </div>
            {/* Krishna Hand */}
            <img
              className="max-w-xs w-full"
              draggable={false}
              src="/assets/Krishan_Hand-with-Flute.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section
        id="tat-tvam-asi"
        className="section4  min-h-screen pt-24 pb-16 flex items-center justify-between h-full"
      >
        <div className="flex w-full max-w-xl items-center justify-center">
          <img
            draggable={false}
            src="/assets/TatVatSami.svg"
            alt="TatVatSami"
          />
        </div>
        <div className="max-w-2xl w-full flex flex-col mx-20 justify-center items-center text-[#2E6295] space-y-8">
          <h1 className="text-4xl font-bold text-center">
            {isEng ? "TAT AVAM ASI" : "तत त्वम असि"}
          </h1>
          <div
            className="text-center text-white text-lg font-semibold mx-6"
            dangerouslySetInnerHTML={{
              __html: isEng
                ? `<span class="text-[#FFBE00] text-semibold">'Tat Tvam Asi'</span> is one of the eight Upanishadic mahavakyas ( Great
               Words) and it stands for 'that thou art' (you are also divine). The
               divine principle is present in every creature. The core spirit
               behind this feeling is the oneness and divine integration. For
               making the welfare of humanity easy and effective, we have
               established this organization named 'Tat Tvam Asi'. Our present
               generation is the foundation of our future. We extend our helping
               hands to those young minds who are naturally talented and
               intelligent but do not enjoy privileged social background. We
               espouse the belief that they should be taught through a teaching
               system not based on cumbersome textbooks and tap thereby their
               natural talent and enrich society. These youth can become effective
               agents of change and lift the consciousness of society and the world
               they are living in. It is with this noble motive that we are working
               at <span class="text-[#FFBE00] text-semibold">'Tat Tvam Asi'</span>.`
                : `<span class="text-[#FFBE00] text-semibold">‘तत त्वम असि’</span> उपनिषदों के आठ महावक्यों में से एक है, जिसका अर्थ है- तुम वही हो’ अर्थात् हम सब में वही तत्व है। हर प्राणी में वही चैतन्य उपस्थित है। इस भावना के पीछे समत्व और एकत्व का भाव महत्वपूर्ण है। इसी लिए ‘तत त्वम असि’ नाम से एक सामाजिक संस्था का निर्माण इस उद्देश्य से किया जा रहा है ताकि मानव का कल्याण हो। हमारे भविष्य की नींव आज के बालक हैं। यदि उन बालकों को जो वंचित हैं, साधन सम्पन्न परिवारों से नहीं आते परंतु उनमें नैसर्गिक प्रतिभा भरी हुई है, उन्हें पाठ्यपुस्तकों रहित शिक्षा प्रणाली से पढ़ाया जाए और उनकी प्रतिभा को निखार कर समाज को समृद्ध बनाया जाए तो वे समाज और विश्व को एक नयी दिशा दे सकते हैं। इस शुभ विचार से <span class="text-[#FFBE00] text-semibold">‘तत त्वम असि’</span> में कार्य हो रहा है।`,
            }}
          ></div>
          <div className="text-center text-white text-lg font-semibold mx-6">
            {isEng
              ? `Moreover, with great efforts, we have prepared a programme that will
              educate the world that how by invoking that infinite divine energy
              every person can tap their utmost powers. This programme is named
              Potentiology i.e. the science of infinite energy. Tat Tvam Asi
              organization is determined to aware the masses about this program.
              This program will be beneficial for all age groups because it will
              fill them with optimism and the secrets of success.`
              : `इसके अतिरिक्त उस परम अनंत दिव्य ऊर्जा के आव्हान से किस प्रकार हर व्यक्ति स्वयं को ऊर्जित कर अधिक से अधिक सामर्थ्य प्राप्त कर सकता है, इस पर अथक परिश्रम से एक विशेष कार्यक्रम तैयार किया गया है। जिसका नाम है ‘पोटेंशिओलोज़ी’ (Potentiology) अर्थात् ‘अनंत क्षमता का ज्ञान’। जन साधारण तक इस कार्यक्रम का प्रसार करने का लक्ष्य ‘तत त्वम असि’ के अंतर्गत बनाया गया है। यह कार्यक्रम प्रत्येक आयु वर्ग के लोगों के लिए जीवनोपयोगी होगा। क्योंकि, यह उन्हें जीवन को सकारात्मकता और सफलता के सूत्र प्रदान करेगा।`}
          </div>
          <div className="flex items-center space-x-6">
            <button className="krishn-pragya-btn min-w-[160px] h-11 rounded-xl text-center text-white font-semibold">
              {isEng ? `SOUL PICKINGS` : "अमृत कण"}
            </button>
            <button className="krishn-pragya-btn min-w-[160px] h-11 rounded-xl text-center text-white font-semibold">
              {isEng ? "PARABLES ZONE" : "सुन रे मनवा"}
            </button>
            <button className="krishn-pragya-btn min-w-[160px] px-6 h-11 rounded-xl text-center text-white font-semibold">
              {isEng ? "BUBBLES & BALLOONS" : "सुन रे मनवा"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
