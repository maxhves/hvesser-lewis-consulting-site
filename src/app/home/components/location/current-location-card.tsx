import { MAPBOX_API_KEY } from '@/lib/constant'
import Image from 'next/image'
import { staticLocationDataUrl } from '@/app/home/components/location/static-location-data-url'

import emojiSmilingFace from '../../../../../public/images/emoji-grinning-face-with-smiling-eyes.png'

//region Map Constants

const STYLE: string = 'streets-v12'
const LATITUDE: number = 10.757035
const LONGITUDE: number = 59.908057
const ZOOM: number = 12
const BEARING: number = 0
const WIDTH: number = 1000
const HEIGHT: number = 300

//endregion

export default function CurrentLocationCard() {
  const staticMapUrl: string = `https://api.mapbox.com/styles/v1/mapbox/${STYLE}/static/${LATITUDE},${LONGITUDE},${ZOOM},${BEARING}/${WIDTH}x${HEIGHT}@2x?access_token=${MAPBOX_API_KEY}`

  return (
    <div className="-mx-px grid border border-stone-200">
      <div className="z-10 flex items-center justify-center" style={{ gridRow: 1, gridColumn: 1 }}>
        <MapMarker />
      </div>
      <div
        className="relative -m-px h-64 overflow-clip rounded-2xl border border-stone-200"
        style={{ gridRow: 1, gridColumn: 1 }}
      >
        <Image
          className="object-cover"
          src={staticMapUrl}
          alt="Map of Oslo, Norway"
          fill={true}
          placeholder="blur"
          blurDataURL={staticLocationDataUrl}
        />
      </div>
    </div>
  )
}

//region Map Marker

function MapMarker() {
  return (
    <div className="flex size-16 items-center justify-center rounded-full border-4 border-white bg-white/50 shadow-lg backdrop-blur-[1px]">
      <Image
        className="size-10"
        src={emojiSmilingFace}
        alt="Emoji Grinning Face With Smiling Eyes"
        width={40}
        height={40}
      />
    </div>
  )
}

//endregion
