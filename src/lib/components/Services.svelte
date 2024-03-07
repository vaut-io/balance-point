<script lang="ts">
	// import { Image } from "$lib/components";
	import { type Service } from '$lib/data';
	export let services: Service[];
	// export let reverse = false;
</script>

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

<ul role="list" class="flow-m-l">
	{#each services as service}
		<li>
			<h3>{service.heading}</h3>
			<p>{service.body}</p>
		</li>
	{/each}
</ul>

<!-- <div class="service-card" style="background-image: url('/img/{service.image}.jpg')">
	<div>
		<h3>{service.heading}</h3>
		<p>{service.body}</p>
	</div>
</div> -->

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
	.service-card::before{
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

