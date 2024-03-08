<script lang="ts">
	import '../app.css';
	import { ContactForm, Footer, Header, Hero, Reviews, Services } from '$lib/components';
	import { reviews, services } from '$lib/data';
</script>

<svelte:head>
	<title>Balance Point</title>
	<meta
		name="description"
		content="Nuestro enfoque holístico y personalizado te ayuda a encontrar tu equilibrio interior y mejorar tu calidad de vida de manera integral."
	/>

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<!-- <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"> -->
</svelte:head>

<Header />

<main>
	<Hero />
	<section aria-label="servicios" id="servicios" class="theme-neutral top-padding-large bottom-padding-large">
		<div class="gutter flow-deep">
			<hgroup>
				<h2>Nuestros Servicios</h2>
				<hr>
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
			<hr>
			<div>
				<h3>Nuestro Filosofía</h3>
				<p>
					En Balance Point, creemos en el poder curativo inherente del cuerpo y en la importancia de abordar la salud de manera integral. Nos esforzamos por proporcionar un ambiente acogedor y de apoyo donde puedas sentirte cómodo y seguro mientras trabajamos juntos para alcanzar tus objetivos de salud y bienestar.
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

	<section aria-label="reseñas" id="resenas" class="theme-neutral top-padding-large bottom-padding-large">
		<div class="gutter flow flow-l-xl">
			<h2>Reseñas</h2>
			<hr>
			<Reviews {reviews} />
		</div>
	</section>

	<section aria-label="precios" id="precios" class="theme-secondary top-padding-large bottom-padding-large">
		<div class="gutter">
			<div class="flow">
				<h2>Precios</h2>
				<hr>
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
			<div class="flow flow-m-l">
				<h2>Reserva Cita</h2>
				<hr>
				<!-- <p>
					¡Da el primer paso hacia una mejor salud y bienestar hoy mismo! Contáctanos para aclarar
					tus dudas.
				</p> -->
				<ContactForm />
			</div>
		</div>
	</section>
</main>

<Footer />
