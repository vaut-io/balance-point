<script lang="ts">
	import '../app.css';
	import { ContactForm, Footer, Header, Hero, Image } from '$lib/components';
	import { Sidebar } from '$lib/components/primitives';
	import { Quotes } from '$lib/icons';
	import { reviews, services } from '$lib/data';
</script>

<svelte:head>
	<title>Balance Point</title>
	<meta
		name="description"
		content="Nuestro enfoque holístico y personalizado te ayuda a encontrar tu equilibrio interior y mejorar tu calidad de vida de manera integral."
	/>
</svelte:head>

<Header />

<main>
	<Hero />

	<section aria-label="nuestra filosofía" class="top-padding-large bottom-padding-medium">
		<div class="gutter">
			<div class="flow">
				<h2 id="compromiso">Nuestro Compromiso</h2>
				<p>
					En Balance Point, creemos en el poder curativo inherente del cuerpo y en la importancia de
					abordar la salud de manera integral.
				</p>
				<p>
					Nos esforzamos por proporcionar un ambiente acogedor y de apoyo donde puedas sentirte
					cómodo y seguro mientras trabajamos juntos para alcanzar tus objetivos de salud y
					bienestar.
				</p>
				<p>
					Nos comprometemos a brindarte una atención personalizada y de alta calidad en cada sesión.
					Nuestro equipo de terapeutas altamente capacitados está aquí para escucharte,
					proporcionarte orientación experta y ayudarte en tu viaje hacia una vida más equilibrada y
					saludable.
				</p>
			</div>
		</div>
	</section>

	<section aria-label="servicios" id="servicios" class="top-padding-medium bottom-padding-medium">
		<div class="gutter">
			<div class="flow">
				<hgroup class="flow">
					<h2>Nuestros Servicios</h2>
					<p>
						Ofrecemos una amplia gama de tratamientos naturales para abordar una variedad de
						necesidades de salud y bienestar:
					</p>
				</hgroup>

				<ul role="list" class="flow">
					{#each services as service}
						<li>
							<Sidebar sideWidth="20ch">
								<Image
									aspect="3:2"
									highRes={`/${service.image}.jpg`}
									lowRes={`/${service.image}-lowres.jpg`}
									width="30"
									height="20"
								/>
								<div class="flow-tight">
									<h3>{service.heading}</h3>
									<p>{service.body}</p>
								</div>
							</Sidebar>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	<section aria-label="reseñas" id="resenas" class="top-padding-medium bottom-padding-medium">
		<div class="gutter">
			<div class="flow">
				<h2>Reseñas</h2>
				<div class="reviews-grid">
					{#each reviews as review}
						<div class="review-card flow-tight">
							<Quotes />
							<article class="flow-tight">
								<h3>{review.heading}</h3>
								<p>{review.body}</p>
							</article>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>

	<section aria-label="precios" id="precios" class="top-padding-medium bottom-padding-medium">
		<div class="gutter">
			<div class="flow">
				<h2>Precios</h2>
				<p>...</p>
			</div>
		</div>
	</section>

	<section
		aria-label="reserva cita"
		id="reserva-cita"
		class="top-padding-medium bottom-padding-medium"
	>
		<div class="gutter">
			<div class="flow">
				<h2>Reserva Cita</h2>
				<!-- <p>Contáctanos</p> -->
				<p>
					¡Da el primer paso hacia una mejor salud y bienestar hoy mismo! Contáctanos para aclarar
					tus dudas.
				</p>
				<ContactForm />
			</div>
		</div>
	</section>
</main>
<Footer />

<style>
	.reviews-grid {
		--minimum: 40ch;
		display: grid;
		grid-gap: var(--xs-s);
		grid-template-columns: repeat(auto-fit, minmax(min(var(--minimum), 100%), 1fr));
	}

	.review-card {
		padding: var(--m-e);
		/* border: 2px solid var(--color-mid); */
	}

	.review-card :global(svg) {
		width: var(--l-xl);
		height: var(--l-xl);
		color: var(--color-primary);
	}
</style>
