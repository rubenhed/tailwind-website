
//hamburger menu
document.getElementById("mobile-menu").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("hidden");
})

//dropdown
window.addEventListener("click", (event) => {
  const hidden = event.target.classList.contains("dropdown-toggle") && event.target.nextElementSibling.classList.contains("hidden");

  document.querySelectorAll(".dropdown-toggle").forEach((toggleMenu) => {
    toggleMenu.querySelector("img").classList.remove("rotate-180");
    toggleMenu.nextElementSibling.classList.add("hidden");
  });

  if (hidden) {
    event.target.querySelector("img").classList.add("rotate-180");
    event.target.nextElementSibling.classList.remove("hidden");
  }
});
