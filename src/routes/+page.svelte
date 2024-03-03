<script lang="ts">
import '../app.css';
import { ContactForm } from '$lib/components'
import { Frame, Gutter, Sidebar } from '$lib/components/primitives'
import { services } from '$lib/data'
</script>

<svelte:head>
    <title>Balance Point</title>
</svelte:head>

<header id="header">
    <Gutter>
        <nav>
            <p>Logo</p>
            <ul role="list">
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#filosofia">Filosofia</a></li>
                <li><a href="#resenas">Reseñas</a></li>
                <li><a href="#precios">Precios</a></li>
                <li><a href="#reserva-cita"><strong>Reserva cita</strong></a></li>
            </ul>
        </nav>
    </Gutter>
</header>

<main>
    <section aria-label="balance point" id="hero">
        <Gutter>
            <div class="flow">
                <hgroup>
                    <h1>Donde la salud encuentra su punto de <span class="underline">equilibrio</span></h1>
                    <p>
                        Nuestro enfoque holístico y personalizado está diseñado para ayudarte a encontrar tu
                        equilibrio interior y mejorar tu calidad de vida de manera integral.
                    </p>
                </hgroup>
            </div>
        </Gutter>
    </section>

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

<footer id="footer">
    <Gutter>
        <div class="flow">
            <h3>Condiciones</h3>
            <p>
                (Este espacio no está diseñado para reservar cita ni para dar tramiento solo para resolver
                dudas)
            </p>
            <p>
                Las cancelaciones hay que hacerlas con una anterlación de 24h, avisando la la antelación
                debida no se duvuelve el dinero, sino que se cambia cita para oto dia. Se pueden hacer bonos
                de acupuntura de 5 y 10 sesiones los bonos pueden se pueden utilizar varias personas.
            </p>
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <p>p</p>
            <div style="padding: 1rem; background-color: var(--color-mid);"></div>
            <div style="padding: 1rem; background-color: var(--color-dark);"></div>
            <div style="padding: 1rem; background-color: var(--color-light)"></div>
            <div style="padding: 1rem; background-color: var(--color-primary)"></div>
            <div style="padding: 1rem; background-color: var(--color-primary-shade)"></div>
            <div style="padding: 1rem; background-color: var(--color-secondary)"></div>
        </div>
    </Gutter>
</footer>


<style>
    #header {
        padding-block: var(--space-2xs-xs);
        position: absolute;
        inline-size: 100%;
    }
    #header nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    #header ul {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2xs-xs);
    }
    #header li {
        font-size: var(--step--1);
    }
    #hero {
        padding-block-start: calc(var(--block-padding) * 2);
        padding-block-end: var(--block-padding);
        background-color: var(--color-primary);
        background-image: url('/equilibrio.jpg');
        background-position: center;
        background-attachment: fixed;
    }
    #hero h1 {
        max-inline-size: 25ch;
    }
    #hero p {
        max-inline-size: 50ch;
    }
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
    #footer {
        padding-block-start: var(--block-padding);
        padding-block-end: calc(var(--block-padding) / 2);
        background-color: var(--color-mid);
        color: var(--color-light);
    }
    .underline {
        text-decoration: underline;
    }
</style>
