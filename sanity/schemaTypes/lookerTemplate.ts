import {defineField, defineType} from 'sanity'

export const lookerTemplate = defineType({
  name: 'lookerTemplate',
  title: 'Looker Studio',
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
      title: 'Resumen corto (tarjeta / encabezado)',
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
          {title: 'Rendimiento Web', value: 'performance'},
          {title: 'Analítica', value: 'analytics'},
          {title: 'Contenido', value: 'content'},
        ],
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
      name: 'heroImage',
      title: 'Imagen principal (hero)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Texto alternativo (alt)', type: 'string'}),
        defineField({name: 'caption', title: 'Pie de imagen', type: 'string'}),
      ],
    }),

    defineField({
      name: 'templateUrl',
      title: 'URL de la plantilla (copiar enlace)',
      type: 'url',
      description:
        'URL pública de la plantilla de Looker Studio que el usuario puede abrir y copiar.',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),

    defineField({
      name: 'demoUrl',
      title: 'URL de demo (opcional)',
      type: 'url',
      description: 'Enlace opcional a un demo o reporte de ejemplo (si publicas uno).',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),

    defineField({
      name: 'sidebar',
      title: 'Barra lateral (detalles de la plantilla)',
      type: 'object',
      fields: [
        defineField({
          name: 'difficulty',
          title: 'Dificultad',
          type: 'string',
          options: {
            list: [
              {title: 'Principiante', value: 'beginner'},
              {title: 'Intermedio', value: 'intermediate'},
              {title: 'Avanzado', value: 'advanced'},
            ],
          },
        }),

        defineField({
          name: 'estimatedSetupTime',
          title: 'Tiempo estimado de configuración',
          type: 'string',
          description: 'Ejemplo: "10–20 minutos"',
        }),

        defineField({
          name: 'includes',
          title: 'Incluye',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Viñetas. Ejemplo: "Reporte de páginas GSC", "Resumen de CWV"...',
        }),

        defineField({
          name: 'requirements',
          title: 'Requisitos',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Viñetas. Ejemplo: "Acceso a Google Search Console", "Propiedad de GA4"...',
        }),

        defineField({
          name: 'dataSources',
          title: 'Fuentes de datos',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Viñetas. Ejemplo: "Google Search Console", "GA4"...',
        }),

        defineField({
          name: 'connectors',
          title: 'Conectores (opcional)',
          type: 'array',
          of: [{type: 'string'}],
        }),
      ],
    }),

    defineField({
      name: 'content',
      title: 'Contenido principal',
      type: 'array',
      of: [{type: 'block'}],
      description:
        'Descripción larga: qué hace la plantilla, cómo usarla, explicación de capturas, notas, etc.',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta título',
          type: 'string',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta descripción',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'canonicalPath',
          title: 'Ruta canónica',
          type: 'string',
          description: 'Ejemplo: "/looker-studio/seo-dashboard"',
        }),
        defineField({
          name: 'noIndex',
          title: 'noindex',
          type: 'boolean',
        }),
        defineField({
          name: 'noFollow',
          title: 'nofollow',
          type: 'boolean',
        }),
        defineField({
          name: 'ogImage',
          title: 'Imagen OG',
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Texto alternativo (alt)',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
