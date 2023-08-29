const hiddenText = document.getElementById("hidden-text");
const showButton = document.getElementById("show-button");

showButton.addEventListener("click", function () {
  hiddenText.classList.toggle("expanded");
  if (hiddenText.classList.contains("expanded")) {
    showButton.textContent = "Show Less";
  } else {
    showButton.textContent = "Read More";
  }
});
