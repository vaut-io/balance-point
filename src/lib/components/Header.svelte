<script lang="ts">
    import { Gutter } from "./primitives";
</script>
<header id="header">
    <Gutter>
        <nav>
            <p>Balance Point</p>
            <ul role="list">
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#filosofia">Filosofia</a></li>
                <li><a href="#resenas">Reseñas</a></li>
                <li><a href="#precios">Precios</a></li>
                <li><a href="#reserva-cita" class="button"><strong>Reserva tu cita</strong></a></li>
            </ul>
        </nav>
    </Gutter>
</header>

<style>
header {
    position: absolute;
    top: var(--space-3xs-2xs);
    inline-size: 100%;
}
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-xs-s);
    padding: var(--space-xs-s);
    border-radius: var(--space-xs-s);
    background-color: var(--color-light);
}
 ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--space-xs-s);
    row-gap: var(--space-3xs-2xs);
}
li {
    font-size: var(--step--1);
}

a {
    text-decoration: none;
    color: var(--color-dark);

}
a:is(:hover, :active) {
    color: var(--color-secondary);
}

.button {
    padding: var(--space-3xs-2xs);
    border-radius: var(--space-3xs-2xs);
    background-color: var(--color-secondary);
    color: var(--color-light);
}

.button:is(:hover, :active) {
    background-color: var(--color-dark);
}
</style>
