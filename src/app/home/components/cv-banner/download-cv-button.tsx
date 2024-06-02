import React from 'react';
import {Button} from "@/components/ui/button";
import {Download} from "lucide-react";

//region Constants

const cvDownloadPath: string =  '/files/cv/maxhves_cv.pdf'

//endregion

//region Entry

export default function DownloadCvButton({children}: { children: React.ReactNode }) {
  return (
    <div>
      <Button color="white" href={cvDownloadPath} rel="noreferrer" target="_blank">
        {children}
        <Download className="size-4" />
      </Button>
    </div>
  );
}

//endregion