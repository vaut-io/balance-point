<form action="" class="flow">
	<div class="flow-tight">
		<label for="nombre">Nombre</label>
		<input id="nombre" type="text" placeholder="Nombre" />
	</div>
	<div class="flow-tight">
		<label for="telefono">Teléfono</label>
		<input id="telefono" type="text" placeholder="Teléfono" />
	</div>
	<div class="flow-tight">
		<label for="asunto">Asunto</label>
		<input id="asunto" type="text" placeholder="Asunto" />
	</div>
	<div class="flow-tight">
		<label for="mensaje">Mensaje</label>
		<textarea id="mensaje" placeholder="Mensaje"></textarea>
	</div>
	<button type="submit" class="button"><strong>Someter</strong></button>
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
