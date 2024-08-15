let palavra;
let som;
let imagem;

function setup() {
  createCanvas(700, 600);
  palavra = moto();
  som.loop();
}
function preload(){
  imagem = loadImage("imagem.jpg")
  som = loadSound("som1.mp3");
}
function draw() {
  carro();
  moto();
  let maximo=width;
  let minimo=0;
  let aparecer=map(mouseX, 0, width, 1, palavra.length);
  let inicio=palavra.substring(0,aparecer);
  text(inicio, 350,300);
}
  
  function carro(){
    background("#00BCD4");
    image(imagem,0,0,700,600)
  fill("black");
  textSize(80);
  textAlign(CENTER,CENTER); 
    
  }
  function moto(){
    let palavras=["carro","rebaixado","orbital","som alto","role","turbinado"];
    return random(palavras);
  }
