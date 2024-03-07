<script lang="ts">
	import { QuotesIcon } from "$lib/icons";
	import { type Review } from '$lib/data';
	export let reviews: Review[];
</script>

<div class="reviews-grid">
	{#each reviews as review}
		<div class="review-card">
			<QuotesIcon />
			<article class="flow">
				<h3>{review.heading}</h3>
				<p>{review.body}</p>
			</article>
		</div>
	{/each}
</div>


<style>
	.reviews-grid {
		--minimum: 40ch;
		display: grid;
		grid-gap: var(--xl-2xl);
		grid-template-columns: repeat(auto-fit, minmax(min(var(--minimum), 100%), 1fr));
	}
	.review-card {
		padding: var(--m-l);
		background-color: var(--color-dark);
		color: var(--color-light);
	}
	.review-card :global(svg) {
		width: var(--l-xl);
		height: var(--l-xl);
		/* color: var(--color-primary); */
	}
</style>
