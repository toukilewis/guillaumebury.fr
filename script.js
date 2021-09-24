function togglemenu() {
  document.querySelector("#deroule").classList.toggle("desappear");
}

var rand = Math.ceil(Math.random() * 60000) + 60000;
setTimeout(function () {
  document.querySelector(".blueScreen").classList.add("appear");
}, rand);
function back() {
  document.querySelector(".blueScreen").classList.remove("appear");
}
