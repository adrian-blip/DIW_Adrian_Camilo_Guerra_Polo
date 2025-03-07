


// Selección de elementos
const menu = document.querySelector(".nav-menu");
const openBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".close-btn");

// Función para abrir el menú
openBtn.addEventListener("click", () => {
  menu.classList.add("active"); // Añadir clase 'active' para mostrar el menú
});

// Función para cerrar el menú
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active"); // Quitar clase 'active' para ocultar el menú
});
  