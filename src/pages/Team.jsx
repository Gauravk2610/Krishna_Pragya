import React from "react";
import { useSelector } from "react-redux";
import { isEnglish } from "../utils";

const Team = () => {
  const language = useSelector((state) => state.language.value);

  const isEng = isEnglish(language);

  return (
    <div className="team_linear_bg min-h-screen py-12">
      <div className="space-y-6 max-w-7xl w-full mx-auto">
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          {isEng ? "PATRONS" : "संरक्षक"}
        </h1>
        <div className="flex flex-wrap gap-6 justify-evenly ">
          <TeamCard
            image={"Dr._ANEEL_KASHI_MURARKA"}
            name={isEng ? "Dr. ANEEL KASHI MURARKA" : "डॉ. अनिल काशी मुरारका"}
            post={
              isEng
                ? "A True Karmyogi, Humanist and Philanthropist"
                : "कर्मयोगी और मानवतावादी<br /> मार्गदर्शक"
            }
          />
          <TeamCard
            image={"Mr. B. D. AGARWAL"}
            name={isEng ? "Mr. B. D. AGARWAL" : "बी. डी. अग्रवाल"}
            post={
              isEng
                ? "A Visionary, Entrepreneur Philanthropist and Social Worker"
                : "लोकोपकारक और<br /> प्रयोगधर्मी मार्गदर्शक"
            }
          />
          <TeamCard
            image={"Dr. PAWAN KANSAL"}
            name={isEng ? "Dr. PAWAN KANSAL" : "डॉ. पवन कंसल"}
            post={
              isEng
                ? "Renowned Entrepreneur, <br />Dedicated Social Worker and Devotee of Krishn"
                : "सफल व्यवसायी, कर्मठ समाज सेवी,<br /> अनन्य कृष्ण प्रेमी"
            }
          />
          <TeamCard
            image={"B. K. Soni"}
            name={isEng ? "B. K. Soni" : "बी के सोनी"}
            post={
              isEng
                ? "CMD, Eco Recycling Ltd."
                : "सीएमडी, इको रिसाइक्लिंग लिमिटेड"
            }
          />
          <TeamCard
            image={"Navratan Aggarwal"}
            name={isEng ? "Navratan Aggarwal" : "नवरतन अग्रवाल"}
            post={
              isEng
                ? "Director Bikanerwala Foods Pvt. Ltd. Spritual Seeker, Social Worker and Philanthropist"
                : "निदेशक बीकानेरवाला फूड्स प्रा. लिमिटेड<br /> आध्यात्मिक साधक, सामाजिक कार्यकर्ता और<br /> लोकोपकारक"
            }
          />
        </div>
        {/* Dotted line seperator */}
        <div className="border-b-2 border-[#E50019] border-dotted" />
        {/* Editorial Team */}
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          {isEng ? "EDITORIAL TEAM" : "संपादकीय टीम"}
        </h1>
        <div className="flex flex-wrap gap-6 justify-center pb-8">
          <TeamCard
            image={"CHANDRAKANT VIDYARTHI"}
            name={isEng ? "CHANDRAKANT VIDYARTHI" : "चंद्रकांत विद्यार्थी"}
            post={isEng ? "Managing Editor" : "संपादक- वित्त और वाणिज्य"}
          />
        </div>
        {/* TWO TEAM TOGETHER */}
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
              {isEng ? "HINDI EDITORIAL TEAM" : "संपादक मंडल हिंदी"}
            </h1>
            <div className="flex flex-wrap gap-6 justify-evenly ">
              <TeamCard
                image={`ACHARYA SANJIV VERMA 'SALIL'`}
                name={
                  isEng
                    ? `ACHARYA SANJIV VERMA 'SALIL'`
                    : "आचार्य संजीव वर्मा 'सलिल'"
                }
                post={
                  isEng
                    ? "Editor - Hindi Language Content and Poetry"
                    : "संपादक- हिंदी भाषा विषय वस्तु और काव्य संपादक"
                }
              />
              <TeamCard
                image={"PANDIT BHAVANATH JHA"}
                name={isEng ? "PANDIT BHAVANATH JHA" : "पंडित भवनाथ झा"}
                post={
                  isEng
                    ? "Editor - Sanskrit Language Content"
                    : "संपादक- संस्कृत भाषा विषय वस्तु"
                }
              />
              <TeamCard
                image={"NARMADA PRASAD UPADHYAY"}
                name={
                  isEng ? "NARMADA PRASAD UPADHYAY" : "नर्मदा प्रसाद उपाध्याय"
                }
                post={
                  isEng
                    ? "Editor - Specialist of Indian Art & Miniature Paintings"
                    : "संपादक- भारतीय भित्ति<br /> चित्र और लोक कला"
                }
              />
              <TeamCard
                image={"VIVEK AGRAWAL"}
                name={isEng ? "VIVEK AGRAWAL" : "विवेक अग्रवाल"}
                post={isEng ? "Editor - Operations" : "संपादक- संचालन"}
              />
              <TeamCard
                image={"Dr. RAVINDER KUMAR GUPTA"}
                name={
                  isEng ? "Dr. RAVINDER KUMAR GUPTA" : "डॉ. रविंदर कुमार गुप्ता"
                }
                post={
                  isEng
                    ? "Editor - Indian Philosophy and Language"
                    : "डॉ. रविंदर कुमार गुप्ता"
                }
              />
            </div>
          </div>
          {/* Vertical Dotted Line */}
          <div className="border-l-2 border-[#E50019] border-dotted" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
                {isEng ? "ENGLISH EDITORIAL TEAM" : "संपादक मंडल अंग्रेज़ी"}
              </h1>
              <div className="flex flex-wrap gap-6 justify-evenly ">
                <TeamCard
                  image={"Dr. AVINASH KAPOOR"}
                  name={
                    isEng ? "Dr. AVINASH KAPOOR" : "प्रोफ़ेसर डॉ. अविनाश कपूर"
                  }
                  post={
                    isEng
                      ? "Editor - Spirituality and Science"
                      : "संपादक- अध्यात्म और विज्ञान"
                  }
                />
                <TeamCard
                  image={"Prof. ANIL JAIN"}
                  name={isEng ? "Prof. ANIL JAIN" : "प्रोफ़ेसर अनिल जैन"}
                  post={
                    isEng
                      ? "Editor - Prose and Poetry"
                      : "संपादक – गद्य और पद्य"
                  }
                />
                <TeamCard
                  image={"GURSHEEL WALIA"}
                  name={isEng ? "GURSHEEL WALIA" : "गुरशील वालिया"}
                  post={
                    isEng
                      ? "Editor - Indian Philosophy and Contemporary literature"
                      : "संपादक-भारतीय दर्शन और<br /> सामयिक साहित्य"
                  }
                />
                <TeamCard
                  image={"VEENU JINDAL"}
                  name={isEng ? "VEENU JINDAL" : "वीनू जिंदल"}
                  post={isEng ? "VEENU JINDAL" : "संपादक- भारतीय दर्शन और भाषा"}
                />
                <TeamCard
                  image={"Dr. Charan Singh Kedarkhandi"}
                  name={
                    isEng
                      ? "Dr. Charan Singh Kedarkhandi"
                      : "डॉ. चरणसिंह केदारखंडी"
                  }
                  post={
                    isEng
                      ? "Editor - Indian Philosophy and Contemporary Spiritual Literature"
                      : "संपादक- भारतीय दर्शन और<br /> आधुनिक विचार"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* Dotted Line */}
        <div className="border-b-2 border-[#E50019] border-dotted" />
        {/* Design Technical & Commercoal Departments */}
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          {isEng
            ? "DESIGN, TECHNICAL & COMMERCIAL DEPARTMENTS"
            : "डिज़ाइन, तकनीकी और कार्मिक विभाग"}
        </h1>
        <div className="flex max-w-6xl mx-auto flex-wrap gap-6 justify-evenly ">
          <TeamCard
            image={"JAIN KAMAL"}
            name={isEng ? "JAIN KAMAL" : "जैन कमल"}
            post={
              isEng
                ? "Design Editor, Typographer <br />and Publication Expert"
                : "डिज़ाइन संपादक, टाइपोग्राफ़र और<br /> प्रकाशन विशेषज्ञ"
            }
          />
          <TeamCard
            image={"VISHWATOSH DAS"}
            name={isEng ? "VISHWATOSH DAS" : "विश्वतोष दास"}
            post={
              isEng
                ? "Consultant - Art and Advertisement"
                : "विज्ञापन और कला सलाहकार"
            }
          />
          <TeamCard
            image={"HEMANT CHAVAN"}
            name={isEng ? "HEMANT CHAVAN" : "हेमंत चव्हाण"}
            post={
              isEng
                ? "(Pratima Advertising) <br />Editor - Printing and Design"
                : "(प्रतिमा एडवरटाइजिंग)<br /> संपादक- मुद्रण और रूप सज्जा"
            }
          />
          <TeamCard
            image={"VIPUL KUSHEWAHA"}
            name={isEng ? "VIPUL KUSHEWAHA" : "विपुल कुशवाह"}
            post={isEng ? "Technical Head - Digital" : "प्रमुख- तकनीकी डिजिटल"}
          />
          <TeamCard
            image={"SAOUMYAVANDIT KUSHWAHA"}
            name={isEng ? "SAOUMYAVANDIT KUSHWAHA" : "प्रमुख- तकनीकी डिजिटल"}
            post={
              isEng ? "Media Director - Digital" : "निर्देशक- मीडिया डिजिटल"
            }
          />
          <TeamCard
            image={"ASHA SETHHI"}
            name={isEng ? "ASHA SETHHI" : "आशा सेठी"}
            post={
              isEng
                ? "Consultant - Office and Accounts"
                : "सलाहकार- कार्यालय और लेखा"
            }
          />
          <TeamCard
            image={"VRUSHABH JADHAV"}
            name={isEng ? "VRUSHABH JADHAV" : "वृषभ जाधव"}
            post={isEng ? "UX/UI Designer" : "यूएक्स/यूआई डिजाइनर"}
          />
          <TeamCard
            image={"GAURAV KONDE"}
            name={isEng ? "GAURAV KONDE" : "गौरव कोंडे"}
            post={isEng ? "Developer" : "डेवलपर"}
          />
        </div>
        {/* Dotted Line */}
        <div className="border-b-2 border-[#E50019] border-dotted" />
        {/* Consultants Team */}
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          {isEng
            ? "CONSULTANTS AND MENTORS"
            : "विषय और प्रारूप परिकल्पना परामर्श मंडल"}
        </h1>
        <div className="flex flex-wrap gap-6 justify-evenly ">
          <TeamCard
            image={"Dr. ASHUTOSH ANGIRAS"}
            name={isEng ? "Dr. ASHUTOSH ANGIRAS" : "डॉ. आशुतोष अंगिरस"}
            post={
              isEng
                ? "Consultant - Sanskrit and Spiritual Literature"
                : "परामर्शकर्ता -संस्कृत और<br /> आध्यात्मिक साहित्य"
            }
          />
          <TeamCard
            image={"Dr. ANAND SINGH"}
            name={isEng ? "Dr. ANAND SINGH" : "डॉ. आनंद सिंह"}
            post={
              isEng
                ? "Consultant - Indian Culture and Hindi Literature"
                : "परामर्शक़र्ता - भारतीय संस्कृति और<br /> हिंदी साहित्य"
            }
          />
          <TeamCard
            image={"SHAILENDRA KRISHNA BHATT"}
            name={
              isEng ? "SHAILENDRA KRISHNA BHATT" : "डॉ. शैलेंद्र कृष्ण भट्ट"
            }
            post={
              isEng
                ? "Conservator of Traditional and Tribal Art, Philanthropist"
                : "परम्परागत और आदिवासी कला संरक्षक"
            }
          />
          <TeamCard
            image={"Mrs. SHOBHA SADANI"}
            name={isEng ? "Mrs. SHOBHA SADANI" : "शोभा सादानी"}
            post={
              isEng
                ? "Coordinator of Art and Cultural Department"
                : "परामर्शकर्ता-कला और<br /> सांस्कृतिक विभाग और संयोजिका"
            }
          />
          <TeamCard
            image={"ARJUN SINGH RATHORE"}
            name={isEng ? "ARJUN SINGH RATHORE" : "अर्जुन सिंह राठौड़"}
            post={
              isEng ? "A Humanist, Social Worker and Devotee of Krishna" : "जन-हितैषी और अनन्य कृष्ण भक्त"
            }
          />
          <TeamCard
            image={"PANKAJ NARAYAN"}
            name={isEng ? "PANKAJ NARAYAN" : "पंकज नारायण"}
            post={isEng ? "Consultant - Indian Culture and Media" : "परामर्शकर्ता-मीडिया, संस्कृति कर्मी"}
          />
          <TeamCard
            image={"ASHOK V. JADHAV"}
            name={isEng ? "ASHOK V. JADHAV" : "अशोक वि. जाधव"}
            post={isEng ? "Consultant Art and Design" : "परामर्शकर्ता- कला और रूप सज्जा"}
          />
          <TeamCard
            image={"SAGAR KADAM"}
            name={isEng ? "SAGAR KADAM" : "सागर कदम"}
            post={isEng ? "Legal Advisor" : "परामर्शकर्ता-विधि विषयक"}
          />
          <TeamCard
            image={"ADVOCATE RAHUL CHIPLUNKAR"}
            name={isEng ? "ADVOCATE RAHUL CHIPLUNKAR" : "एडवोकेट. स्मिता राहुल चिपळूणकर"}
            post={isEng ? "Legal Advisor" : "परामर्शकर्ता- विधि विषयक"}
          />
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({ image, name, post }) => {
  return (
    <div className="max-w-[220px] space-y-1">
      <img draggable={false} src={`/assets/team/${image}.png`} alt="" />
      <div className="min-h-[80px]">
        <div className="text-[#154A6D] text-base text-center font-bold pt-2">
          {name}
        </div>
        <div
          className="text-sm text-center text-[#00000080]"
          dangerouslySetInnerHTML={{ __html: post }}
        ></div>
      </div>
    </div>
  );
};

export default Team;
