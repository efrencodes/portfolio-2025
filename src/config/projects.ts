export interface ListsProjectProps {
	year: number
	title: string
	description: string
	stack: string[]
	images: string[]
}

export const ListsProject:ListsProjectProps[] = [
	{
		year: 2024,
		title: 'Nuevo flujo de creación de cuenta at OCC mundial ↗',
		description:
			'Se mejoró el flujo para la creación de cuentas de nuevos candidatos con un enfoque especial en dispositivos móviles. Ahora, se evitará el abandono durante el flujo, asegurando que los CV sean completos y precisos.',
		stack: [
			'React + Next14 con los features de React Server Components y Client Server Components.',
			'Tailwindcss',
			'Apollo Server y GraphQL',
			'Pruebas unitarias con Jest',
			'Pruebas automatizadas con Cypress',
		],
		images: [
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
		],
	},
	{
		year: 2024,
		title: 'Calculadora de ISR',
		description:
			'Conoce tu ingreso real después de retenciones y enfoca tu búsqueda en empleos que cumplan tus metas.',
		stack: [
			'React + Next14 con los features de React Server Components y Client Server Components.',
			'Tailwindcss',
			'Apollo Server y GraphQL',
			'Pruebas unitarias con Jest',
			'Pruebas automatizadas con Cypress',
		],
		images: [
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
			'/placeholder.svg?height=150&width=80',
		],
	},
]
