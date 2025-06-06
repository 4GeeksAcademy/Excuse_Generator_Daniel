import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let who = ['Donald Trump', 'Michael Jackson','Un niño','El Bicho','El profe Samuel']
  let action = ['formateó','limpió','tiró','vendió','instaló']
  let what = ['64 gigas de ram','mi ssd','mi pc','mi celular ','mi coffee maker']
  let when = ['cuando me dormí','cuando estaba en el baño','en la madrugada','en un Mcdonalds','ayer']

  let excuse = who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)]

  document.getElementById("excuse").textContent = excuse;
};
