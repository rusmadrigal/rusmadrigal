export const INSIGHT_BY_SLUG_QUERY = `
*[_type == "insight" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,

  author{
    name,
    role
  },

  coverImage{
    asset->{ url },
    alt,
    caption
  },

  seo{
    metaTitle,
    metaDescription,
    canonicalPath,
    noIndex,
    noFollow,
    ogImage{
      asset->{ url },
      alt
    }
  },

  content
}
`;
