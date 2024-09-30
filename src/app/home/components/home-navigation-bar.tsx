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
  NavigationBarMenuLink,
} from "@/components/ui/navigation-bar";
import {NavigationLink} from "@/types/navigation/navigation-link";
import {
  ABOUT_NAV_SECTION, BLOG_PAGE,
  CONTACT_NAV_SECTION,
  EXPERIENCE_NAV_SECTION,
  PROJECTS_NAV_SECTION
} from "@/app/home/data/navigation/home-navigation-section";

//region Model

const navigationSections: NavigationLink[] = [
  ABOUT_NAV_SECTION, EXPERIENCE_NAV_SECTION, PROJECTS_NAV_SECTION, CONTACT_NAV_SECTION, BLOG_PAGE
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

  function formatLinkLabel(label: string): string {
    return label.charAt(0).toUpperCase() + label.slice(1)
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
          {navigationSections.map((section: NavigationLink) => (
            <NavigationBarMenuLink
              key={section.id}
              href={section.href}
            >
              {formatLinkLabel(section.label)}
            </NavigationBarMenuLink>
          ))}
        </NavigationBarMenu>

        <NavigationBarDrawerTriggerButton open={drawerOpen} onClick={toggleDrawer} />
      </NavigationBarContent>

      <NavigationBarDrawer open={drawerOpen}>
        {/* TODO: Replace with new link type */}
        {navigationSections.map((section: NavigationLink) => (
          <NavigationBarDrawerLink
            key={section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </NavigationBarDrawerLink>
        ))}
        {/* TODO: Replace with new link type */}
      </NavigationBarDrawer>
    </NavigationBar>
  );
}

//endregion