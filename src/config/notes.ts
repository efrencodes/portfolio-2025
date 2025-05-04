export interface ListsNoteProps {
	year: number
	title: string
	description: string
	url?: string
}

export const ListsNote: ListsNoteProps[] = [
	{
		year: 2024,
		title: 'Cómo crear y usar los alias en Git ↗',
		description:
			'Cómo configurar atajos personalizados para simplificar comandos más utilizados o complejos',
		url: '/escritos/como-crear-y-usar-alias-en-git'
	},
	{
		year: 2023,
		title: 'Cómo usar los slots en Astro ↗',
		description:
			'Aprende a utilizar estos espacios reservados en tus componentes y potencia tu desarrollo web con Astro.',
		url: '/escritos/dominando-el-arte-de-los-slots'
	},
	{
		year: 2022,
		title: 'Cómo convertir un número a formato de moneda en JavaScript ↗',
		description:
			'El método Intl.NumberFormat() nos permite formatear a un valor más legible.',
		url: '/escritos/como-convertir-un-numero-a-formato-de-moneda-en-javascript'
	},
]
