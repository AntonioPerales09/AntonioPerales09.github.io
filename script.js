// Función para cambiar el color de fondo
function cambiarFondo() {
    const colores = ["#007BFF", "#FF6600", "#33CC33", "#9900CC"];
    const body = document.body;
    const colorActual = body.style.backgroundColor;
    const nuevoColor = colores[Math.floor(Math.random() * colores.length)];

    if (nuevoColor !== colorActual) {
        body.style.backgroundColor = nuevoColor;
    } else {
        cambiarFondo(); // Evita que el color sea el mismo que el anterior
    }
}

// Asignar la función al evento click del botón
document.getElementById("cambiarColor").addEventListener("click", cambiarFondo);
