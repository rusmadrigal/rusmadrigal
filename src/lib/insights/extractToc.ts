import type { PortableTextBlock } from '@portabletext/types'

export type TocItem = {
  id: string
  heading: string
}

type PTTextBlock = PortableTextBlock & {
  style?: string
  children?: Array<{ text?: string }>
}

export function extractToc(content: PortableTextBlock[]): TocItem[] {
  return content
    .map((block) => block as PTTextBlock)
    .filter((block) => block._type === 'block' && block.style === 'h2')
    .map((block) => {
      const heading = (block.children ?? []).map((c) => c.text ?? '').join('')

      const id = heading
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)/g, '')

      return { id, heading }
    })
    .filter((t) => t.heading.trim().length > 0)
}
