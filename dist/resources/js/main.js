//adds style to navbar after nav at certain position on screen
function navStyleOnScroll(){
    const navbar = document.querySelector('#main-nav');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark');
            navbar.classList.add('shadow');
        }else{
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('shadow');
        }
    });
}

//runs function after page has loaded
document.addEventListener('DOMContentLoaded', navStyleOnScroll);

