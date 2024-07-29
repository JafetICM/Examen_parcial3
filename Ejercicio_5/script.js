const objetos = [
    { nombre: 'Juan', edad: 17 },
    { nombre: 'Ana', edad: 22 },
    { nombre: 'Luis', edad: 15 },
    { nombre: 'María', edad: 18 },
    { nombre: 'Pedro', edad: 30 }
];

function ordenarPorPropiedad(arr, propiedad) {
    return arr.slice().sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1;
        } else if (a[propiedad] > b[propiedad]) {
            return 1;
        } else {
            return 0;
        }
    });
}

function ordenar() {
    const propiedad = document.getElementById('propiedad').value;
    const resultado = ordenarPorPropiedad(objetos, propiedad);
    document.getElementById('resultado').textContent = JSON.stringify(resultado, null, 2);
}
