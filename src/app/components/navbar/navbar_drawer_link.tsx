import React from 'react';
import Link from 'next/link';

//region Properties

interface NavbarDrawerLinkProps {
  position: number,
  section: string,
  onClick: () => any,
}

//endregion

//region Implementation

function NavbarDrawerLink(props: NavbarDrawerLinkProps) {
  return (
    <div>
      <Link
        href={`#section-${props.section.toLowerCase()}`}
        passHref
        legacyBehavior
      >
        <a onClick={props.onClick}>
          <p className="py-6 text-tiber text-sm hover:text-jungle-green">
            <span className="text-jungle-green">0{props.position}.</span> {props.section}
          </p>
        </a>
      </Link>
    </div>
  );
}

export default NavbarDrawerLink;

//endregion