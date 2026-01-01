export type PortableTextChild = {
  _type: 'span'
  text: string
}

export type PortableTextBlock = {
  _type: 'block'
  style: 'normal' | 'h2' | 'h3' | 'blockquote'
  children: PortableTextChild[]
}

export type PortableTextContent = PortableTextBlock[]
