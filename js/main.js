
const   navMenu = document.getElementById('nav--menu'),
/*=============== Variable cambia constante menos posibilidades de que cambie  ===============*/
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')
        /*=============== NavToggle es una constante que tiene la direcion de nav-toggle ===============*/

/*=============== Menu show ===============*/
if(navToggle){
    /*=============== si encuentra a nav-toggle agreguele un evento de escucha evento arrastar,click o presionar cualquier tecla en este caso es en clik el ( ()=> ) ejecute lo siguiente===============*/
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
        /*=============== busque a navMenu y en su lista de clases agrege una clase nueva que se llama show-menu===============*/
    });
}
/*===============Menu hideen ===============*/
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
        /*=============== busque a nav menu y quite esa clase  ===============*/
    });
}

const navLink = document.querySelectorAll('.nav-link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav--menu')
    /*=============== Cuando se da click en cada nav__link,se remueve show-menu ===============*/
    navMenu.classList.remove('show-menu')
}
