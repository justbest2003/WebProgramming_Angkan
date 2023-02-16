let menu = document.querySelector("#menu-bars")
let navbar = document.querySelector("header .flex .navbar");
menu.onclick = () =>{
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
};

let search = document.querySelector("#search-icon")
search.onclick = () =>{
    let search_form = document.querySelector("#search-form")
    search_form.classList.toggle("active")
}

let close_icon = document.querySelector("#close")
close_icon.onclick = () => {
    let search_form = document.querySelector("#search-form")
    search_form.classList.remove("active")
}

//Swiper function
var swiper = new Swiper(".home-slider", {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true
});