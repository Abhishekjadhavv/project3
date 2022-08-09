const bar = document.querySelector(".bar i"),
menu_list = document.querySelector(".menu-list"),
header = document.querySelector(".header");


bar.addEventListener("click",()=>{
    menu_list.classList.toggle("active");
    bar.classList.toggle("bx-x");
});


window.onscroll = (()=>{
    menu_list.classList.remove("active");
    bar.classList.remove("bx-x");

    if(window.scrollY > 30){
        header.classList.add("active");
        menu_list.classList.add("active-1");
    }else{
        header.classList.remove("active");
        menu_list.classList.remove("active-1");
    }
})