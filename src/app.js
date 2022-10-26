/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const pronoun = ["the", "our", "a"];
const adj = ["big", "great", "awesome"];
const noun = ["raccoon", "jogger", "tiger"];
const extension = [".com", ".net", ".es", ".info"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extention.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + extension[l]);
      }
    }
  }
}
