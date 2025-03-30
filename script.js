document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar un panel emergente con contenido dinámico
    function mostrarPanel(titulo, contenido) {
        let panel = document.createElement("div");
        panel.classList.add("panel");
        panel.innerHTML = `
            <span class="close">&times;</span>
            <h2>${titulo}</h2>
            <p>${contenido}</p>
        `;
        document.body.appendChild(panel);

        // Función para cerrar el panel
        panel.querySelector(".close").addEventListener("click", function () {
            panel.remove();
        });
    }

    // Agregar eventos a los elementos del menú
    document.querySelectorAll(".menu-item").forEach((item, index) => {
        item.addEventListener("click", function () {
            let opciones = [
                { titulo: "Cuenta", contenido: "Aquí puedes administrar tu cuenta." },
                { titulo: "Ajustar Campos", contenido: "Modifica las configuraciones de los campos." },
                { titulo: "Notificaciones", contenido: "Configura tus notificaciones aquí." },
                { titulo: "Ayuda", contenido: "Encuentra respuestas a tus dudas." },
                { titulo: "Términos y Condiciones", contenido: "Lee nuestros términos y condiciones." },
                { titulo: "Cambiar Cuenta", contenido: "Cambia a otra cuenta de usuario." },
                { titulo: "Cerrar Sesión", contenido: "Cerrarás sesión en tu cuenta." }
            ];

            let opcionSeleccionada = opciones[index];
            mostrarPanel(opcionSeleccionada.titulo, opcionSeleccionada.contenido);
        });
    });

    // Botón de regreso
    let backButton = document.querySelector(".back-button");
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back(); // Regresa a la página anterior
        });
    }
});
function confirmarCierreSesion() {
    const confirmacion = confirm("¿Estás seguro de que quieres cerrar sesión?");
    if (confirmacion) {
        // Redirige a la página de inicio de sesión o realiza la acción necesaria
        window.location.href = "login.html"; // Cambia esto por la página correcta
    }
}
console.log(document.querySelector('.top-bar'));


