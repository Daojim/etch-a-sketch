const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.textContent = "Test";
  container.appendChild(square);
}
