import React from 'react';
import {clsx} from "clsx";
import Image from "next/image";
import hvalImageSource from '@/../public/images/company/hval_logo.png'

//region Implementation

export default function HvalLogo({className}: { className?: string }) {
  return (
    <div className={clsx(className, "grid size-10 bg-blue-300 place-items-center")}>
      <Image
        className="size-8"
        src={hvalImageSource}
        alt="Hval logo"
        width={40}
        height={40}
        unoptimized={true}
        quality={100}
      />
    </div>
  );
}

//endregion