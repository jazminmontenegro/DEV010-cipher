import cipher from './cipher.js';

const boton = document.getElementById("bnt_captura") // boton para cifrar
const texarea = document.querySelector("#mensaje")   // texara para cifrar
const numero = document.querySelector("#desplazamineto") // desplazamiento
const botond = document.getElementById("bnt_captura2") // boton para desifrar
const texaread = document.querySelector("#mensaje2")   // texarea para desifrar
const bnt_borrar = document.querySelector("#borrar") // borrar texto


function capturaTexto() {

  const result = cipher.encode(numero.value,texarea.value)
  const textarea = document.getElementById("mensaje");
  textarea.value = result;

}
boton.addEventListener('click',capturaTexto)

function capturaTexto2() {

  const result2 = cipher.decode(numero.value,texaread.value)
  const textaread = document.getElementById("mensaje2");
  textaread.value = result2;
}
botond.addEventListener('click', capturaTexto2)

function borrartexto(){
  texarea.value=''
  numero.value=''
  texaread.value=''
} bnt_borrar.addEventListener('click', borrartexto)

