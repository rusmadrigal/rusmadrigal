import {defineField, defineType} from 'sanity'

export const insight = defineType({
  name: 'insight',
  title: 'Insight',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'excerpt',
      title: 'Extracto / Resumen',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'SEO', value: 'seo'},
          {title: 'Performance', value: 'performance'},
          {title: 'Analytics', value: 'analytics'},
          {title: 'AI & Search', value: 'ai-search'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Imagen destacada',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto alternativo (SEO)',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Pie de imagen',
          type: 'string',
        }),
      ],
    }),

    // ✅ AUTHOR (REFERENCE – ÚNICA FORMA CORRECTA)
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{type: 'author'}],
      validation: (Rule) => Rule.required(),
    }),

    // ✅ SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      options: {collapsed: true, collapsible: true},
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta title',
          type: 'string',
          description: 'Si está vacío, se usa el título del insight.',
          validation: (Rule) => Rule.max(60).warning('Ideal: <= 60 caracteres'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta description',
          type: 'text',
          rows: 2,
          description: 'Si está vacío, se usa el extracto.',
          validation: (Rule) => Rule.max(160).warning('Ideal: <= 160 caracteres'),
        }),
        defineField({
          name: 'canonicalPath',
          title: 'Canonical path',
          type: 'string',
          description: 'Ej: /insights/mi-slug. Si vacío, se genera automático.',
          validation: (Rule) =>
            Rule.custom((val) => {
              if (!val) return true
              if (typeof val !== 'string') return 'Debe ser string'
              if (!val.startsWith('/')) return 'Debe iniciar con /'
              return true
            }),
        }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'noIndex',
          title: 'No index',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'noFollow',
          title: 'No follow',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),

    defineField({
      name: 'content',
      title: 'Contenido del artículo',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? `Categoría: ${subtitle}` : 'Sin categoría',
        media,
      }
    },
  },
})
