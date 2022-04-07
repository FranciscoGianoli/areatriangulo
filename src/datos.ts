//declaracion de variables
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById ("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById ("rotulo1");
let dato2 = <HTMLInputElement>document.getElementById("dato2");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let area: number ;
let base: number;
let altura: number;

//resto del codigo
btnEnviar.addEventListener("click", () => {
  //aca va nuestro codigo. se ejecuta al hacer click en el boton enviar
  rotulo1.innerHTML = "base"  //cambiamos el texto del rotulo
  rotulo2.innerHTML = "altura"
  area = Number(dato1.value)*(dato2.value)
  console.log ("el area del triangulo es" , area)
}}; 