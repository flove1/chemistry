toggle.onclick = function () {
  if (toggle.checked) {
    document.querySelector("#sidebar").style = "transform: translateX(0);";
  }
  else {
    document.querySelector("#sidebar").style = "transformL translateX(-100%)";
  }
}
