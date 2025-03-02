'use client'
import React, { useState } from 'react'
import {
  NavigationBar,
  NavigationBarActionLink,
  NavigationBarContent,
  NavigationBarDrawer,
  NavigationBarDrawerLink,
  NavigationBarDrawerTriggerButton,
  NavigationBarHomeLink,
  NavigationBarHomeLinkLabel,
  NavigationBarMenu,
  NavigationBarMenuLink,
} from '@/components/ui/navigation-bar'
import HomeNavLink from '@/app/home/data/navigation/home-nav-link'
import HvesserLewisConsultingLogo from '@/components/icon/hvesser-lewis-consulting-logo'

//region Model

const homeNavLinks: HomeNavLink[] = [HomeNavLink.About, HomeNavLink.Services, HomeNavLink.Portfolio, HomeNavLink.Blog]

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
          <HvesserLewisConsultingLogo className="size-6 text-neutral-950" />
          <NavigationBarHomeLinkLabel>
            <span className="hidden md:block">Hvesser-Lewis Consulting</span>
            <span className="block font-semibold md:hidden">HLC</span>
          </NavigationBarHomeLinkLabel>
        </NavigationBarHomeLink>

        <NavigationBarMenu>
          {homeNavLinks.map((link: HomeNavLink) => (
            <NavigationBarMenuLink key={link.label} href={link.href}>
              {link.label}
            </NavigationBarMenuLink>
          ))}
        </NavigationBarMenu>

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
  )
}

//endregion
