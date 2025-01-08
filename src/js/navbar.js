TIMEOUT = 100;

//hamburger menu
document.getElementById("mobile-menu").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("hidden");
})

//dropdown hover
document.querySelectorAll(".dropdown-toggle").forEach((toggleMenu) => {
  const dropdownMenu = toggleMenu.nextElementSibling;
  let hideTimeout;

  toggleMenu.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) {
      toggleMenu.querySelector("img").classList.add("rotate-180");
      dropdownMenu.classList.remove("hidden");
    };
  });

  toggleMenu.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      hideTimeout = setTimeout(() => {
        toggleMenu.querySelector("img").classList.remove("rotate-180");
        dropdownMenu.classList.add("hidden");
      }, TIMEOUT);
    };
  });

  dropdownMenu.addEventListener("mouseenter", () => {
    clearTimeout(hideTimeout);
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    if (window.innerWidth > 768) {
      hideTimeout = setTimeout(() => {
        toggleMenu.querySelector("img").classList.remove("rotate-180");
        dropdownMenu.classList.add("hidden");
      }, TIMEOUT);
    };
  });
});


//dropdown click
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
