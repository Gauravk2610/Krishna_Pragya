import React, { useState } from "react";
import "./Header.css";
import Bars3 from "@heroicons/react/24/outline/Bars3Icon";
import Close from "@heroicons/react/24/outline/XMarkIcon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../features/languageSice";
import { isEnglish } from "../../utils";


const Header = () => {

  const lang = useSelector((state) => state.language.value);
  const isEng = isEnglish(lang)

  const menu = [
    {
      name: isEng ? "Home" : 'होम',
      link: "/",
    },
    {
      name: isEng ? "About Us" : 'हमारे बारे में',
      link: "/#about-us",
    },
    {
      name: isEng ? "Krishna Pragya" : 'कृष्ण प्रज्ञा',
      link: "/krishn-pragya",
    },
    {
      name: isEng ? "Conversations" : 'बात-चित',
      link: "/conversations",
      subMenu: [
        {
          name: isEng ? "KRISHN'S WHISPERING" : "कृष्ण संवाद",
          link: "/krishn's-whispering",
        },
        {
          name: isEng ? "WHITE WINGS (BLOG)" : "श्वेत पंख (ब्लॉग)",
          link: "/blogs",
        },
        {
          name: isEng ? "FORUM" : "फोरम",
          link: "/forum",
        },
        {
          name: isEng ? "CONNECT" : "कनेक्ट करें",
          link: "/connect",
        },
      ],
    },
    {
      name: isEng ? "Tat Tvam Asi" : 'तत त्वम असि',
      link: "/#tat-tvam-asi",
    },
  ];
  
  const HamBurgerMenu = [
    {
      name: isEng ? "About Us" : 'हमारे बारे में',
      link: "/",
      subMenu: [
        {
          name: isEng ? "MY INTRO" : 'मेरा परिचय',
          link: "/my-intro",
        },
        {
          name: isEng ? "VISION & MISSION" : 'परिकल्पना और अभियान',
          link: "/vision-and-mission",
        },
        {
          name: isEng ? "TEAM" : 'टीम',
          link: "/team",
        },
      ],
    },
    {
      name: isEng ? "TAT TVAM ASI" : 'तत त्वम असि',
      link: "vision-and-mission",
      subMenu: [
        {
          name: isEng ? "SOUL PICKINGS" : 'अमृत कण',
          link: "/tat-tvam-asi/soul-pickings",
        },
        {
          name: isEng ? "BUBBLES AND BALLOONS" : 'क्षण तरंग',
          link: "/tat-tvam-asi/bubbles-&-balloons",
        },
        {
          name: isEng ? "PARABLES ZONE" : 'सुन रे मनवा',
          link: "/tat-tvam-asi/parables-zone",
        },
      ],
    },
    {
      name: isEng ? "Media" : 'मीडिया',
      link: "media",
      subMenu: [
        {
          name: isEng ? "PODCAST" : 'पौडकास्ट',
          link: "/podcast",
        },
        {
          name: isEng ? "VIDEOS" : 'विडीओ',
          link: "/videos",
        },
        {
          name: isEng ? "PHOTOS" : 'फ़ोटोज़',
          link: "/photos",
        },
      ],
    },
    {
      name: isEng ? "Gallery" : 'गैलेरी',
      link: "gallery",
      subMenu: [
        {
          name: isEng ? "PAINTINGS" : 'पेंटिंग्स',
          link: "/paintings",
        },
        {
          name: isEng ? "WALLPAPERS" : 'वॉलपेपर्स',
          link: "/wallpapers",
        },
        {
          name: isEng ? "MERCHANDISE" : 'उपहार',
          link: "/merchandise",
        },
      ],
    },
    {
      name: isEng ? "Contact Us" : 'संपर्क हेतु',
      link: "/contact-us",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);

  const toggleMenu = () => {
    document.body.classList.toggle("overflow-hidden");
    setShowMenu(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setShowMenu(false);
    setOpenMenu(null);
  };

  const handLangugaeChange = (lang) => {
    dispatch(setLanguage({ language: lang }));
  };

  return (
    <div className="header h-28 flex px-8 py-4 justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <img
          className="select-none h-24 object-contain"
          draggable={false}
          src="/assets/Logo.png"
          alt="krishna Pragya"
        />
      </Link>
      {/* Navigation Menu */}
      <div className="flex mr-4 items-center">
        {/* Menu */}
        <div className="flex items-center space-x-8">
          {menu.map((item, index) =>
            item.link.includes("#") ? (
              <a className="menu-item" key={index} href={`${item.link}`}>
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                to={item.subMenu ? "#" : `${item?.link}`}
                // submenu visible on hover css
                className="menu-item relative menu"
              >
                {item?.name}
                {/* SUbmenu visible on hover */}
                {item?.subMenu && (
                  <div className="absolute submenu pt-4 left-0 z-50">
                    <div className=" bg-[#747474] backdrop-blur-sm bg-opacity-50 text-white w-[263px] shadow-lg py-4 px-2">
                      <div className="flex flex-col space-y-2">
                        {item?.subMenu.map((subItem, index) => (
                          <Link
                            key={index}
                            to={`${subItem?.link}`}
                            className="menu-item"
                          >
                            {subItem?.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            )
          )}
          {/* Menu Icon */}
          <Bars3
            onClick={toggleMenu}
            className="w-6 h-6 text-white cursor-pointer"
          />
          {/* Language selection */}
          <div className="flex items-center space-x-1">
            <span
              onClick={() => handLangugaeChange("हिन्दी")}
              className={`menu-item ${
                language == "हिन्दी" && "text-[#ffbe00]"
              } `}
            >
              हिन्दी
            </span>
            <span className="menu-item">|</span>
            <span
              onClick={() => handLangugaeChange("English")}
              className={`menu-item ${
                language == "English" && "text-[#ffbe00]"
              }`}
            >
              English
            </span>
          </div>
        </div>
      </div>
      {/* Hamburger Menu */}
      <div
        className={`fixed inset-0 ${
          showMenu ? "translate-y-0" : "-translate-y-[100%]"
        } transition-all duration-500 ease-in-out bg-white z-10`}
      >
        <div className="flex py-10 flex-col h-full w-full items-center ">
          <div className="px-8 max-w-5xl w-full lg:mx-auto">
            <div className="flex flex-col w-full  ">
              <Close
                onClick={closeMenu}
                className="w-6 h-6 mb-10 md:w-10 md:h-10 ml-auto text-black cursor-pointer"
              />
              <div className="mx-auto ">
                <div className="ml-8 space-y-2">
                  {HamBurgerMenu.map((item, index) =>
                    !item?.subMenu ? (
                      <div>
                        <Link
                          key={index}
                          to={`${item?.link}`}
                          onClick={closeMenu}
                          className="menu-item text-black"
                        >
                          {item?.name}
                        </Link>
                      </div>
                    ) : (
                      <div
                        key={index}
                        onClick={() => {
                          openMenu == item.name
                            ? setOpenMenu(null)
                            : setOpenMenu(item?.name);
                        }}
                        className="menu-item text-black"
                      >
                        <div className="">{item?.name}</div>
                        {/* SUbmenu expand on CLick */}
                        {item?.subMenu && (
                          <div
                            className={`${
                              openMenu == item.name
                                ? "accordion-active"
                                : "accordion-inactive"
                            } transition-all duration-150 overflow-hidden space-y-4 ease-in-out flex flex-col ml-8`}
                          >
                            {item?.subMenu?.map((subItem, index) => (
                              <Link
                                key={index}
                                to={`${subItem?.link}`}
                                onClick={() => {
                                  console.log("clicked");
                                  setOpenMenu(null);
                                  closeMenu();
                                }}
                                className="text-black whitespace-pre-wrap"
                              >
                                <span></span>- {subItem?.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
