const elements = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('show');
    }
});
}, {
threshold: 0.2
});


const bgImage = new Image();
bgImage.src = "estilos/imagens/fire.gif";

Promise.all([
  new Promise(resolve => window.addEventListener("load", resolve)),
  new Promise(resolve => bgImage.onload = resolve)
]).then(() => {
  document.getElementById("loader").style.display = "none";
});