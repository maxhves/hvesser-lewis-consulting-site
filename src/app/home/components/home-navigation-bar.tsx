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
        {navigationSections.map((section: NavigationLink) => (
          <NavigationBarDrawerLink
            key={section.id}
            href={section.href}
            onClick={closeDrawer}
          >
            {formatLinkLabel(section.label)}
          </NavigationBarDrawerLink>
        ))}
      </NavigationBarDrawer>
    </NavigationBar>
  );
}

//endregion