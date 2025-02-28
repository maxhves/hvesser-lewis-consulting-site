import { MAPBOX_API_KEY } from '@/lib/constant'
import Image from 'next/image'
import { staticLocationDataUrl } from '@/app/home/components/location/static-location-data-url'

export default function CurrentLocationCard() {
  return (
    <div className="flex flex-col">
      <div>Hello, can you see me? {MAPBOX_API_KEY}</div>
      <div className="relative mb-16 h-64 overflow-clip rounded-2xl border border-stone-200">
        <Image
          className="object-cover"
          src="https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/10.757035,59.908057,12,0/1000x300@2x?access_token=pk.eyJ1IjoibWF4aHZlcyIsImEiOiJjbTdvOHY0c3UwMTBmMmpxMmE4a29vbjNsIn0.tRYHLeCn_g5WRru6HTcfRw"
          alt="Test Map Image"
          fill={true}
          placeholder="blur"
          blurDataURL={staticLocationDataUrl}
        />
      </div>
    </div>
  )
}
