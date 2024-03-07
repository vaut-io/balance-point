export const reviews: Review[] = [
	{
		heading: 'Aurora',
		body: 'Acudí a Balance Point por problemas de insomnio. Había probado varias cosas sin éxito.Con acupuntura conseguí volver a descansar, llevaba años sin conseguirlo. Desde entonces cuando me vuelve a ocurrir acudo a su consulta y vuelvo a sanar. Yolanda es amable, te escucha, te acompaña y comparte sus conocimientos. Gracias a ella avance espiritualmente, sané heridas pasadas, tiene capacidad para equilibrar tus emociones. Agradezco haberla encontrado. Una gran profesional.'
	},
	{
		heading: 'Alberto',
		body: 'Yolanda, magnífica profesional, implicada, sincera, muy cuidadora de las personas, si tienes cualquier tipo de dolencia, física, de rehabilitación y las en no pocas ocasiones, las que más quebraderos de cabeza te pueden traer, que son las internas, las que no se ven...!!! Ella, te ayudará a sanar 😉😉😉😉👍 invierte en cuidarte, ganarás salud y calidad de vida!!!'
	},
	{
		heading: 'Ángela',
		body: 'Fui diagnosticada de hipotiroidismo, y me propuse terapias alternativas.....empecé acupuntura con Yoli, y en unos meses equilibre esos valores que tenía alterados..... En alguna ocasión me he contracturado y también me ha sido útil... Un gran descubrimiento....graciasss ☺️'
	},


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
