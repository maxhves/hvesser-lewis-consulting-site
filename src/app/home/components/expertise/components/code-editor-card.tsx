import { ReactNode } from 'react'
import { clsx } from 'clsx'
import { jetBrainsMono } from '@/app/fonts/fonts'

export default function CodeEditorCard({ sampleLabel, children }: { sampleLabel: string; children: ReactNode }) {
  return (
    <div className="-m-px flex-1 border border-stone-200">
      <div className="-m-px flex flex-col overflow-clip rounded-2xl border border-stone-200 bg-white">
        {/* Tab */}
        <div className="w-full border-b border-stone-200 bg-stone-50">
          <div className="w-[calc(50%+1px)] border-e border-stone-200 bg-white px-6 py-3 md:w-fit">
            <span className="flex text-xs text-stone-700">{sampleLabel}</span>
          </div>
        </div>

        <div className="flex">
          {/* Line numbers */}
          <div className="hidden border-e border-stone-200 p-6 md:flex">
            <pre>
              <code className={clsx(jetBrainsMono.className, 'whitespace-pre-wrap text-end text-stone-400')}>
                1{'\n'}2{'\n'}3{'\n'}4{'\n'}5{'\n'}6{'\n'}7{'\n'}8{'\n'}9{'\n'}10{'\n'}11{'\n'}12
              </code>
            </pre>
          </div>

          {/* Code Surface */}
          <div className="p-6">
            <pre>
              <code className={clsx(jetBrainsMono.className, 'whitespace-pre-wrap font-medium text-stone-700')}>
                {children}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

//region Syntax Highlighting

export function Keyword({ children }: { children: ReactNode }) {
  return <span className="text-blue-800">{children}</span>
}

export function FunctionName({ children }: { children: ReactNode }) {
  return <span className="italic text-teal-700">{children}</span>
}

export function Variable({ children }: { children: ReactNode }) {
  return <span className="text-fuchsia-900">{children}</span>
}

export function StringLiteral({ children }: { children: ReactNode }) {
  return <span className="text-green-700">&quot;{children}&quot;</span>
}

//endregion
