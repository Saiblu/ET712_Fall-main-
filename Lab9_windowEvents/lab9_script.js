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
const openmodal1 = document.querySelector(".openmodal")
const modalOverlay = document.querySelector("#modalOverlay")
const closeBtn = document.querySelector("#closeBtn")

openmodal1.addEventListener('click', function() {
    modalOverlay.style.display = "block";
});

closeBtn.addEventListener('click', function() {
    modalOverlay.style.display = "none";
});