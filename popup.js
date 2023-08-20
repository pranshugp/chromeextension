console.log("this is a extension ");

document.querySelector("button").addEventListener("click", function () {
  document.querySelector("h1").innerHTML = document.title;
});
