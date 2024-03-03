<script lang="ts">
	// A CSS padding value
	export let padding = 'var(--space-s-m)';
	// A CSS border-width value
	export let borderWidth = 'var(--border-thin)';
	// Whether to apply an inverted theme
	export let invert = false;
</script>

<div class:invert style="--padding: {padding}; --border-width: {borderWidth}">
	<slot />
</div>

<style>
	div {
		--border-width: 0.125rem;
		/* Padding set to the first point on the modular scale */
		padding: var(--s1);
		border: var(--border-width) solid;
		/* Always apply the transparent outline, for high contrast mode */
		outline: var(--border-width) transparent;
		outline-offset: calc(var(--border-width) * -1);
		color: var(--color-dark);
		background-color: var(--color-light);

	}
	div * {
		/* Force colors to inherit from the parent and honor inversion (below) */
		color: inherit;
	}
	.invert {
		/* Dark becomes light, and light becomes dark */
		color: var(--color-light);
		background-color: var(--color-dark);
	}
</style>
