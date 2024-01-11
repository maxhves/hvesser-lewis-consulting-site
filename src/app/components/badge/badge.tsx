import React from 'react';

//region Props

interface BadgeProps {
  label: string,
}

//endregion

//region Implementation

function Badge(props: BadgeProps) {
  return (
    <div className="bg-aths-special py-1 px-3 rounded-lg">
      <p className="text-cutty-sark text-sm">{props.label}</p>
    </div>
  );
}

export default Badge;

//endregion