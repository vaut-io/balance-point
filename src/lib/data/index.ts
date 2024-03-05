export const reviews: Review[] = [
	{
		heading: 'Reseña 1',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		heading: 'Reseña 2',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		heading: 'Reseña 3',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	},
	{
		heading: 'Reseña 4',
		body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
	}
];

export const services: Service[] = [
	{
		heading: 'Acupunctura',
		image: 'acupunctura',
		body: 'Nuestro enfoque holístico y personalizado está diseñado para ayudarte a encontrar tu equilibrio interior y mejorar tu calidad de vida de manera integral.'
	},
	{
		heading: 'Flores Bach',
		image: 'flores-bach',
		body: 'Utiliza esencias florales para ayudar a equilibrar las emociones y promover el bienestar emocional y mental.'
	},
	{
		heading: 'Naturopatia',
		image: 'naturopatia',
		body: 'Nuestros naturopatas trabajan con la naturaleza para ayudar a restablecer el equilibrio interno del cuerpo, utilizando una combinación de terapias con, los suplementos herbales, cambios alimenticios.'
	},
	{
		heading: 'Reflexología Podal',
		image: 'reflexologia',
		body: ' Esta terapia se basa en la idea de que ciertos puntos en los pies están conectados con diferentes partes del cuerpo. Al estimular estos puntos, la reflexología podal puede ayudar a aliviar el estrés, mejorar la circulación y promover la relajación profunda. '
	},
	{
		heading: 'Biomagnetismo',
		image: 'biomagnetismo',
		body: '...'
	}
];

export type Review = {
	heading: string;
	body: string;
};

export type Service = {
	heading: string;
	image: string;
	body: string;
};
