export const showHiddeDropdown = function () {
  const avatar = document.querySelector(".avatar-small");
  const dropdown = document.querySelector(".dropdown");

  if (avatar) {
    avatar.addEventListener("click", (e) => {
      if (e.target !== avatar) return;

      dropdown.classList.toggle("no-visible");
      dropdown.style.transition = "0.5s";
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target === avatar) return;
    dropdown.classList.add("no-visible");
  });
};
