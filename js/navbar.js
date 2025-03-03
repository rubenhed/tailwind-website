TIMEOUT = 100;
HOVER_SCREEN_SIZE = 768;

//hamburger menu
document.getElementById("mobile-menu").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("hidden");
})

//all toggle menus
toggleMenus = document.querySelectorAll(".dropdown-toggle");

//dropdown hover
toggleMenus.forEach((toggleMenu) => {
  const dropdownMenu = toggleMenu.nextElementSibling;
  let hideTimeout;

  const clearHideTimeout = () => clearTimeout(hideTimeout);

  const showMenu = () => {
    if (window.innerWidth > HOVER_SCREEN_SIZE) {
      clearHideTimeout()
      toggleMenu.querySelector("img").classList.add("rotate-180");
      dropdownMenu.classList.remove("hidden");
    }
  };

  const hideMenu = () => {
    if (window.innerWidth > HOVER_SCREEN_SIZE) {
      hideTimeout = setTimeout(() => {
        toggleMenu.querySelector("img").classList.remove("rotate-180");
        dropdownMenu.classList.add("hidden");
      }, TIMEOUT);
    }
  };

  toggleMenu.addEventListener("mouseenter", showMenu);
  toggleMenu.addEventListener("mouseleave", hideMenu);
  dropdownMenu.addEventListener("mouseenter", clearHideTimeout);
  dropdownMenu.addEventListener("mouseleave", hideMenu);
});


//dropdown click
window.addEventListener("click", (event) => {
  const hidden = event.target.classList.contains("dropdown-toggle") && event.target.nextElementSibling.classList.contains("hidden");

  toggleMenus.forEach((toggleMenu) => {
    toggleMenu.querySelector("img").classList.remove("rotate-180");
    toggleMenu.nextElementSibling.classList.add("hidden");
  });

  if (hidden) {
    event.target.querySelector("img").classList.add("rotate-180");
    event.target.nextElementSibling.classList.remove("hidden");
  }
});
