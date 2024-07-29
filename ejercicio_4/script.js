document.getElementById('agregar').addEventListener('click', function() {
    // Crear un nuevo elemento de lista
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = 'Nuevo ítem';

    // Crear un botón para eliminar el elemento de lista
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', function() {
        nuevoItem.remove();
    });

    // Añadir el botón al nuevo elemento de lista
    nuevoItem.appendChild(botonEliminar);

    // Añadir el nuevo elemento de lista a la lista desordenada
    document.getElementById('lista').appendChild(nuevoItem);
});
