export default function initCarrossel() {
  const controls = document.querySelectorAll(".control");
  const slider = document.querySelector(".card-wrapper");
  const cards = document.querySelectorAll(".card");

  if (window.innerWidth > 420) {
    cards[1].classList.add("card-inicio");
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        if (control.classList.contains("btn-left")) {
          slider.scrollLeft -= 700;
          cards[2].classList.remove("card-inicio");
          cards[1].classList.add("card-inicio");
        } else {
          slider.scrollLeft += 700;
          cards[1].classList.remove("card-inicio");
          cards[2].classList.add("card-inicio");
        }
      });
    });
  } else {
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        if (control.classList.contains("btn-left")) {
          slider.scrollLeft -= 200;
        } else {
          slider.scrollLeft += 200;
        }
      });
    });
  }
}
