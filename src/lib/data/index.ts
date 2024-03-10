export const reviews: Review[] = [
	{
		heading: 'Aurora',
		body: 'Yolanda es amable, te escucha, te acompaña y comparte sus conocimientos. Gracias a ella avancé espiritualmente y sané heridas pasadas. ¡Agradezco haberla encontrado, una gran profesional!'
	},
	{
		heading: 'Ángela',
		body: 'Empecé acupuntura con Yoli, y en unos meses equilibre los valores de hipotiriodismo que tenía alterados. En alguna ocasión me he contracturado y también me ha sido útil. ¡Un gran descubrimiento, gracias!'
	},
	{
		heading: 'Alberto',
		body: 'Magnífica profesional - implicada, sincera, muy cuidadora de las personas. Ella te ayudará a sanar. ¡Invierte en cuidarte, ganarás salud y calidad de vida!'
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
		body: 'Esta terapia se basa en la idea de que ciertas enfermedades son causadas por desequilibrios en el pH del cuerpo, y al colocar imanes en puntos específicos, se pueden neutralizar microorganismos dañinos.'
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
