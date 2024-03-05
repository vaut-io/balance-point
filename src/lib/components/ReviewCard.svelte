<script lang="ts">
	import { QuotesIcon } from "$lib/icons";
	import { type Review } from '$lib/data';
	export let review: Review;
</script>

<div class="review-card">
	<QuotesIcon />
	<article class="flow-tight">
		<h3>{review.heading}</h3>
		<p>{review.body}</p>
	</article>
</div>

<style>
	.review-card {
		padding: var(--m-e);
	}

	.review-card :global(svg) {
		width: var(--l-xl);
		height: var(--l-xl);
		color: var(--color-primary);
	}
</style>
