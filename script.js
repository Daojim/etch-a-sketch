const container = document.querySelector("#container");

function gridMaker(num) {
  container.innerHTML = ""; //To clear grid
  container.style.setProperty("--num", num);
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
gridMaker(16);

const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  let num = prompt("How many squares on each side would you like?");
  if (num <= 0 || num > 100) {
    alert("Number is limited between 1 to 100!");
    num = 1;
  }
  gridMaker(num);
});
