"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";
import useWindowWidth from '@/hooks/useWindowWidth';



const Header= () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 1000;

  const landingPageSections = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "about-us",
    },
    {
      label: "Property-Listing",
      path: "property-listing",
    },
    {
      label: "Property-Inspection",
      path:  "property-inspection",
    },
    {
      label: "Contact",
      path: "tel:08156959983",
    },
  ];

  useEffect(() => {
    if(windowWidth >= 999){
      setShowNav(true)
    }
    else{
      setShowNav(false)
    }
  }, [windowWidth])

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          className={styles.brandLogo}
          src={"/aremudami.png"}
          alt="Aremu Dami Real Estate Logo"
          width={120}
          height={80}
          priority
        />

        {(
          <button 
            aria-label={!showNav ? "Show navigation bar" : "Close navigation bar"}  
            aria-expanded={showNav}
            aria-controls="main-navigation"
            className={styles.showElement}
            onClick={() => setShowNav(prev => !prev)}
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 448 512">
              {
                !showNav
                ?
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                :
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
              }  
            </svg>
          </button>
        )}
      </div>

      {(showNav) && (
        <nav className={styles.navContainer} id="main-navigation">
          <ul className={styles.navList}>
            {landingPageSections.map((item, index) => (
              <li key={index} className={styles.navItem}>
                {
                  item.label === "Contact"
                  ?
                  <a href={item.path}>Contact</a>
                  :
                  <Link 
                    href={`${item.path}`}
                    onClick={() => {
                        if (isMobile) setShowNav(false);
                    }}
                  >
                  {item.label}
                  </Link>
                }
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
