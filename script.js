const container = document.querySelector("#container");
for (let rows = 0; rows < 16; rows++) {
  for (let columns = 0; columns < 16; columns++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = "Test";
    container.appendChild(square);
  }
}
