"use client"
import React, {useState} from 'react';
import {
  NavigationBar,
  NavigationBarContent,
  NavigationBarDrawer,
  NavigationBarDrawerLink,
  NavigationBarDrawerTriggerButton,
  NavigationBarHomeLink,
  NavigationBarHomeLinkLabel,
  NavigationBarMenu,
  NavigationBarMenuLink
} from "@/components/ui/navigation-bar";
import {NavigationSection} from "@/types/navigation/NavigationSection";
import {
  ABOUT_NAV_SECTION,
  CONTACT_NAV_SECTION,
  EXPERIENCE_NAV_SECTION,
  PROJECTS_NAV_SECTION
} from "@/app/home/data/navigation/home-navigation-section";

//region Model

const navigationSections: NavigationSection[] = [
  ABOUT_NAV_SECTION, EXPERIENCE_NAV_SECTION, PROJECTS_NAV_SECTION, CONTACT_NAV_SECTION
]

//endregion

//region Entry

export default function HomeNavigationBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  function toggleDrawer() {
    drawerOpen ? closeDrawer() : openDrawer()
  }

  function closeDrawer() {
    setDrawerOpen(false)
  }

  function openDrawer() {
    setDrawerOpen(true)
  }

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })

    closeDrawer()
  }

  return (
    <NavigationBar>
      <NavigationBarContent>
        <NavigationBarHomeLink onClick={closeDrawer}>
          <NavigationBarHomeLinkLabel>
            maxhves
          </NavigationBarHomeLinkLabel>
        </NavigationBarHomeLink>

        <NavigationBarMenu>
          {navigationSections.map((section: NavigationSection) => (
            <NavigationBarMenuLink
              key={section.id}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </NavigationBarMenuLink>
          ))}
        </NavigationBarMenu>

        <NavigationBarDrawerTriggerButton open={drawerOpen} onClick={toggleDrawer} />
      </NavigationBarContent>

      <NavigationBarDrawer open={drawerOpen}>
        {navigationSections.map((section: NavigationSection) => (
          <NavigationBarDrawerLink
            key={section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </NavigationBarDrawerLink>
        ))}
      </NavigationBarDrawer>
    </NavigationBar>
  );
}

//endregion