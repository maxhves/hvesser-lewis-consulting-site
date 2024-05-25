import React from 'react';

//region Entry

export function PrimaryProjectsList({children}: { children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  );
}

//endregion

//region List item

export function PrimaryProjectListItem({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

//endregion

//region Container

export function PrimaryProjectFooter({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

//endregion

//region Components

export function PrimaryProjectTitle({children}: { children: React.ReactNode }) {
  return (
    <h1>
      {children}
    </h1>
  )
}

export function PrimaryProjectImage({imageSource}: { imageSource: string }) {
  return (
    <div>
      Image goes here...
    </div>
  )
}

export function PrimaryProjectDescription({children}: { children: React.ReactNode }) {
  return (
    <p>
      {children}
    </p>
  )
}

export function PrimaryProjectTechnologiesList({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

export function PrimaryProjectTechnologyListItem({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

export function PrimaryProjectVisitButton({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

//endregion