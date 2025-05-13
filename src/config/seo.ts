export const DEFAULT_AUTHOR = 'Efrén Martínez'
export const DEFAULT_PAGE_WEB = 'https://www.efrencodes.dev'
const DEFAULT_META_DESCRIPTION =
	'Software engineer de productos digitales, con experiencia en React, React Native, Vuejs, Next.js, TypeScript, Tailwind CSS, GraphQL.'
export const DEFAULT_KEYWORDS =
	'efrencodes, desarrollo web, freelancer, diseño web, agencia digital, desarrollo a la medida, diseño de producto, software, jardin digital, javier diaz, coderdiaz.com, desarrollo de software a medida, estudio de diseño, estudio de software, software studio, design studio'

const DEFAULT_META_HEADLINE = {
	title: `${DEFAULT_AUTHOR} - ${DEFAULT_META_DESCRIPTION}`,
	description: DEFAULT_META_DESCRIPTION,
	url: new URL(DEFAULT_PAGE_WEB),
}

export const META_SEO = {
	title: DEFAULT_META_HEADLINE.title,
	description: DEFAULT_META_HEADLINE.description,
	canonical: DEFAULT_META_HEADLINE.url,
	twitter: {
		creator: '@efrencodes',
		card: 'summary_large_image',
		title: DEFAULT_META_HEADLINE.title,
		description: DEFAULT_META_HEADLINE.description,
		image: '/seo/efren-martinez.webp',
		imageAlt: DEFAULT_META_HEADLINE.title,
	},
	openGraph: {
		title: DEFAULT_META_HEADLINE.title,
		image: '/seo/efren-martinez.webp',
		url: DEFAULT_META_HEADLINE.url,
		type: 'summary_large_image',
		description: DEFAULT_META_HEADLINE.description,
		siteName: DEFAULT_META_HEADLINE.title,
		locale: 'es_MX',
	},
}

export const DEFAULT_THEME_COLOR = '#d4d4d8'
export const DEFAULT_PAGE_BLOG = `${DEFAULT_PAGE_WEB}/escritos/`
