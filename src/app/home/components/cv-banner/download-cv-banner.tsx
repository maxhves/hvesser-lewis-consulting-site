import React from 'react';
import ContentContainer from "@/components/ui/content-container";
import DownloadCvButton from "@/app/home/components/cv-banner/download-cv-button";

//region Entry

export default function DownloadCvBanner() {
  return (
    <DownloadCvBannerContent>
      <DownloadCvText>
        <DownloadCvHeading>
          Want to know more?
        </DownloadCvHeading>
        <DownloadCvSubheading>
          See my full experience on mv CV
        </DownloadCvSubheading>
      </DownloadCvText>
      <DownloadCvButton>
        Download
      </DownloadCvButton>
    </DownloadCvBannerContent>
  );
}

//endregion

//region Container

function DownloadCvBannerContent({children}: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-r from-pink-950/75 to-pink-950/75 via-pink-400/50 py-2">
      <ContentContainer>
        <div className="flex items-center justify-between">
          {children}
        </div>
      </ContentContainer>
    </div>
  )
}

//endregion

//region Text

function DownloadCvText({children}: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-2">
      {children}
    </div>
  )
}

function DownloadCvHeading({children}: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-neutral-50 font-bold">
      {children}
    </p>
  )
}

function DownloadCvSubheading({children}: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-neutral-200">
      {children}
    </p>
  )
}

//endregion