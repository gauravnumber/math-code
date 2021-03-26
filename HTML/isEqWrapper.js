import { isEq } from "../js/isEq.js";

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var temp = isEq(
    document.getElementById("in1").value,
    document.getElementById("in2").value
  );
  document.getElementById("show").innerHTML = temp;
});
