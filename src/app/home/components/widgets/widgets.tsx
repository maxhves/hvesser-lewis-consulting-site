import CurrentLocationCard from '@/app/home/components/location/current-location-card'
import { ThemeToggleCard } from '@/app/home/components/theme/theme-toggle-card'
import { ContentContainerNew } from '@/components/ui/content-container'

export default function Widgets() {
  return (
    <ContentContainerNew>
      <div className="flex flex-row gap-5">
        <CurrentLocationCard />
        <ThemeToggleCard />
      </div>
    </ContentContainerNew>
  )
}
