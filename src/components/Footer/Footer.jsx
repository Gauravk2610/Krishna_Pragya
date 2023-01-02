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
          link: "krishna-pragya",
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
          name: isLang ? "Privacy Policy" : "गोपनीयता नीति",
          link: "/privacy-policy",
        },
        {
          name: isLang ? "Terms & Conditions" : "नियम एवं शर्तें",
          link: "/terms-and-conditions",
        },
      ],
    },
  ];

  const SocialMediaIcon = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/pragyanam/",
      icon: "Instagram.png",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCZQY4Z2ZQZ2ZQZ2ZQZ2ZQZ2",
      icon: "Youtube.svg",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/pragyanam/",
      icon: "Linkedin.svg",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/pragyanam",
      icon: "Twitter.svg",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/pragyanam",
      icon: "Facebook.svg",
    },
  ];
  return (
    <div className="linear-bg flex flex-col py-14 px-16 text-white">
      <div className="flex flex-wrap max-w-[85vw] ml-auto w-full justify-evenly gap-x-6 gap-y-3">
        {/* Subscribe For More */}
        {/* <div className="space-y-2 max-w-xs w-full">
          <div>SUBSCRIBE FOR MORE</div>
          <div className="flex rounded-md ">
            <input
              className="px-4 py-2 w-full rounded-l-md outline-none"
              placeholder="YOUR E-MAIL"
              type="email"
            />
            <button className="bg-[#2E6295] px-2 py-2 min-w-fit rounded-r-md">
              SIGN UP
            </button>
          </div>
        </div> */}
        {/* Other Links */}
        {FooterListGroup.map((item, index) => (
          <ul key={index} className="space-y-4">
            {item.group.map((item, index) => (
              <li key={index} className="capitalize">
                <Link
                  to={`${item?.link}`}
                  className="text-xl flex items-center space-x-2 hover:underline"
                >
                  <Minus className="w-4" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
      {/* Bottom Navbar */}
      <div className="flex items-end justify-between">
        <img
          className="w-60 object-contain"
          draggable={false}
          src="/assets/Pragyanam.png"
          alt="Pragyanam"
        />
        <div className="flex items-center space-x-6">
          <div>{isLang ? "Follow on Social" : "सोशल पर फॉलो करें"}</div>
          {/* Ṣocial Media Icons */}
          <div className="flex space-x-3">
            {SocialMediaIcon.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noreferrer">
                <img
                  draggable={false}
                  src={`/assets/icons/${item.icon}`}
                  alt={item.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black ml-16 mt-4 pt-2 text-[19px]">
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
