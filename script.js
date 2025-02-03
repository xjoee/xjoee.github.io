const sideMenu = document.querySelector(".navbar ul")
const burgerIcon = document.querySelector(".burger-icon")


burgerIcon.addEventListener("click", function() {
    sideMenu.classList.toggle("slide");
});

document.addEventListener("click", function(e) {
    const checkbox = document.querySelector(".checkbox");

    if( !burgerIcon.contains(e.target) && !sideMenu.contains(e.target)) {
        checkbox.checked = false;
        sideMenu.classList.remove("slide")
    }
});
