const titulo = document.getElementById("titulo");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {
    titulo.textContent = "¡Estamos aprendiendo DOM!";
    titulo.style.color = "purple";
});