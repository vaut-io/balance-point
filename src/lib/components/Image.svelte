<script lang="ts">
	export let highRes = '';
	export let lowRes = '';
	export let alt = '';
	export let aspect = '1:1';
	export let width = '';
	export let height = '';
	const splitRatio = aspect.split(':');
</script>

<svelte:head>
	<link rel="preload" as="image" href={lowRes} fetchpriority="high" />
</svelte:head>

<div class="frame" style="--n: {splitRatio[0]}; --d: {splitRatio[1]}">
	<img src={highRes} style="background-image: url({lowRes})" {alt} {width} {height} />
</div>

<style>
	.frame {
		/* Numerator and denominator */
		aspect-ratio: var(--n) / var(--d);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
	}
</style>
