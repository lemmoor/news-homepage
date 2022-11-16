const nav = document.querySelector('nav');
const navBtn = document.querySelector('.mobile-burger');

navBtn.addEventListener("click", () => {
    nav.classList.toggle("mobile-active");
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navBtn.classList.toggle("close");
})

addEventListener('resize', () => {
    if(window.innerWidth > 1104){
        nav.classList.remove("mobile-active");
        navBtn.classList.remove("close");
    }
    console.log("resize")
});
