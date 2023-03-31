var i = 0;
var txt = 'Generating Amazon gift card code...'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  document.getElementById("generating_text").innerHTML = "";
  if (i < txt.length) {
    document.getElementById("generating_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
