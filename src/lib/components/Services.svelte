<script lang="ts">
	import 'iconify-icon';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';

	import AcupuncturaImage from '$lib/images/acupunctura.jpg?w=400&h=300&format=avif';
	import FloresBachImage from '$lib/images/flores-bach.jpg?w=400&h=300&format=avif';
	import NaturopatiaImage from '$lib/images/naturopatia.jpg?w=400&h=300&format=avif';
	import ReflexologiaImage from '$lib/images/reflexologia.jpg?w=400&h=300&format=avif';
	import BiomagnetismoImage from '$lib/images/biomagnetismo.jpg?w=400&h=300&format=avif';

	const {
		elements: { root, content, item, trigger },
		helpers: { isSelected },
	} = createAccordion();

	const services: Service[] = [
		{
			heading: 'Acupunctura',
			image: AcupuncturaImage,
			body: 'Nuestro enfoque holístico y personalizado está diseñado para ayudarte a encontrar tu equilibrio interior y mejorar tu calidad de vida de manera integral.'
		},
		{
			heading: 'Flores Bach',
			image: FloresBachImage,
			body: 'Utiliza esencias florales para ayudar a equilibrar las emociones y promover el bienestar emocional y mental.'
		},
		{
			heading: 'Naturopatia',
			image: NaturopatiaImage,
			body: 'Nuestros naturopatas trabajan con la naturaleza para ayudar a restablecer el equilibrio interno del cuerpo, utilizando una combinación de terapias con, los suplementos herbales, cambios alimenticios.'
		},
		{
			heading: 'Reflexología Podal',
			image: ReflexologiaImage,
			body: ' Esta terapia se basa en la idea de que ciertos puntos en los pies están conectados con diferentes partes del cuerpo. Al estimular estos puntos, la reflexología podal puede ayudar a aliviar el estrés, mejorar la circulación y promover la relajación profunda. '
		},
		{
			heading: 'Biomagnetismo',
			image: BiomagnetismoImage,
			body: 'Esta terapia se basa en la idea de que ciertas enfermedades son causadas por desequilibrios en el pH del cuerpo, y al colocar imanes en puntos específicos, se pueden neutralizar microorganismos dañinos.'
		}
	];

	type Service = {
		heading: string;
		image: string;
		body: string;
	};
</script>

<div class="root" use:melt={$root}>
	{#each services as { heading, body, image }}
		<div use:melt={$item(heading)} class="item">
			<h3>
				<button use:melt={$trigger(heading)} class="trigger">
					{heading}
					{#if $isSelected(heading)}
						<iconify-icon icon="tdesign:arrow-up"></iconify-icon>
					{:else}
						<iconify-icon icon="tdesign:arrow-down"></iconify-icon>
					{/if}
				</button>
			</h3>
			{#if $isSelected(heading)}
				<div class="content" use:melt={$content(heading)} transition:slide>
					<p>{body}</p>
					<img src={image} alt="" />
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.root {
		inline-size: 100%;
	}
	.trigger {
		inline-size: 100%;
		text-align: start;
		padding: var(--spacing-s-m) var(--spacing-3xs-2xs) var(--spacing-2xs-xs);
		border-block-end: 2px solid var(--color-neutral-light);
		background-color: var(--color-neutral-lightest);
		color: var(--color-neutral-darkest);
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
	}
	.content {
		padding: var(--spacing-xs-s) var(--spacing-3xs-2xs);
	}
</style>





<!--
<style>
	.services-grid {
		--minimum: 40ch;
		display: grid;
		grid-gap: var(--xs-s);
		grid-template-columns: repeat(auto-fit, minmax(min(var(--minimum), 100%), 1fr));
		grid-auto-rows: 1fr;
	}

	.service-card {
		position: relative;
		isolation: isolate;
		block-size: 100%;
		padding: var(--m-l) var(--m-l) var(--xl-2xl);
		border: 2px solid var(--color-mid);
		border-radius: 1rem;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.service-card::before {
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		z-index: -1;
		border-radius: 1rem;
		background-color: hsl(var(--color-light-hsl) / 0.5);
		backdrop-filter: blur(4px);
	}
	.has-sidebar {
		display: flex;
		flex-wrap: wrap;
		/* The default value is the first point on the modular scale */
		gap: var(--2xs-xs);
	}

	.side {
		/* The width when the sidebar _is_ a sidebar */
		flex-basis: 20ch;
		flex-grow: 1;
	}

	.main {
		/* Grow from nothing */
		flex-basis: 0;
		flex-grow: 999;
		/* Wrap when the elements are of equal width */
		min-inline-size: 50%;
	}

	.reverse {
		flex-direction: row-reverse;
	}
</style>
-->

<!-- <div class="has-sidebar" class:reverse>
	<div class="side">
		<Image
			aspect="3:2"
			highRes={`img/${service.image}.jpg`}
			lowRes={`img/${service.image}-lowres.jpg`}
			width={30}
			height={20}
		/>
	</div>
	<div>
		<h3>{service.heading}</h3>
		<p>{service.body}</p>
	</div>
</div> -->

<!-- <ul role="list" class="services-grid flow-m-l">
	{#each services as service}
		<li>
			<h3>{service.heading}</h3>
			<p>{service.body}</p>

			<div class="service-card" style="background-image: url('/img/{service.image}.jpg')">
				<div>
					<h3>{service.heading}</h3>
					<p>{service.body}</p>
				</div>
			</div>
		</li>
	{/each}
</ul> -->
<!-- <Accordion.Root>
	{#each services as service}
		<Accordion.Item>
			<Accordion.Header>
				<Accordion.Trigger />
				{service.heading}
			</Accordion.Header>
			<Accordion.Content>
				{service.body}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root> -->


