export const LOOKER_TEMPLATE_BY_SLUG_QUERY = `
*[_type == "lookerTemplate" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  templateUrl,
  demoUrl,
  heroImage{
    asset->{ url },
    alt,
    caption
  },
  sidebar{
    difficulty,
    estimatedSetupTime,
    includes,
    requirements,
    dataSources,
    connectors
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

export const RELATED_LOOKER_TEMPLATES_QUERY = `
*[_type == "lookerTemplate" && slug.current != $slug] | order(publishedAt desc)[0...3]{
  "slug": slug.current,
  title,
  category
}
`;
