import React from 'react';
import Image from 'next/image';

//region Properties

interface PastEmploymentCardProps {
  jobTitle: string,
  company: string,
  startYear: string,
  endYear: string,
  location: string,
  imageSource: string,
  body: string[],
}

//endregion

//region Implementation

function PastEmploymentCard(
  props: PastEmploymentCardProps,
) {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
      {/* Company logo */}
      <div>
        <div className="border-daintree dark:border-old-lace border-opacity-10 dark:border-opacity-10 border-2 rounded-full w-fit">
          <div className="h-10 w-10 rounded-full bg-aths-special dark:bg-tiber">
            <Image
              src={props.imageSource}
              height={40}
              width={40}
              alt="Company logo"
            />
          </div>
        </div>
      </div>

      <div>
        {/* Text */}
        <div className="space-y-6 lg:space-y-8">
          {/* Header */}
          <div className="space-y-1">
            <p className="text-tiber dark:text-old-lace font-medium">{`${props.jobTitle} @ ${props.company}`}</p>
            <div className="flex flex-row justify-between text-cutty-sark/80 dark:text-aths-special/90 text-sm">
              <p>{`${props.startYear} - ${props.endYear}`}</p>
              <p>{props.location}</p>
            </div>
          </div>

          {/* Body */}
          <div>
            <ul className="list-disc text-cutty-sark dark:text-aths-special text-sm ms-4 space-y-4">
              {props.body.map((actionPoint, index) => (
                <li key={index}>{actionPoint}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PastEmploymentCard;

//endregion