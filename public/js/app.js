// dropdown

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
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


let signDiv = document.getElementById("sign_id")
let loginDiv = document.getElementById("login-id")




let signBtn = document.getElementById("siggn")
signBtn.addEventListener('click', sw)

function sw() {
  signDiv.classList.remove("d-none")
  loginDiv.classList.add("d-none")
}

let loginBtn = document.getElementById("loggin")
loginBtn.addEventListener('click', sw2)

function sw2() {
  signDiv.classList.add("d-none")
  loginDiv.classList.remove("d-none")
}

let bookBtn = document.getElementById("book_btn")
let modalDiv = document.getElementById("modal_div")
bookBtn.addEventListener('click', bk1)

function bk1() {
  modalDiv.classList.remove("d-none")
}

let modalCls = document.getElementById("modal_cls")
modalCls.addEventListener('click', mcls)
function mcls() {
  modalDiv.classList.add("d-none")
}






// modal end


