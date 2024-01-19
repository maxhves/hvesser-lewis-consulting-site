import React from 'react';

//region Props

interface SectionHeaderProps {
  number: number,
  heading: string,
}

//endregion

//region Implementation

function SectionHeader(props: SectionHeaderProps) {
  return (
    <div>
      <p className="text-tiber dark:text-old-lace font-medium text-lg pb-12">
        <span className="text-jungle-green">0{props.number}.</span> {props.heading}
      </p>
    </div>
  );
}

export default SectionHeader;

//endregion