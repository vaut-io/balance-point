<script lang="ts">
    import { Gutter, Stack } from '$lib/components/primitives'
</script>

<section aria-label="balance point" id="hero">
    <Gutter>
        <div class="hero-body">
            <Stack deep>
                <hgroup>
                    <h1>Donde la salud encuentra su punto de <span class="highlighted-word">equilibrio</span></h1>
                    <p>
                        Nuestro enfoque holístico y personalizado está diseñado para ayudarte a encontrar tu
                        equilibrio interior y mejorar tu calidad de vida de manera integral.
                    </p>
                </hgroup>
                <a href="#reserva-cita">Reserva tu cita</a>
            </Stack>
        </div>
    </Gutter>
</section>

<style>
    #hero {
        padding-block-start: var(--block-padding);
        padding-block-end: var(--block-padding);
        background-color: var(--color-dark);
        background-image: url('/equilibrio.jpg');
        background-position: center;
        background-attachment: fixed;
        min-block-size: 100vh;
        min-block-size: 100svh;
    }
    .highlighted-word {
        text-decoration: underline;
        color: var(--color-secondary);

    }

    .hero-body {
        max-inline-size: 60ch;
        padding: var(--space-l-xl);
        border-radius: var(--space-s-m);
        background-color: var(--color-dark);
        color: var(--color-light);
    }
</style>
