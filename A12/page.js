const images = document.querySelectorAll("img");
let cont=0;
for (var img of images) {
  cont++;
}

const inicio=document.querySelector("body");
const contador=document.createElement("h2");
contador.innerText="Numero de Imagens=" + cont;

var divpai = inicio.parentNode;

divpai.insertBefore(contador,inicio.nextSibling);

//inicio.insertBefore(contador);
let aux1=0;
let aux2=0;
for (var img of images) {
  aux1=img.height;
  aux2=img.width;
  img.src="https://pbs.twimg.com/media/FMn_JriXIAAF0GA.jpg";
  img.height=aux1;
  img.width=aux2;
}
