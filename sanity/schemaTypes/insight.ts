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
      options: {
        source: 'title',
        maxLength: 96,
      },
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

    defineField({
      name: 'author',
      title: 'Autor',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Nombre',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'role',
          title: 'Rol / Especialidad',
          type: 'string',
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
