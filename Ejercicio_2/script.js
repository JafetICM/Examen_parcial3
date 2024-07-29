function transformarYFiltrar(numeros) {
    return numeros
        .map(numero => numero ** 2)
        .filter(cuadrado => cuadrado > 20);
}

function transformar() {
    const input = document.getElementById('numeros').value;
    const numeros = input.split(',').map(Number).filter(num => !isNaN(num));
    const resultado = transformarYFiltrar(numeros);
    document.getElementById('resultado').textContent = JSON.stringify(resultado, null, 2);
}
