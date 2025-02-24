document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", (event) => {
        let errores = [];

        if (nombre.value.trim() === "") {
            errores.push("El nombre es obligatorio.");
        }
        if (apellido.value.trim() === "") {
            errores.push("El apellido es obligatorio.");
        }
        if (correo.value.trim() === "" || !validarCorreo(correo.value)) {
            errores.push("Ingrese un correo válido.");
        }
        if (mensaje.value.trim() === "") {
            errores.push("El mensaje no puede estar vacío.");
        }

        if (errores.length > 0) {
            event.preventDefault(); // Evita el envío del formulario
            mostrarErrores(errores);
        }
    });

    function validarCorreo(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function mostrarErrores(errores) {
        let errorDiv = document.getElementById("errores");
        if (!errorDiv) {
            errorDiv = document.createElement("div");
            errorDiv.id = "errores";
            errorDiv.style.color = "red";
            errorDiv.style.marginTop = "10px";
            form.prepend(errorDiv);
        }
        errorDiv.innerHTML = errores.join("<br>");
    }
});
