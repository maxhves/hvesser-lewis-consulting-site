"use client"
import React, {useState} from 'react';
import {
  NavigationBar, NavigationBarActionLink,
  NavigationBarContent,
  NavigationBarDrawer,
  NavigationBarDrawerLink,
  NavigationBarDrawerTriggerButton,
  NavigationBarHomeLink,
  NavigationBarHomeLinkLabel,
  NavigationBarMenu,
  NavigationBarMenuLink,
} from "@/components/ui/navigation-bar";
import HomeNavLink from "@/app/home/data/navigation/home-nav-link";

//region Model

const homeNavLinks: HomeNavLink[] = [
  HomeNavLink.About, HomeNavLink.Services, HomeNavLink.Portfolio, HomeNavLink.Blog
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

  return (
    <NavigationBar>
      <NavigationBarContent>
        <NavigationBarHomeLink onClick={closeDrawer}>
          <NavigationBarHomeLinkLabel>
            maxhves
          </NavigationBarHomeLinkLabel>
        </NavigationBarHomeLink>

          <NavigationBarMenu>
            {homeNavLinks.map((link: HomeNavLink) => (
              <NavigationBarMenuLink key={link.label} href={link.href}>
                {link.label}
              </NavigationBarMenuLink>
            ))}
          </NavigationBarMenu>

        <NavigationBarActionLink>
          Let’s Talk
        </NavigationBarActionLink>

        <NavigationBarDrawerTriggerButton open={drawerOpen} onClick={toggleDrawer} />
      </NavigationBarContent>

      <NavigationBarDrawer open={drawerOpen}>
        {homeNavLinks.map((link: HomeNavLink) => (
          <NavigationBarDrawerLink key={link.label} href={link.href} onClick={closeDrawer}>
            {link.label}
          </NavigationBarDrawerLink>
        ))}
      </NavigationBarDrawer>
    </NavigationBar>
  );
}

//endregion