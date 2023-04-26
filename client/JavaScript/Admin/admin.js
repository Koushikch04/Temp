const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const menuToggler = document.getElementsByClassName("menu-item");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

function menuChange() {
    for(let i = 0; i < menuToggler.length; i++) {
        menuToggler[i].addEventListener('click', () => {
            const current = document.getElementsByClassName("active");
            console.log(current);
            current[0].className = current[0].className.replace(" active", "");
            menuToggler[i].className += " active";
        })
    }
}