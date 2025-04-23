import Helmet from "./Helmet";

interface SeoType {
  title: string;
  author?: string;
  description?: string;
  lang?: string;
  meta?: Array<string>;
  keywords?: Array<string>;
}

function SEO({ description, lang, meta, keywords, title, author }: SeoType) {
  const googleSiteVerification = "";
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `google-site-verification`,
          content: googleSiteVerification,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        .concat(
          meta
            ? {
                name: `meta`,
                content: meta.join(`, `),
              }
            : [],
        )}
    />
  );
}

export default SEO;
