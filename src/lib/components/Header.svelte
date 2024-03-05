<header id="header">
    <div class="gutter">
        <nav>
            <p>Balance Point</p>
            <ul role="list">
                <li><a class="page-link" href="#servicios">Servicios</a></li>
                <li><a class="page-link" href="#filosofia">Filosofia</a></li>
                <li><a class="page-link" href="#resenas">Reseñas</a></li>
                <li><a class="page-link" href="#precios">Precios</a></li>
                <li><a href="#reserva-cita" class="button"><strong>Reserva tu cita</strong></a></li>
            </ul>
        </nav>
    </div>
</header>

<style>
header {
    /* position: absolute; */
    /* top: var(--3xs-2xs); */
    inline-size: 100%;
}
nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: var(--xs-s);
    padding-block: 1rem;
    /* border-radius: var(--xs-s); */
    /* background-color: var(--color-light); */
}
 ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 0.75rem;
    justify-content: center;
    /* column-gap: var(--xs-s);
    row-gap: var(--3xs-2xs); */
}
li {
    font-size: var(--t-1);
}

a {
    text-decoration: none;
    color: var(--color-dark);

}
.page-link:is(:hover, :active) {
    /* color: var(--color-secondary); */
    text-decoration: underline;
}

.button {
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    background-color: var(--color-secondary);
    color: var(--color-light);
}

.button:is(:hover, :active) {
    background-color: var(--color-mid);
    color: var(--color-light);
}
</style>
