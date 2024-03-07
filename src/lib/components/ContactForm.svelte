<form action="">
	<div class="flow flow-s-m">
		<label for="nombre">Nombre</label>
		<input class="flow-3xs-2xs" id="nombre" type="text" placeholder="Nombre" />
		<label for="telefono">Teléfono</label>
		<input class="flow-3xs-2xs" id="telefono" type="text" placeholder="Teléfono" />
		<label for="asunto">Asunto</label>
		<input class="flow-3xs-2xs" id="asunto" type="text" placeholder="Asunto" />
		<label for="mensaje">Mensaje</label>
		<textarea class="flow-3xs-2xs" id="mensaje" placeholder="Mensaje"></textarea>
		<button type="submit" class="button"><strong>Someter</strong></button>
	</div>
</form>

<style>
	form {
		max-inline-size: var(--measure);
	}

	label {
		display: block;
	}

	input,
	textarea {
		padding: 0.75rem 0.5rem;
	}
</style>
