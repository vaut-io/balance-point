<header id="header">
	<div class="gutter">
		<nav>
			<p>Balance Point</p>
			<ul role="list">
				<li><a href="#compromiso">Compromiso</a></li>
				<li><a href="#servicios">Servicios</a></li>
				<li><a href="#resenas">Reseñas</a></li>
				<li><a href="#precios">Precios</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding-block: 1rem;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		column-gap: 1.5rem;
		row-gap: 0.5rem;
		/* justify-content: center; */
	}

	li {
		font-size: var(--t-1);
	}

	a {
		color: var(--color-dark);
	}
	a:is(:hover, :active) {
		/* color: var(--color-secondary); */
		text-decoration: underline;
	}
</style>
