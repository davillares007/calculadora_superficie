document.getElementById('calcularBtn').addEventListener('click', function() {
    // Solicitar el largo del rectángulo
    let largo = parseFloat(prompt('Ingresa el largo del rectángulo:'));

    // Solicitar el ancho del rectángulo
    let ancho = parseFloat(prompt('Ingresa el ancho del rectángulo:'));

    // Validar que los valores ingresados sean números válidos
    if (isNaN(largo) || isNaN(ancho)) {
        alert('Por favor, ingresa valores numéricos válidos.');
        return;
    }

    // Calcular el área
    let area = largo * ancho;

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `El área del rectángulo es: ${area}`;
});
