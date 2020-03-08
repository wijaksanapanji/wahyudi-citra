window.addEventListener("onload", function() {
  let backsound = document.querySelector(".backsound");
  backsound.play();
});

let date = new Date("April 10, 2020").getTime();

const countdown = setInterval(function() {
  let now = new Date().getTime();
  let distance = date - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".date").innerHTML =
    days +
    " Hari " +
    hours +
    " Jam " +
    minutes +
    " Menit " +
    seconds +
    " Detik";

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".date").innerHTML = "10 April 2020";
  }
});
