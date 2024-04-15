const playSound = (selectorAudio) => {
  const element = document.querySelector(selectorAudio);
  if (element && element.localName === "audio") {
    element.play();
  } else {
    alert("Elemento não encontrado.");
  }
};
const teclas = document.querySelectorAll(".tecla");

for (let i = 0; i < teclas.length; i++) {
  const sounds = teclas[i].classList[1];
  const idElement = `#som_${sounds}`;
  teclas[i].onclick = () => playSound(idElement);
}
// let i = 0;

// while (i < teclas.length) {
//   const sounds = teclas[i].classList[1];
//   const idElement = `#som_${sounds}`;
//   teclas[i].onclick = () => {
//     playSound(idElement);
//   };
//   i++;
// }

teclas.onkeydown = (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    teclas.classList.add("ativa");
  }
};

teclas.onkeyup = (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    teclas.classList.remove("ativa");
  }
};
