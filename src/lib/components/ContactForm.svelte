<script lang="ts">
    import { Stack } from './primitives'
</script>
<form action="" class="flow" >
    <Stack space="3xs-2xs">
        <label for="nombre">Nombre</label>
        <input id="nombre" type="text" placeholder="Nombre" />
    </Stack>
    <Stack space="3xs-2xs">
        <label for="telefono">Teléfono</label>
        <input id="telefono" type="text" placeholder="Telefono" />
    </Stack>
    <Stack space="3xs-2xs">
        <label for="asunto">Asunto</label>
        <input id="asunto" type="text" placeholder="Asunto" />
    </Stack>
    <Stack space="3xs-2xs">
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" placeholder="Mensaje"></textarea>
    </Stack>
    <button type="submit">¡Reserva tu cita!</button>
</form>

<style>
    form {
        max-inline-size: 50ch;
    }

    label {
        display: block;
    }
</style>
