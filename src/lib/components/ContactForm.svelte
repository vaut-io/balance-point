<form action="" class="flow flow-s-m">
	<div class="inputs-switcher">
		<div class="flow flow-3xs-2xs">
			<label for="nombre">Nombre</label>
			<input  id="nombre" type="text" placeholder="Nombre" required />
		</div>
		<div class="flow flow-3xs-2xs">
			<label for="correo">Teléfono</label>
			<input  id="correo" type="email" placeholder="Correo" required />
		</div>
		<div class="flow flow-3xs-2xs">
			<label for="asunto">Asunto</label>
			<input  id="asunto" type="text" placeholder="Asunto" required />
		</div>
	</div>
	<label for="mensaje">Mensaje</label>
	<textarea class="flow-3xs-2xs" id="mensaje" placeholder="Mensaje" required></textarea>
	<button type="submit" class="button flow-l-xl"><strong>Someter</strong></button>
</form>

<style>
	form {
		/* max-inline-size: var(--measure); */
		flex-wrap: wrap;
	}
	label {
		display: block;
	}
	input,
	textarea {
		inline-size: 100%;
		padding: 0.75rem 0.5rem;
	}

	.inputs-switcher {
		display: flex;
		flex-wrap: wrap;
		gap: var(--s-m);
	}
	.inputs-switcher > div {
		flex-grow: 1;
		flex-basis: calc((var(--measure) - 100%) * 999);
	}

	.button {
		inline-size: 100%;
		position: relative;
		isolation: isolate;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		color: var(--color-neutral-lightest);
		background-image: linear-gradient(to bottom right, var(--color-primary), var(--color-secondary));
	}
	.button::before {
		position: absolute;
		content: '';
		inset: 0;
		z-index: -1;
		border-radius: 0.5rem;
		background-image: linear-gradient(to bottom right, var(--color-neutral), var(--color-neutral-darkest));
		transition: opacity var(--transition-base);
		opacity: 0;
	}
	.button:is(:hover, :active) {
		color: var(--color-neutral-lightest);
	}
	.button:hover::before {
	  opacity: 1;
	}
</style>
