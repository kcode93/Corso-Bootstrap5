//adds style to navbar after nav at certain position on screen
function navStyleOnScroll(){
    const navbar = document.querySelector('#main-nav');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark');
        }else{
            navbar.classList.remove('bg-dark');
        }
    });
}

//runs function after page has loaded
document.addEventListener('DOMContentLoaded', navStyleOnScroll);