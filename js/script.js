
window.addEventListener("scroll",()=>{
    let navbar=document.querySelector(".custom-navbar");
    let menu=document.querySelector(".menu");
    let darkLogo=document.querySelector(".dark-logo");
    let whiteLogo=document.querySelector(".white-logo");
    navbar.classList.toggle("navbar-fixed",window.scrollY > 0);
    menu.classList.toggle("bright-menu",window.scrollY > 0);
    darkLogo.classList.toggle("ds-block",window.scrollY > 0);
    whiteLogo.classList.toggle("ds-none",window.scrollY > 0);

});



var coverflow=$("#coverflow").flipster();
var carousel=$("#carousel").flipster({
    style:'carousel',
    spacing:-0.5,
    nav:true,
    button:true,
});
