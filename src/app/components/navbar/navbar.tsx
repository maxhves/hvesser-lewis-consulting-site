"use client";
import React, {useState} from 'react';
import Link from "next/link";
import { Spiral as Hamburger } from 'hamburger-react';
import NavbarDrawerLink from '@/app/components/navbar/navbar_drawer_link';

function Navbar() {
  const [showDrawer, setShowDrawer] = useState(false)

  function onDrawerLinkClick() {
    setShowDrawer(false);
  }

  return (
    <div className="sticky top-0 flex flex-col z-10">
      {/* Main navigation bar */}
      <div className="px-5 py-0 flex justify-center bg-old-lace dark:bg-tiber border-b border-cutty-sark dark:border-aths-special border-opacity-10 dark:border-opacity-10 z-10 h-16">
        <div className="flex flex-row justify-between w-full md:w-10/12">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#home">
              <p className="text-tiber dark:text-old-lace font-bold text-lg">MHL</p>
            </Link>
          </div>

          {/* Drawer button */}
          <div className="flex items-center md:hidden text-tiber dark:text-old-lace">
            <Hamburger
              toggled={showDrawer}
              toggle={setShowDrawer}
              size={24}
              distance="sm"
            />
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-8 text-tiber dark:text-old-lace text-sm">
            <Link href="#section-about" className="hover:text-jungle-green"><span className="text-jungle-green">01.</span> About</Link>
            <Link href="#section-experience" className="hover:text-jungle-green"><span className="text-jungle-green">02.</span> Experience</Link>
            <Link href="#section-projects" className="hover:text-jungle-green"><span className="text-jungle-green">03.</span> Projects</Link>
            <Link href="#section-contact" className="hover:text-jungle-green"><span className="text-jungle-green">04.</span> Contact</Link>
          </div>
        </div>
      </div>

      {/* Navigation drawer */}
      <div className={`transform ${ showDrawer ? "translate-y-0 visible" : "-translate-y-96 invisible"} transition-all duration-500 ease-in-out`}>
        <div className="absolute md:visible w-full bg-old-lace dark:bg-tiber border-b border-cutty-sark dark:border-aths-special border-opacity-10 dark:border-opacity-10">
          <ul className="space-y-2 p-5">
            <li>
              <NavbarDrawerLink
                position={1}
                section="About"
                onClick={onDrawerLinkClick}
              />
            </li>
            <li>
              <NavbarDrawerLink
                position={2}
                section="Experience"
                onClick={onDrawerLinkClick}
              />
            </li>
            <li>
              <NavbarDrawerLink
                position={3}
                section="Projects"
                onClick={onDrawerLinkClick}
              />
            </li>
            <li>
              <NavbarDrawerLink
                position={4}
                section="Contact"
                onClick={onDrawerLinkClick}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;