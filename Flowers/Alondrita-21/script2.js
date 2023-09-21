// Obtener una referencia al botón
const botonRecargar = document.getElementById("botonRecargar");

// Agregar un evento de clic al botón
botonRecargar.addEventListener("click", () => {
    // Utilizar location.reload() para recargar la página
    location.reload();
});
