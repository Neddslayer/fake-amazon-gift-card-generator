var i = 0;
var speed = 50; /* The speed/duration of the effect in milliseconds */

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function typeWriter(txt) {
  [...txt].forEach((e, i) => {
    document.getElementById("generating_text").innerHTML += e;
    await wait(50);
  });
}
function generateText() {
  document.getElementById("generating_text").innerHTML = "";
  setTimeout(gen1, 0);
  setTimeout(gen2, 2000);
  setTimeout(gen3, 4000);
}
function gen1() {
  i = 0;
  document.getElementById("generating_text").innerHTML = "";
  typeWriter('Generating Amazon gift card code...');
}
function gen2() {
  i = 0;
  document.getElementById("generating_text").innerHTML = "";
  typeWriter('Attempting automatic human verification...');
}
function gen3() {
  i = 0;
  document.getElementById("generating_text").innerHTML = "";
  typeWriter('Verification complete! Outputting code.');
}
