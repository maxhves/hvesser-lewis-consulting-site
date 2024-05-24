"use client"
import React, {useState} from 'react';
import {
  NavigationBar,
  NavigationBarContent, NavigationBarDrawer, NavigationBarDrawerLink, NavigationBarDrawerTriggerButton,
  NavigationBarHomeLink,
  NavigationBarHomeLinkLabel, NavigationBarMenu, NavigationBarMenuLink
} from "@/components/ui/navigation-bar";
import {usePathname} from "next/navigation";

//region Model

abstract class NavigationRoute {
  static label: string
  protected static href: string
}

//endregion

//region Routes

abstract class AboutRoute extends NavigationRoute {
  static label = "About"
  static href = "about"
}

abstract class ExperienceRoute extends NavigationRoute {
  static label = "Experience"
  static href = "experience"
}

abstract class ProjectsRoute extends NavigationRoute {
  static label = "Projects"
  static href = "projects"
}

abstract class ContactRoute extends NavigationRoute {
  static label = "Contact"
  static href = "contact"
}

//endregion

//region Entry

export default function HomeNavigationBar() {
  const activePathname = usePathname()

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

  function routeIsActive(prefix: string) {
    console.log(`routeIsActive - Prefix: ${prefix} Pathname: ${activePathname}`)
    return activePathname.startsWith("/" + prefix)
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
          <NavigationBarMenuLink href={AboutRoute.href} active={routeIsActive(AboutRoute.href)}>
            {AboutRoute.label}
          </NavigationBarMenuLink>

          <NavigationBarMenuLink href={ExperienceRoute.href} active={routeIsActive(ExperienceRoute.href)}>
            {ExperienceRoute.label}
          </NavigationBarMenuLink>

          <NavigationBarMenuLink href={ProjectsRoute.href} active={routeIsActive(ProjectsRoute.href)}>
            {ProjectsRoute.label}
          </NavigationBarMenuLink>

          <NavigationBarMenuLink href={ContactRoute.href} active={routeIsActive(ContactRoute.href)}>
            {ContactRoute.label}
          </NavigationBarMenuLink>
        </NavigationBarMenu>

        <NavigationBarDrawerTriggerButton open={drawerOpen} onClick={toggleDrawer} />
      </NavigationBarContent>

      <NavigationBarDrawer open={drawerOpen}>
        <NavigationBarDrawerLink
          href={AboutRoute.href}
          active={routeIsActive(AboutRoute.href)}
          onClick={closeDrawer}
        >
          {AboutRoute.label}
        </NavigationBarDrawerLink>

        <NavigationBarDrawerLink
          href={ExperienceRoute.href}
          active={routeIsActive(ExperienceRoute.href)}
          onClick={closeDrawer}
        >
          {ExperienceRoute.label}
        </NavigationBarDrawerLink>

        <NavigationBarDrawerLink
          href={ProjectsRoute.href}
          active={routeIsActive(ProjectsRoute.href)}
          onClick={closeDrawer}
        >
          {ProjectsRoute.label}
        </NavigationBarDrawerLink>

        <NavigationBarDrawerLink
          href={ContactRoute.href}
          active={routeIsActive(ContactRoute.href)}
          onClick={closeDrawer}
        >
          {ContactRoute.label}
        </NavigationBarDrawerLink>
      </NavigationBarDrawer>
    </NavigationBar>
  );
}

//endregion