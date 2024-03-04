<script lang="ts">
import '../app.css';
import { ContactForm, Footer, Header, Hero } from '$lib/components'
import { Frame, Gutter, Sidebar } from '$lib/components/primitives'
import { services } from '$lib/data'
</script>

<svelte:head>
    <title>Balance Point</title>
</svelte:head>

<Header />
<main>
    <Hero />
    <section aria-label="servicios" id="servicios">
        <Gutter>
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
                                <Frame ratio="3:2">
                                    <img src={`/${service.image}`} alt="" width="30" height="20">
                                </Frame>
                                <div>
                                    <h3>{service.heading}</h3>
                                    <p>{service.body}</p>
                                </div>
                            </Sidebar>
                        </li>
                    {/each}
                </ul>
            </div>
        </Gutter>
    </section>

    <section aria-label="nuestra filosofía" id="filosofia">
        <Gutter>
            <div class="flow">
                <p>Compromiso / Conocenos / Mas sobre nosotros</p>
                <h2>Nuestra Filosofia</h2>
                <p>
                    En Balance Point, creemos en el poder curativo inherente del cuerpo y en la importancia de
                    abordar la salud de manera integral. Nos esforzamos por proporcionar un ambiente acogedor y
                    de apoyo donde puedas sentirte cómodo y seguro mientras trabajamos juntos para alcanzar tus
                    objetivos de salud y bienestar. Nuestro Compromiso Nos comprometemos a brindarte una
                    atención personalizada y de alta calidad en cada sesión. Nuestro equipo de terapeutas
                    altamente capacitados está aquí para escucharte, proporcionarte orientación experta y
                    ayudarte en tu viaje hacia una vida más equilibrada y saludable.
                </p>
            </div>
        </Gutter>
    </section>

    <section aria-label="reseñas" id="resenas">
        <Gutter>
            <div class="flow">
                <h2>Reseñas</h2>
                <article>
                    <h3>Reseña 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
                        consectetur cupidatat.
                    </p>
                </article>
            </div>
        </Gutter>
    </section>

    <section aria-label="precios" id="precios">
        <Gutter>
            <div class="flow">
                <h2>Precios</h2>
            </div>
        </Gutter>
    </section>

    <section aria-label="reserva cita" id="reserva-cita">
        <Gutter>
            <div class="flow">
                <h2>Reserva tu cita</h2>
                <p>Contáctanos</p>
                <p>
                    ¡Da el primer paso hacia una mejor salud y bienestar hoy mismo! Contáctanos para aclarar tus
                    dudas.
                </p>
                <ContactForm />
            </div>
        </Gutter>
    </section>
</main>
<Footer />

<style>
    #servicios {
        padding-block-start: var(--block-padding);
        padding-block-end: calc(var(--block-padding) / 2);
    }
    #filosofia {
        padding-block: calc(var(--block-padding) / 2);
    }
    #resenas {
        padding-block: calc(var(--block-padding) / 2);
    }
    #precios {
        padding-block: calc(var(--block-padding) / 2);
    }
    #reserva-cita {
        padding-block: calc(var(--block-padding) / 2);
    }
</style>
