<script lang="ts">
	import '../app.css';
	import { ContactForm, Footer, Header, Hero, Reviews, Services } from '$lib/components';
	import { reviews, services } from '$lib/data';
	import 'iconify-icon';
</script>

<svelte:head>
	<title>Balance Point</title>
	<meta
		name="description"
		content="Nuestro enfoque holístico y personalizado te ayuda a encontrar tu equilibrio interior y mejorar tu calidad de vida de manera integral."
	/>
</svelte:head>

<div class="banner">
	<p class="gutter flow-m-l">
		<a href="https://api.whatsapp.com" target="_blank">
			<span>Haz clic aquí para contactar con nosotros en WhatsApp</span>
			<iconify-icon icon="mdi:whatsapp" height="1.5em" class="whatsapp-icon"></iconify-icon>
		</a>
	</p>
</div>

<Header />

<main>
	<Hero />
	<section
		aria-label="servicios"
		id="servicios"
		class="theme-neutral top-padding-large bottom-padding-large"
	>
		<div class="gutter flow-deep">
			<hgroup>
				<h2>Nuestros Servicios</h2>
				<p>
					Ofrecemos una amplia gama de tratamientos naturales para abordar una variedad de
					necesidades de salud y bienestar:
				</p>
			</hgroup>
			<Services {services} />
		</div>
	</section>

	<section aria-label="conocenos" class="theme-primary top-padding-large bottom-padding-large">
		<div class="gutter flow-deep flow-l-xl">
			<h2 id="conocenos">Conócenos</h2>
			<hr />
			<div>
				<h3>Nuestro Filosofía</h3>
				<p>
					En Balance Point, creemos en el poder curativo inherente del cuerpo y en la importancia de
					abordar la salud de manera integral. Nos esforzamos por proporcionar un ambiente acogedor
					y de apoyo donde puedas sentirte cómodo y seguro mientras trabajamos juntos para alcanzar
					tus objetivos de salud y bienestar.
				</p>
				<h3>Nuestro Compromiso</h3>
				<p>
					Nos comprometemos a brindarte una atención personalizada y de alta calidad en cada sesión.
					Nuestro equipo de terapeutas altamente capacitados está aquí para escucharte,
					proporcionarte orientación experta y ayudarte en tu viaje hacia una vida más equilibrada y
					saludable.
				</p>
			</div>
		</div>
	</section>

	<section
		aria-label="reseñas"
		id="resenas"
		class="theme-neutral top-padding-large bottom-padding-large"
	>
		<div class="gutter flow flow-xl-2xl">
			<h2>¡Clientes Satisfechos!</h2>
			<!-- <hr /> -->
			<Reviews {reviews} />
		</div>
	</section>

	<section
		aria-label="precios"
		id="precios"
		class="theme-secondary top-padding-large bottom-padding-large"
	>
		<div class="gutter">
			<div class="flow">
				<h2>Precios</h2>
				<hr />
				<p>...</p>
			</div>
		</div>
	</section>

	<section
		aria-label="reserva cita"
		id="reserva-cita"
		class="top-padding-large bottom-padding-large"
	>
		<div class="gutter">
			<div class="flow flow-xl-2xl">
				<h2>Reserva Cita</h2>

				<!-- ¡Da el primer paso hacia una mejor salud y bienestar hoy mismo! Contáctanos para aclarar tus dudas. -->
				<p class="whatsapp-contact flow-m-l">
					<a href="https://api.whatsapp.com" target="_blank">
						<span>Haz clic aquí para contactar con nosotros en WhatsApp</span>
						<iconify-icon icon="mdi:whatsapp" height="1.5em" class="whatsapp-icon"></iconify-icon>
					</a>
				</p>

				<!-- <p>- o rellena este formulario: -</p> -->


				<div>
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	.whatsapp-icon {
		flex-shrink: 0;
	}

	#reserva-cita h2 {
		text-align: center;
	}

	.whatsapp-contact {
		margin-inline: auto;
		text-align: center;
		font-size: var(--t1);
		color: var(--color-primary-dark);
		font-weight: var(--weight-bold);
	}

	.whatsapp-contact a {
		padding-block: 0.5rem;
		border-block: 2px solid var(--color-primary);
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	a:hover {
		text-decoration: underline;
		/* color: var(--color-primary) */
	}


	.banner {
		position: fixed;
		inline-size: 100%;
		padding-block: 0.5rem;
		background-color: var(--color-secondary-dark);
		color: var(--color-secondary-lightest);
		/* border-block-start: 2px solid var(--color-secondary); */
		bottom: 0;
		z-index: 30;
		line-height: var(--leading-tight);
	}

	.banner > p {
		text-align: end;
		margin-inline: auto;
		font-size: var(--t-1);
		font-weight: var(--weight-bold);
	}

	.banner a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
