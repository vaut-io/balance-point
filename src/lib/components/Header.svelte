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
		/* right: 0; */
		/* top: 0.5rem; */
		/* margin-inline: auto; */
		/* margin-bottom: -5%; */
		/* left: 50%; */
		/* transform: translate(-50%, 0); */
		/* right: -50%; */
		/* border-block-start: 0.5rem solid var(--color-tertiary-tint); */
		/* border-top-left-radius: 1rem; */
		/* top: 0; */
		z-index: 50;
		color: var(--color-tertiary-tint);
	}
	header::before {
		content: '';
		display: block;
		position: absolute;
		inset: 0;
		z-index: -1;
		background-color: hsl(var(--color-tertiary-shade-hsl) / 0.4);
		/* border-bottom-left-radius: 1rem; */
		backdrop-filter: blur(16px);
	}
	nav {
		display: flex;
		flex-wrap: wrap;
		/* justify-content: space-between; */
		justify-content: space-around;
		align-items: center;
		gap: 0.5rem 8rem;
		/* block-size: 3rem; */
		padding-block: 1rem;
	}

	@media screen and (max-width: 800px) {
		header {
			inline-size: 100%;
			border-radius: 0;
			top: 0rem;
		}
	}

	/* nav > * {
		margin-inline: auto;
	} */

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
	a:is(:hover, :active) {
		/* color: var(--color-secondary); */
		text-decoration: underline;
	}
</style>
