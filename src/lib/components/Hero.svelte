<section aria-label="balance point" id="hero" class="top-padding-large bottom-padding-medium">
	<div class="gutter">
		<div class="hero-body flow">
			<hgroup>
				<h1>
					Donde la salud encuentra su punto de <em>equilibrio</em>
				</h1>
				<p style="margin-block-start: var(--l-xl);">
					Nuestro enfoque holístico y personalizado te ayuda a encontrar tu equilibrio interior y
					mejorar tu calidad de vida de manera integral.
				</p>
			</hgroup>
			<p>
				<a href="#reserva-cita" style="font-size: var(--t1);"
					><strong>Reserva tu cita hoy &darr;</strong></a
				>
			</p>
		</div>
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
		background-color: var(--color-tertiary-shade);
		background-image: url('img/equilibrio.jpg');
		background-position: center;
		background-repeat: no-repeat;
		/* background-attachment: fixed; */
		background-size: cover;
		color: var(--color-tertiary-tint);
		text-align: center;
	}
	#hero::before{
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: hsl(var(--color-tertiary-shade-hsl) / 0.7);
		backdrop-filter: blur(12px);
	}
	hgroup {
		/* max-inline-size: 100ch; */
	}
	a:hover {
		text-decoration: underline;
	}
	p {
		margin-inline: auto;
	}
</style>
