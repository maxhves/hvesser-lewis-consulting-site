import {NavigationSection} from "@/types/navigation/NavigationSection";

//region Properties

const SECTION_PREFIX: string = "section"

//endregion

//region About

export const ABOUT_NAV_SECTION: NavigationSection = { label: "About", id: `${SECTION_PREFIX}_about` }

//endregion

//region Experience

export const EXPERIENCE_NAV_SECTION: NavigationSection = { label: "Experience", id: `${SECTION_PREFIX}_experience` }

//endregion

//region Projects

export const PROJECTS_NAV_SECTION: NavigationSection = { label: "Projects", id: `${SECTION_PREFIX}_projects` }

//endregion

//region Contact

export const CONTACT_NAV_SECTION: NavigationSection = { label: "Contact", id: `${SECTION_PREFIX}_contact` }

//endregion