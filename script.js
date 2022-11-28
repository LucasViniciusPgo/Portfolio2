
window.sr = ScrollReveal({ reset: true });
sr.reveal('.texto', { duration: 1000 });
sr.reveal('.circular--square', {
  rotate: {x: 100, y: 100, z: 0},
  duration: 2000  
})
sr.reveal('.card', {
  duration: 2500,
  distance: '60px',
  delay: 400
});
sr.reveal('.card2', {
  duration: 2500,
  distance: '60px',
  delay: 400
});
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}