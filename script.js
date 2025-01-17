const container = document.querySelector("#container");

function gridMaker(num) {
  for (let rows = 0; rows < num; rows++) {
    for (let columns = 0; columns < num; columns++) {
      const square = document.createElement("div");
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
      square.classList.add("square");
      container.appendChild(square);
    }
  }
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let num = prompt("How many squares on each side would you like?");
  if (num <= 0 || num > 100) {
    alert("Number is limited between 1 to 100!");
  }
});
