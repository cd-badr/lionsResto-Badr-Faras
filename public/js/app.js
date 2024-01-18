// dropdown

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
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

// dropdown end

//navbar 

let barsBtn = document.querySelector('.fa-bars')
let closeBTn = document.querySelector('.fa-xmark')
let linksDiv = document.querySelector('.links')

barsBtn.addEventListener('click', naver)
closeBTn.addEventListener('click', naver)
function naver() {
    barsBtn.classList.toggle("fa-bars")
    linksDiv.classList.toggle("right100")
}

// navbar end

// modal 



// modal end


