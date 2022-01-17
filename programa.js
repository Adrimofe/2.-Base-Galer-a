function ponImagen(evento) {
    evento.preventDefault();
    imagen[0].setAttribute("src",this.getAttribute("href") );
}
const selectores = document.querySelectorAll("a");
selectores.forEach(element => {
    element.addEventListener('click', ponImagen)
});
let imagen = document.getElementsByTagName('img');
