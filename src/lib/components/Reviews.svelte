<script lang="ts">
	import { type Review } from '$lib/data';
	export let reviews: Review[];
</script>

<div class="reviews-switcher">
	{#each reviews as review}
		<div class="review-card">
			<iconify-icon class="quote" icon="raphael:quote" height="var(--3xl-4xl)" style="color: var(--color-neutral-light)" />
			<article class="flow">
				<h3>{review.heading}</h3>
				<p>{review.body}</p>
				<div class="flow-2xs-xs" style="color: var(--color-primary-light)">
					<iconify-icon icon="material-symbols:star" height="var(--m-l)" />
					<iconify-icon icon="material-symbols:star" height="var(--m-l)" />
					<iconify-icon icon="material-symbols:star" height="var(--m-l)" />
					<iconify-icon icon="material-symbols:star" height="var(--m-l)" />
					<iconify-icon icon="material-symbols:star" height="var(--m-l)" />
				</div>
			</article>

		</div>
	{/each}
</div>


<style>
	.reviews-switcher {
		display: flex;
		flex-wrap: wrap;
		gap: var(--m-l);
		/* --minimum: 30ch; */
		/* display: grid; */
		/* grid-gap: var(--m-l); */
		/* grid-template-columns: repeat(auto-fit, minmax(min(var(--minimum), 100%), 1fr)); */
	}

	.reviews-switcher > * {
		flex-grow: 1;
		flex-basis: calc((var(--measure) - 100%) * 999);
	}
	.review-card {
		/* padding: var(--m-l); */
		position: relative;
		isolation: isolate;
		font-style: italic;
		/* background-color: var(--color-neutral-light); */
		/* color: var(--color-neutral-light); */
	}
	.quote {
		position: absolute;
		top: calc(var(--m-l) * -1.5);
		left: calc(var(--m-l) * -1.5);
		z-index: -1;
		opacity: 0.5;
	}
</style>
