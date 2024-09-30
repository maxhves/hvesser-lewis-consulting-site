import {NavigationLink} from "@/types/navigation/navigation-link";

//region Properties

const SECTION_PREFIX: string = "section"

const SECTION_ABOUT: string = "about"
const SECTION_EXPERIENCE: string = "experience"
const SECTION_PROJECTS: string = "projects"
const SECTION_CONTACT: string = "contact"
const PAGE_BLOG: string = "blog"

//endregion

//region About

export const ABOUT_NAV_SECTION: NavigationLink = {
  id: `${SECTION_PREFIX}_${SECTION_ABOUT}`,
  label: SECTION_ABOUT,
  href: `/#${SECTION_PREFIX}_${SECTION_ABOUT}`
}

//endregion

//region Experience

export const EXPERIENCE_NAV_SECTION: NavigationLink = {
  id: `${SECTION_PREFIX}_${SECTION_EXPERIENCE}`,
  label: SECTION_EXPERIENCE,
  href: `/#${SECTION_PREFIX}_${SECTION_EXPERIENCE}`
}

//endregion

//region Projects

export const PROJECTS_NAV_SECTION: NavigationLink = {
  id: `${SECTION_PREFIX}_${SECTION_PROJECTS}`,
  label: SECTION_PROJECTS,
  href: `/#${SECTION_PREFIX}_${SECTION_PROJECTS}`
}

//endregion

//region Contact

export const CONTACT_NAV_SECTION: NavigationLink = {
  id: `${SECTION_PREFIX}_${SECTION_CONTACT}`,
  label: SECTION_CONTACT,
  href: `/#${SECTION_PREFIX}_${SECTION_CONTACT}`
}

//endregion

//region Blog

export const BLOG_PAGE: NavigationLink = {
  id: PAGE_BLOG,
  label: PAGE_BLOG,
  href: `/${PAGE_BLOG}`
}

//endregion