const navItems = document.querySelectorAll('.nav-items');
const btnMenu = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu'),
      menuNav = document.querySelector('.menu-nav'),
      menuBrand = document.querySelector('.menu-branding');

let showMenu = false;



btnMenu.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        btnMenu.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBrand.classList.add('show');
        navItems.forEach(item => {
            item.classList.add('show');
        });
        showMenu = true;
    }else{
        btnMenu.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBrand.classList.remove('show');
        navItems.forEach(item => {
            item.classList.remove('show');
        });
        showMenu = false;
    }
}
