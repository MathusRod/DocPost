export default function initTrocaTexto() {
  const txt = document.querySelectorAll(".section4 .card p");
  if (window.innerWidth <= 420) {
    txt.forEach((text) => {
      text.innerText =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.";
    });
  }
}
