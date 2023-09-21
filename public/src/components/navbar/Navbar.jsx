"use client";

import React, { useState } from "react";
import {FiGlobe} from "react-icons/fi";
import {RxHamburgerMenu} from "react-icons/rx";
import Image from "next/image";
import AirBnbLogo from "airbnb/svg/airbnb-logo";
import ContextMenu from "../common/ContextMenu";
import { useAppStore } from "airbnb/store/store";

const Navbar = () => {

  const {setAuthModal, userInfo, setUserInfo} = useAppStore();

  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);

  const contextMenuOptions = [
    {
      name: "Login",
      callBack: () => {
        setAuthModal();
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Signup",
      callBack: () => {
        setAuthModal();
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "AirBnb your home",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Help",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    }
  ]

  const authenticatedContextMenuOptions = [
    {
      name: "Messages",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Notifications",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Trips",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Whishlists",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Manage Listings",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Help",
      callBack: () => {
        setIsContextMenuVisible(false);
      }
    },
    {
      name: "Logout",
      callBack: () => {
        setUserInfo(null);
        setIsContextMenuVisible(false);
        localStorage.clear();
      }
    },
  ]

  return (
    <header className="w-full flex flex-col justify-center transition-all duration-300 h-20 border border-b-gray-200">
      <div className="flex items-center justify-between px-20">
        <div className="flex-grow basis-0">
          <div className="w-max cursor-pointer">
            <AirBnbLogo />
          </div>
        </div>
        <div className="flex-grow basis-0">
          <ul className="flex items-center justify-end gap-6 font-medium">
            <li className="cursor-pointer">
              <span>Airbnb your home</span>
            </li>
            <li className="cursor-pointer">
              <FiGlobe />
            </li>
            <li 
              className="flex cursor-pointer items-center gap-2 border border-gray-300 px-3 py-2 rounded-full hover:shadow-xl transition-all duration-500"
              onClick={() => {
                setIsContextMenuVisible(!isContextMenuVisible);
              }}
            >
              <RxHamburgerMenu/>
              {
                userInfo 
                ? (
                  <span className="flex justify-center items-center bg-black text-white text-sm h-7 w-7 rounded-full">
                    {userInfo?.firstName?.split("").shift().toUpperCase()}
                  </span>
                )
                : (
                <span>
                  <Image src="/empty-profile.png" alt="profile" width={30} height={30}/>
                </span>
                )
              }
            </li>
          </ul>
        </div>
      </div>
      {isContextMenuVisible && 
      (
        <ContextMenu 
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
          cordinates={{ 
            x: window.innerWidth - 250,
            y: 70,
          }}
          options={userInfo ? authenticatedContextMenuOptions : contextMenuOptions}
          
        />
      )
      }
    </header>
  );
};

export default Navbar;
