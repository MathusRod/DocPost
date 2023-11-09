export default function initCarrossel() {
  const controls = document.querySelectorAll(".control");
  const slider = document.querySelector(".card-wrapper");
  const cards = document.querySelectorAll(".card");

  if (window.innerWidth > 500) {
    cards[1].classList.add("startCard");
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        if (control.classList.contains("btn-left")) {
          slider.scrollLeft -= 700;
          cards[2].classList.remove("startCard");
          cards[1].classList.add("startCard");
        } else {
          slider.scrollLeft += 700;
          cards[1].classList.remove("startCard");
          cards[2].classList.add("startCard");
        }
      });
    });
  } else {
    controls.forEach((control) => {
      control.addEventListener("click", () => {
        if (control.classList.contains("btn-left")) {
          slider.scrollLeft -= 250;
        } else {
          slider.scrollLeft += 250;
        }
      });
    });
  }
}
