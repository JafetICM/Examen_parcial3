const personas = [
    { nombre: 'Juan', edad: 17 },
    { nombre: 'Ana', edad: 22 },
    { nombre: 'Luis', edad: 15 },
    { nombre: 'María', edad: 18 },
    { nombre: 'Pedro', edad: 30 }
];

function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18);
}

function filtrar() {
    const mayoresDeEdad = filtrarMayoresDeEdad(personas);
    document.getElementById('resultado').textContent = JSON.stringify(mayoresDeEdad, null, 2);
}
