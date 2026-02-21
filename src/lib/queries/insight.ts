export const INSIGHT_BY_SLUG_QUERY = `
*[_type == "insight" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,

  author->{
    name,
    role,
    bio,
    image{
      asset->{ url },
      alt
    }
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

export const INSIGHTS_INDEX_QUERY = `
*[_type == "insight"] | order(publishedAt desc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  coverImage{
    asset->{ url },
    alt
  }
}
`;
