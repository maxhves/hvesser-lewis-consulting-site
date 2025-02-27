import { ReactNode } from 'react'
import { ContentContainerNew } from '@/components/ui/content-container'

export default function NavigationBar({ children }: { children: ReactNode }) {
  return (
    <nav className="w-full border-b border-stone-200">
      <ContentContainerNew className="py-8">
        <div className="flex h-full flex-row items-center justify-between">{children}</div>
      </ContentContainerNew>
    </nav>
  )
}
