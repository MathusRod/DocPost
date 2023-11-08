export default function initCircle() {
  const section = document.querySelectorAll(".js-transition .section3-right");
  const circles = document.querySelectorAll(".circulo");

  function activeSection(index) {
    section.forEach((div) => div.classList.remove("active"));
    section[index].classList.add("active");

    circles.forEach((circle) => circle.classList.remove("active"));
    circles[index].classList.add("active");
  }

  if (section.length && circles.length) {
    section[0].classList.add("active");
    circles[0].classList.add("active");

    let index = 0;

    const intervalFunction = () => {
      index = (index + 1) % circles.length; // Avançar para o próximo índice (circular)
      activeSection(index);
    };

    setInterval(intervalFunction, 3500);

    circles.forEach((circle, index) => {
      circle.addEventListener("click", () => {
        activeSection(index);
      });
    });
  }
}
