function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let theCursor = document.querySelector('#cursor');

document.addEventListener("mousemove", moveCursor);

function moveCursor(e){
    let x = e.clientX;
    let y = e.clientY;

theCursor.style.left = `${x}px`
theCursor.style.top = `${y}px`
}

function showText() {
    console.log("showText()");

}
frameContainer.addEventListener("click", function(event) {
    document.querySelector(".").classList.toggle("active");
    projectImage.classList.toggle("off");