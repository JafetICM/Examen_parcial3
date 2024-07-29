async function obtenerUsuarios() {
    const url = 'https://jsonplaceholder.typicode.com/users'; // URL de ejemplo para simular la llamada a una API

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        document.getElementById('resultado').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error al obtener los usuarios:', error);
        document.getElementById('resultado').textContent = `Error: ${error.message}`;
    }
}
