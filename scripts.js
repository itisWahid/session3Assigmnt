let classicTab = document.getElementById("classic-tab");
let impressionismTab = document.getElementById("impressionism-tab");
let modernTab = document.getElementById("modern-tab");
let classic = document.getElementById("classic");
let impressionism = document.getElementById("impressionism");
let modern = document.getElementById("modern");

classicTab.addEventListener("mouseover", function () {
  classicTab.style.color = "rgb(255,255,255)";
});
classicTab.addEventListener("mouseout", function () {
  classicTab.style.color = "rgb(168, 168, 168)";
});
classicTab.addEventListener("click", function () {
  classic.style.display = "inline-block";
  classicTab.style.borderBottom = "1px solid gray";

  impressionism.style.display = "none";
  impressionismTab.style.borderBottom = "0";
  modern.style.display = "none";
  modernTab.style.borderBottom = "0";
});

impressionismTab.addEventListener("mouseover", function () {
  impressionismTab.style.color = "rgb(255,255,255)";
});
impressionismTab.addEventListener("mouseout", function () {
  impressionismTab.style.color = "rgb(168, 168, 168)";
});
impressionismTab.addEventListener("click", function () {
  classicTab.style.borderBottom = "0";
  classic.style.display = "none";
  impressionism.style.display = "inline";
  impressionismTab.style.borderBottom = "1px solid gray";
  modern.style.display = "none";
  modernTab.style.borderBottom = "0";
});

modernTab.addEventListener("mouseover", function () {
  modernTab.style.color = "rgb(255,255,255)";
});
modernTab.addEventListener("mouseout", function () {
  modernTab.style.color = "rgb(168, 168, 168)";
});
modernTab.addEventListener("click", function () {
  classicTab.style.borderBottom = "0";
  impressionismTab.style.borderBottom = "0";

  classic.style.display = "none";
  impressionism.style.display = "none";
  modern.style.display = "inline";
  modernTab.style.borderBottom = "1px solid gray";
});
