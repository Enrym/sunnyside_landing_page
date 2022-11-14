let hamburger =document.getElementById('mobileMenu');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', ()=> {
    mobileNav.classList.toggle('mobile-nav-vis');  
})
