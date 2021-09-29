// change font size
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
const texto = document.getElementById("text-example");

slider.oninput = () => {
  output.innerHTML = slider.value;
  texto.style.fontSize = `${slider.value}px`
}

// change image size
var sliderImg = document.getElementById("myImage");
const imagem = document.getElementById("img-example");

sliderImg.oninput = () => {
  imagem.style.height = `${sliderImg.value}px`
}


// change background image
var sliderColor = document.getElementById("myColor");

sliderColor.oninput = () => {
  function random(min,max) {
    const num = Math.floor(Math.random()*(max-min)) + min;
    return num;
  }
  
  function randomColor() {
    return 'rgb(' + random(0,255) + ', ' + random(0,255) + ', ' + random(0,255) +  ')';
  }

  document.body.style.backgroundColor = randomColor();
}




