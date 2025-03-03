import CurrentLocationCard from '@/app/home/components/location/current-location-card'
import { ThemeToggleCard } from '@/app/home/components/theme/theme-toggle-card'
import { ContentContainerNew } from '@/components/ui/content-container'

export default function Widgets() {
  return (
    <ContentContainerNew>
      <div className="flex flex-col gap-5 border-y border-stone-200 dark:border-stone-800 md:flex-row">
        <CurrentLocationCard />
        <ThemeToggleCard />
      </div>
    </ContentContainerNew>
  )
}
