var i = 0;
var txt = 'Generating Amazon gift card code...'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("generating_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function generateText() {
  document.getElementById("generating_text").innerHTML = "";
  setTimeout(gen1, 0);
  setTimeout(gen2, 2000);
  setTimeout(gen3, 4000);
}
function gen1() {
  typeWriter('Generating Amazon gift card code...');
}
function gen2() {
  typeWriter('Attempting automatic human verification...');
}
function gen3() {
  typeWriter('Verification complete! Outputting code.');
}
