// Mostrar los bloques con fade-in al hacer scroll
const bloques = document.querySelectorAll(".bloque");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.2,
});

bloques.forEach(bloque => {
  observer.observe(bloque);
});


// Agrega una animación sutil al pasar por los títulos h2
const titulos = document.querySelectorAll(".titulo h2");

titulos.forEach(titulo => {
  titulo.addEventListener("mouseover", () => {
    titulo.classList.add("resaltar");
  });
  titulo.addEventListener("mouseout", () => {
    titulo.classList.remove("resaltar");
  });
});


// Animación pulsante en los botones cuando entran a pantalla
const botones = document.querySelectorAll(".imagen-boton button");

const observerBotones = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("pulse");
    }
  });
}, {
  threshold: 0.5,
});

botones.forEach(btn => {
  observerBotones.observe(btn);
});
