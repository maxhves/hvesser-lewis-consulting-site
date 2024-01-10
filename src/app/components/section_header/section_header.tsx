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
      <p className="text-cutty-sark dark:text-aths-special font-medium text-lg">
        <span className="text-jungle-green">0{props.number}.</span> {props.heading}
      </p>
    </div>
  );
}

export default SectionHeader;

//endregion