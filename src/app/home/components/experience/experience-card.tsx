"use client"
import React, {useState} from 'react';
import {Button} from "@headlessui/react";
import {LucideChevronsUpDown} from "lucide-react";
import {clsx} from "clsx";

//region Entry

export default function ExperienceCard({logo, companyName, role, startDate, endDate, location, locationShorthand, initiallyShowDescription, children}: {
  logo: React.ReactNode,
  companyName: string,
  role: string,
  startDate: string,
  endDate: string,
  location: string,
  locationShorthand: string,
  initiallyShowDescription: boolean,
  children: React.ReactNode
}) {
  const [showDescription, setShowDescription] = useState(initiallyShowDescription)

  function toggleDescriptionVisibility() {
    setShowDescription(prev => !prev)
  }

  return (
    <div className="flex flex-col bg-stone-50 rounded-lg p-8 gap-y-8 border border-stone-950/10">
      <Header className="hidden sm:flex">
        {logo}
        <HeaderTextContainer>
          <RowContainer>
            <CompanyName>{companyName}</CompanyName>
            <EmploymentDates>{startDate}-{endDate}</EmploymentDates>
          </RowContainer>
          <RowContainer>
            <JobRole>{role}</JobRole>
            <Location>{location}</Location>
          </RowContainer>
        </HeaderTextContainer>
        <ExpandCollapseButton onClick={toggleDescriptionVisibility} />
      </Header>

      <Header className="flex flex-col sm:hidden">
        <RowContainer>
          {logo}
          <ExpandCollapseButton onClick={toggleDescriptionVisibility} />
        </RowContainer>

        <HeaderTextContainer>
          <RowContainer className="mt-4">
            <CompanyName>{companyName}</CompanyName>
          </RowContainer>
          <RowContainer>
            <JobRole>{role}</JobRole>
          </RowContainer>
          <RowContainer className="mt-3">
            <Location>{locationShorthand}</Location>
            <EmploymentDates>{startDate}-{endDate}</EmploymentDates>
          </RowContainer>
        </HeaderTextContainer>
      </Header>

      {showDescription &&
        <Body>
          {children}
        </Body>
      }
    </div>
  );
}

//endregion

//region Expand collapse button

function ExpandCollapseButton({onClick}: { onClick: () => void}) {
  return (
    <Button
      className="flex-none grid size-10 bg-stone-200/35 active:bg-stone-200/75 rounded-lg place-items-center"
      onClick={onClick}
    >
      <LucideChevronsUpDown className="stroke-stone-900" />
    </Button>
  )
}

//endregion

//region Header

function Header({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <div className={clsx(className, "gap-x-8 items-center")}>
      {children}
    </div>
  )
}

//endregion

//region Containers

function HeaderTextContainer({children}: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-col grow gap-y-0.5">
      {children}
    </div>
  )
}

function RowContainer({className, children}: { className?: string, children: React.ReactNode }) {
  return (
    <div className={clsx(className, "w-full flex flex-row justify-between")}>{children}</div>
  )
}

//endregion

//region Body

function Body({children}: { children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}

//endregion

//region Texts

function CompanyName({children}: { children: React.ReactNode }) {
  return (
    <div className="text-stone-900 font-semibold text-sm">
      {children}
    </div>
  )
}

function EmploymentDates({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-normal text-stone-500">
      {children}
    </div>
  )
}

function JobRole({children}: { children: React.ReactNode }) {
  return (
    <div className="text-stone-900 font-normal text-sm">
      {children}
    </div>
  )
}

function Location({children}: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-normal text-stone-500">
      {children}
    </div>
  )
}

//endregion

//region Description

export function ExperienceDescriptionList({children}: { children: React.ReactNode }) {
  return (
    <ul className="list-disc ps-3 space-y-2">
      {children}
    </ul>
  )
}

export function ExperienceDescriptionListItem({children}: { children: React.ReactNode }) {
  return (
    <li className="text-xs/4 text-stone-700">
      {children}
    </li>
  )
}

//endregion