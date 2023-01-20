import React from "react";
import Minus from "@heroicons/react/24/outline/MinusIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEnglish } from "../../utils";

const Footer = () => {
  const language = useSelector((state) => state.language.value);
  const isLang = isEnglish(language);

  const FooterListGroup = [
    {
      group: [
        {
          name: isLang ? "Home" : "होम",
          link: "/",
        },
        {
          name: isLang ? "About Us" : "हमारे बारे में",
          link: "about-us'",
        },
        {
          name: isLang ? "Krishna Pragya" : "कृष्ण प्रज्ञा",
          link: "krishn-pragya",
        },
        {
          name: isLang ? "Tat Tvam Asi" : "तत त्वम असि",
          link: "tat-tvam-asi",
        },
        {
          name: isLang ? "Team" : "टीम",
          link: "team",
        },
      ],
    },
    {
      group: [
        {
          name: isLang ? "Magazine" : "मैग्जीन",
          link: "/magazine",
        },
        {
          name: isLang ? "Vision And Mission" : "परिकल्पना और अभियान",
          link: "/vision-and-mission",
        },
        {
          name: isLang ? "Krishn's Whispering" : "कृष्ण संवाद",
          link: "/krishn's-whispering",
        },
        {
          name: isLang ? "White Wings (Blog)" : "श्वेत पंख (ब्लॉग)",
          link: "/blogs",
        },
        {
          name: isLang ? "Connect" : "कनेक्ट करें",
          link: "/connect",
        },
      ],
    },
    {
      group: [
        {
          name: isLang ? "Forum" : "फोरम",
          link: "/forum",
        },
        {
          name: isLang ? "Podcast" : "पॉडकास्ट",
          link: "/podcast",
        },
        {
          name: isLang ? "Videos" : "वीडियो",
          link: "/videos",
        },
        {
          name: isLang ? "Photos" : "फोटो",
          link: "/photos",
        },
        {
          name: isLang ? "Paintings" : "पेंटिंग्स",
          link: "/paintings",
        },
      ],
    },
    {
      group: [
        {
          name: isLang ? "Wallpapers" : "वॉलपेपर्स",
          link: "/wallpapers",
        },
        {
          name: isLang ? "Bubbles & Ballons" : "क्षण तरंग",
          link: "/tat-tvam-asi/bubbles-and-ballons",
        },
        {
          name: isLang ? "Soul Pickings" : "अमृत कण",
          link: "/tat-tvam-asi/soul-pickings",
        },
        {
          name: isLang ? "Parables Zone" : "सुन रे मनवा",
          link: "/tat-tvam-asi/parables-zone",
        },
      ],
    },
    {
      group: [
        {
          name: isLang ? "<span class=''>Privacy Policy</span>" : "गोपनीयता नीति",
          link: "/privacy-policy",
        },
        {
          name: isLang ? "<span class=''>Terms & Conditions</span>" : "नियम एवं शर्तें",
          link: "/terms-and-conditions",
        },
      ],
    },
  ];

  const SocialMediaIcon = [
    {
      name: "Instagram",
      link: "https://instagram.com/krishnpragya?igshid=YmMyMTA2M2Y=",
      icon: "Instagram.png",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@krishnpragya",
      icon: "Youtube.svg",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/pragyanam/",
      icon: "Linkedin.svg",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/KrishnPragya?t=UKSeAg36GMSL4tH3xeIJig&s=09",
      icon: "Twitter.svg",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100085928155035",
      icon: "Facebook.svg",
    },
    {
      name: "Quora",
      link: "https://www.quora.com/profile/Krishn-Pragya?ch=10&oid=1965942544&share=29052207&srid=hBegs4&target_type=user",
      icon: "quora.png",
    },
    {
      name: "Koo",
      link: "https://www.kooapp.com/profile/krishnpragya",
      icon: "koo.png",
    },
  ];
  return (
    <div className="linear-bg flex flex-col py-14 px-4 md:px-16 text-white">
      <div className="flex flex-wrap sm:flex-row max-w-[85vw] lg:max-w-[80vw] sm:ml-auto w-full justify-between gap-x-6 gap-y-[26px] sm:gap-y-3">
        {/* Other Links */}
        {FooterListGroup.map((item, index) => (
          <ul key={index} className="space-y-2 last:mr-auto last:w-max last:ml-4 sm:last:mr-0 sm:last:ml-0">
            {item.group.map((item, index) => (
              <li key={index} className="capitalize">
                <Link
                  to={`${item?.link}`}
                  className="text-[10px] sm:text-xl flex space-x-2 hover:underline"
                >
                  <Minus className="w-2 sm:w-4" />
                  <span dangerouslySetInnerHTML={{__html: item.name}}></span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* Bottom Navbar */}
      <div className="flex md:flex-row items-end md:items-end justify-between">
        <img
          className="w-32 md:w-60 object-contain"
          draggable={false}
          src="/assets/Pragyanam.png"
          alt="Pragyanam"
        />
        <div className="flex flex-col items-center gap-x-6">
          <div className="text-[10px] sm:text-base">{isLang ? "Follow on Social" : "सोशल पर फॉलो करें"}</div>
          {/* Ṣocial Media Icons */}
          <div className="flex space-x-3">
            {SocialMediaIcon.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <img
                  draggable={false}
                  className="w-6 h-6 md:w-auto md:h-auto"
                  src={`/assets/icons/${item.icon}`}
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black md:ml-16 mt-4 pt-2 text-[10px] sm:text-[19px]">
        {isLang
          ? `A-604, Sheraton Classic, Charat Singh Colony, Chakala, Andheri (East),
        Mumbai - 400 093. Maharashtra. India Tel: 98202 27918. E-mail:
        pragyanampublication@gmail.com`
          : "ए-604, शेराटन क्लासिक, चरत सिंह कॉलोनी, चकाला, अंधेरी, (ईस्ट), मुंबई - 400 093. महाराष्ट्र. इंडिया फोन: 98202 27918. E-mail: pragyanampublication@gmail.com"}
      </div>
    </div>
  );
};

export { Footer };
