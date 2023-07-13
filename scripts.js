// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("open-modal");
var btn2 = document.getElementById("open-modal-2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Switch to hamburger menu on smaller screens
var hamburger = document.getElementById("hamburger");
var navbar = document.getElementById("navbar");

hamburger.onclick = function() {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

// Display navigation bar if window is resized to a larger size
window.onresize = function() {
  if (window.innerWidth > 768) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
}

// Listen for clicks on the entire document
document.addEventListener('click', function(event) {
  // Check if the click was within the navbar or the hamburger icon
  var isClickInside = navbar.contains(event.target) || hamburger.contains(event.target);

  // If the click was outside the navbar and hamburger icon, and the navbar is currently open, close it
  if (!isClickInside && navbar.style.display === "block") {
    navbar.style.display = "none";
  }
});
