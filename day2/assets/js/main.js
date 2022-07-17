const navMenu = document.getElementById("nav-menu"),
  navGrid = document.getElementById("nav-grid"),
  navClose = document.getElementById("nav-close");

if (navGrid) {
  navGrid.addEventListener("click", () => {
    navMenu.classList.add("show-nav-menu");
  });
}

if (navGrid) {
  navGrid.addEventListener("click", () => {
    navMenu.classList.remove("show-nav-menu");
  });
}
