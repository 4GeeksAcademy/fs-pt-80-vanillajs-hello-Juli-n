/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuse = document.querySelector("#excuse");

inner;
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const arr = ["The dog", "My grandma", "The mailman", "My bird"];
  const arra = ["ate", "peed", "crushed", "broke"];
  const arrb = ["my homework", "my phone", "the car"];
  const arrc = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const getRandom = arr_y => Math.floor(Math.random() * arr_y.length);
  const getValue = arr_y => arr_y[getRandom(arr_y)];

  console.log(
    `${getValue(arr)} ${getValue(arra)} ${getValue(arrb)} ${getValue(arrc)}`
  );
};
