<script lang="ts">
	import 'iconify-icon';

	const reviews: Review[] = [
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

	type Review = {
		heading: string;
		body: string;
	};
</script>

<div class="reviews-switcher">
	{#each reviews as review}
		<div class="review-card">
			<iconify-icon icon="raphael:quote" class="quote" />
			<article class="flow">
				<h3>{review.heading}</h3>
				<p>{review.body}</p>
				<div class="stars flow-2xs-xs">
					<iconify-icon icon="material-symbols:star" />
					<iconify-icon icon="material-symbols:star" />
					<iconify-icon icon="material-symbols:star" />
					<iconify-icon icon="material-symbols:star" />
					<iconify-icon icon="material-symbols:star" />
				</div>
			</article>
		</div>
	{/each}
</div>

<style>
	.reviews-switcher {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-m-l);
	}
	.reviews-switcher > * {
		flex-grow: 1;
		flex-basis: calc((var(--width-measure) - 100%) * 999);
	}
	.review-card {
		position: relative;
		isolation: isolate;
		font-style: italic;
	}
	.quote {
		position: absolute;
		top: calc(var(--spacing-m-l) * -1.5);
		left: calc(var(--spacing-m-l) * -1.5);
		z-index: -1;
		opacity: 0.5;
		font-size: var(--spacing-3xl-4xl);
		color: var(--color-neutral-light);
	}
	.stars {
		font-size: var(--spacing-s-m);
		color: var(--color-primary-light);
	}
</style>
