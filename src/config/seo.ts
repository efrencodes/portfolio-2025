const DEFAULT_META_DESCRIPTION =
  "Senior frontend engineer con más de 8 años de experiencia desarrollando productos digitales";

const DEFAULT_META_HEADLINE = {
  title: `Efren Martinez - ${DEFAULT_META_DESCRIPTION}`,
  description: DEFAULT_META_DESCRIPTION,
  url: new URL("https://www.efrencodes.com"),
};

export const META_SEO = {
  title: DEFAULT_META_HEADLINE.title,
  description: DEFAULT_META_HEADLINE.description,
  canonical: DEFAULT_META_HEADLINE.url,
  twitter: {
    creator: "@efrencodes",
    card: "summary_large_image",
    title: DEFAULT_META_HEADLINE.title,
    description: DEFAULT_META_HEADLINE.description,
    image: "",
    imageAlt: DEFAULT_META_HEADLINE.title,
  },
  openGraph: {
    title: DEFAULT_META_HEADLINE.title,
    image: "",
    url: DEFAULT_META_HEADLINE.url,
    type: "summary_large_image",
    description: DEFAULT_META_HEADLINE.description,
    siteName: DEFAULT_META_HEADLINE.title,
    locale: "es_MX",
  },
};

export const DEFAULT_THEME_COLOR = '#d4d4d8'
