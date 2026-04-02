const seedColorInput = document.getElementById("seed");
const schemeModeInput = document.getElementById("mode");
const getSchemeBtn = document.getElementById("get-scheme-btn");

getSchemeBtn.addEventListener("click", function () {
  const seedHexValue = seedColorInput.value.slice(1);
  const schemeModeValue = schemeModeInput.value.toLowerCase();
  colorsFetched = [];

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${seedHexValue}&mode=${schemeModeValue}`,
  )
    .then((response) => response.json())
    .then((data) => {
      for (const color of data.colors) {
        colorsFetched.push(color.hex.value);
      }

      const colorDivs = document.querySelectorAll(".colors > div");
      const codeDivs = document.querySelectorAll(".codes > div");

      colorDivs.forEach((div, index) => {
        div.style.backgroundColor = colorsFetched[index];
      });

      codeDivs.forEach((div, index) => {
        div.textContent = colorsFetched[index];
      });
    });
});
