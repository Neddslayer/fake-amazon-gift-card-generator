var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const typeWriter = async (txt) => {
  document.getElementById("generating_text").innerHTML = "";
  for (const a of txt.split("")) {
    document.getElementById("generating_text").innerHTML += a;
    await wait(speed);
  }
}
function generateText() {
  setTimeout(gen1, 0);
  setTimeout(gen2, 2500);
  setTimeout(gen3, 5500);
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
