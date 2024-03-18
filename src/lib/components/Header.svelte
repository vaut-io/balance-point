<header id="header">
	<div class="gutter">
		<nav>
			<p>Balance Point</p>
			<ul role="list">
				<li><a href="#servicios">Servicios</a></li>
				<li><a href="#conocenos">Conócenos</a></li>
				<li><a href="#resenas">Reseñas</a></li>
				<li><a href="#precios">Precios</a></li>
			</ul>
		</nav>
	</div>
</header>

<style>
	header {
		position: absolute;
		left: 0;
		right: 0;
		z-index: 50;
		color: var(--color-tertiary-light);
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 0.5rem 2rem;
		padding-block-start: 1rem;
	}

	@media screen and (max-width: 800px) {
		header {
			inline-size: 100%;
			border-radius: 0;
			top: 0rem;
		}
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		column-gap: 1.5rem;
		row-gap: 0.5rem;
	}

	li {
		font-size: var(--font-size--1);
	}
	a:is(:hover, :active) {
		text-decoration: underline;
	}
</style>
