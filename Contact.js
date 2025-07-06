
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const mensaje = document.getElementById("mensaje");

  const camposObligatorios = [nombre, email];
  
  // Cargar valores anteriores (localStorage)
  [nombre, email, telefono, mensaje].forEach(input => {
    const guardado = localStorage.getItem(input.id);
    if (guardado) input.value = guardado;
  });

  // Guardar cambios en localStorage
  [nombre, email, telefono, mensaje].forEach(input => {
    input.addEventListener("input", () => {
      localStorage.setItem(input.id, input.value);
    });
  });

  // Mostrar mensaje de error
  function mostrarError(input, mensaje) {
    input.style.borderBottom = "2px solid red";
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error")) {
      const error = document.createElement("span");
      error.classList.add("error");
      error.style.color = "red";
      error.style.fontSize = "0.85rem";
      error.style.marginTop = "-15px";
      error.textContent = mensaje;
      input.parentElement.insertBefore(error, input.nextSibling);
    }
  }

  // Eliminar mensajes de error
  function limpiarErrores() {
    document.querySelectorAll(".error").forEach(e => e.remove());
    [nombre, email].forEach(i => i.style.borderBottom = "2px solid #E98010");
  }

  // Validación
  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    limpiarErrores();

    let valido = true;

    if (nombre.value.trim() === "") {
      mostrarError(nombre, "El nombre es obligatorio.");
      valido = false;
    }

    if (!validarEmail(email.value.trim())) {
      mostrarError(email, "Ingrese un email válido.");
      valido = false;
    }

    if (!valido) {
      form.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Simular envío exitoso
    form.innerHTML = `
      <div class="mensaje-exito" style="color: green; font-size: 1.2rem; padding: 20px; background: #f0fff0; border-radius: 8px;">
        ¡Gracias por contactarnos, ${nombre.value.trim()}!<br> Te responderemos pronto.
      </div>
    `;

    localStorage.clear();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form-contacto");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          form.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (form) observer.observe(form);
});

const form = document.querySelector("#form-contacto");

if (form) {
  form.addEventListener("submit", function (e) {
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add("error");
        valid = false;
        setTimeout(() => input.classList.remove("error"), 2000);
      }
    });

    if (!valid) {
      e.preventDefault(); // Previene envío si hay errores
    }
  });
}


