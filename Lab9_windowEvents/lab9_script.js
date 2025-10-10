let displaypexels = document.querySelector(".displaypexels");
// read the pexels from the y axis 
window.addEventListener("scroll", function(e){ 
    let y_pixels = window.scrollY;
    displaypexels.innerHTML = `${y_pixels} px away from the top`;
})

// to the top 
const toTop = document.querySelector(".toTop")
window.addEventListener("scroll", function(e){
    let y_pixels = window.scrollY;
    if(y_pixels > 600){
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }
})

//resize event: change background color if the window is resized
window.addEventListener("resize", function(e){
    displaypexels.style.backgroundColor = "crimson"
})

//load event: when the page finishes loading, open an alert dialog
window.addEventListener("load", function(e){
    this.alert("Page finished loading")
})

//modal window
const openmodal1 = document.getElementById("openmodal1"); // Get the image that opens the modal1
const openmodal2 = document.getElementById("openmodal2"); // Get the image that opens the modal2
const openmodal3 = document.getElementById("openmodal3"); // Get the image that opens the modal3
const modalOverlay1 = document.getElementById("modalOverlay1"); // Get the modal1 overlay
const modalOverlay2 = document.getElementById("modalOverlay2"); // Get the modal2 overlay
const modalOverlay3 = document.getElementById("modalOverlay3"); // Get the modal3 overlay
const closeBtn1 = document.getElementById("closeBtn1"); // Get the <span> element that closes the modal1
const closeBtn2 = document.getElementById("closeBtn2"); // Get the <span> element that closes the modal2
const closeBtn3 = document.getElementById("closeBtn3"); // Get the <span> element that closes the modal3

if (openmodal1 && modalOverlay1) {  // for modal one functionality to close and open
    openmodal1.addEventListener('click', function() {
        modalOverlay1.style.display = "block";
    });
}
if (closeBtn1 && modalOverlay1) {   
    closeBtn1.addEventListener('click', function() {
        modalOverlay1.style.display = "none";
    });
}

if (openmodal2 && modalOverlay2) { // for modal two functionality to close and open
    openmodal2.addEventListener('click', function() {
        modalOverlay2.style.display = "block";
    });
}
if (closeBtn2 && modalOverlay2) {
    closeBtn2.addEventListener('click', function() {
        modalOverlay2.style.display = "none";
    });
}

if (openmodal3 && modalOverlay3) { // for modal three functionality to close and open
    openmodal3.addEventListener('click', function() {
        modalOverlay3.style.display = "block";
    });
}
if (closeBtn3 && modalOverlay3) {
    closeBtn3.addEventListener('click', function() {
        modalOverlay3.style.display = "none";
    });
}

// Create header dynamically if not present
let header = document.getElementById('fixedHeader');
if (!header) {
    header = document.createElement('header');
    header.id = 'fixedHeader';
    header.innerHTML = '<h1 id="pageTitle">Lab 9 by Elias Muniz</h1>';
    document.body.insertBefore(header, document.body.firstChild);
}

// Change header background color on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'crimson';
        header.style.color = 'white';
    } else {
        header.style.backgroundColor = '#fff';
        header.style.color = '#222';
    }
});

// Change title color based on window width
const pageTitle = document.getElementById('pageTitle');
function updateTitleColor() {
    if (window.innerWidth > 1000) {
        pageTitle.style.color = 'green';
    } else if (window.innerWidth > 700) {
        pageTitle.style.color = 'blue';
    } else if (window.innerWidth > 300) {
        pageTitle.style.color = 'orange';
    } else {
        pageTitle.style.color = 'black';
    }
}
window.addEventListener('resize', updateTitleColor);
updateTitleColor();
