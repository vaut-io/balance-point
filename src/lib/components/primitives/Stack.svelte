<script lang="ts">
	// In some cases, browsers should interpret the Stack as a list for screen reader software
	export let list = false;
	// Whether the spaces apply recursively (i.e. regardless of nesting level)
	export let deep = false;
	// A CSS margin value
	export let space = 's-m';
</script>

<svelte:element
	this={list ? 'ul' : 'div'}
	role={list ? 'list' : undefined}
	class:shallow={!deep}
	class:deep
	style="--space: var(--{space});"
>
	<slot />
</svelte:element>

<style>
	.shallow,
	.deep {
		/* The flex context */
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	.shallow > :global(*) {
		/* Any extant vertical margins are removed */
		margin-block: 0;
	}
	.shallow > :global(*) + :global(*) {
		/* Top margin is only applied to successive elements */
		margin-block-start: var(--space);
	}
	.deep :global(*) {
		margin-block: 0;
	}
	.deep :global(*) + :global(*) {
		margin-block-start: var(--space);
	}
</style>
