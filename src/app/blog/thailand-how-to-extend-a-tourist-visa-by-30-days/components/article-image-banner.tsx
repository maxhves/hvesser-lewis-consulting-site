import React from 'react'
import Image, {StaticImageData} from "next/image";

export default function ArticleImageBanner({image}: { image: StaticImageData }) {
  return (
    <div className="w-full h-44 bg-neutral-200">
      <Image
        className="size-full object-cover object-center"
        src={image}
        alt="Article Image"
        placeholder="blur"
      />
    </div>
  )
}