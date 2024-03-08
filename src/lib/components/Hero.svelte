<script lang="ts">
	import 'iconify-icon';
</script>

<section aria-label="balance point" id="hero" class="top-padding-large bottom-padding-medium">
	<div class="gutter flow-deep">
		<hgroup>
			<h1>
				Donde la salud encuentra su punto de <em>equilibrio</em>
			</h1>
			<p class="flow-l-xl">
				Nuestro enfoque holístico y personalizado te ayuda a encontrar tu equilibrio interior y
				mejorar tu calidad de vida de manera integral.
			</p>
		</hgroup>
		<p>
			<a href="#reserva-cita" style="font-size: var(--t1);"
				><strong>Reserva tu cita hoy &darr;</strong></a
			>
		</p>
		<p class="with-icon"><iconify-icon icon="mdi:location" height="1.5em" /> Meco, Madrid</p>
	</div>
</section>

<style>
	#hero {
		position: relative;
		isolation: isolate;
		/* margin-block-start: -8rem; */
		min-block-size: 100vh;
		min-block-size: 100svh;
		display: flex;
		align-items: center;
		/* block-size: 100%; */
		padding-block-start: calc(var(--3xl-4xl));
		padding-block-end: var(--2xl-3xl);
		/* border-block-end: 0.5rem solid var(--color-tertiary-tint); */
		background-color: var(--color-tertiary-darkest);
		background-image: url('/img/equilibrio.webp');
		background-position: center;
		background-repeat: no-repeat;
		/* background-attachment: fixed; */
		background-size: cover;
		color: var(--color-tertiary-light);
		text-align: center;
	}
	#hero::before{
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: hsl(var(--color-tertiary-darkest-hsl) / 0.7);
		background-image: radial-gradient(transparent 50%, var(--color-neutral-darkest));
		backdrop-filter: blur(8px);
	}
	a:hover {
		text-decoration: underline;
	}
	p {
		margin-inline: auto;
	}

	.with-icon {
		display: inline-flex;
		align-items: center;
	}
</style>
