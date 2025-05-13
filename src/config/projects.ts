export interface ListsProjectProps {
	year: number
	title: string
	description: string
	href: string
	stack: string[]
	images: string[]
}

export const ListsProject: ListsProjectProps[] = [
	{
		year: 2024,
		title: 'Nuevo flujo de creación de cuenta - OCC mundial ↗',
		href: 'https://www.occ.com.mx/candidatos/cuenta-nueva/registro/',
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
			'/proyectos/cvmatic/page-crea-tu-cv.png',
			'/proyectos/cvmatic/page-cv-listo.png',
			'/proyectos/cvmatic/page-sube-tu-cv-initial.png',
			'/proyectos/cvmatic/page-sube-tu-cv.png',
		],
	},
	{
		year: 2024,
		title: 'Calculadora de ISR - OCC Mundial ↗',
		href: 'https://www.occ.com.mx/salarios/calculadora-de-isr/',
		description:
			'Se desarrolló una herramienta para obtener el calculo de tus retenciones de impuestos con tu ingreso real.  Se beneficiará a los nuevos usuarios y a aquellos que ya son candidatos en OCC',
		stack: [
			'React + Next14 con los features de React Server Components y Client Server Components.',
			'Tailwindcss',
			'Apollo Server y GraphQL',
		],
		images: [
			'/proyectos/calculadora-de-isr/page-calculator-grafic.png',
			'/proyectos/calculadora-de-isr/page-sueldo-neto.png',
		]
	},
]
