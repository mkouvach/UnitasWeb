document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains("active");

            // Cierra todos los demás elementos del acordeón
            document.querySelectorAll(".accordion-item").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".accordion-content").style.maxWidth = null;
                item.querySelector(".accordion-content").style.opacity = 0;
            });

            // Si no estaba activo, lo abre
            if (!isActive) {
                accordionItem.classList.add("active");
                accordionItem.querySelector(".accordion-content").style.maxWidth = "500px"; // Ajusta el tamaño según sea necesario
                accordionItem.querySelector(".accordion-content").style.opacity = 1;
            }
        });
    });
});
  
