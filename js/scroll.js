const scrollIcon = document.querySelector('.scroll__img');
const navItem = document.querySelectorAll('.navigation__list a[href*="#"]');
const header = document.querySelector('.header');

['load', 'scroll'].forEach( e => {
    window.addEventListener(e, scrollIconRender);
});



scrollIcon.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

Array.from(navItem).forEach( e => {
    e.addEventListener('click', (e)=> {
        e.preventDefault();
        if(e.target.hash.split("#")[1]) {
            document.getElementById(e.target.hash.split("#")[1]).scrollIntoView(
                {
                    behavior: 'smooth'
                }
            );
        }
    });
});

function scrollIconRender() {
    if(pageYOffset > 300) {
        scrollIcon.style.opacity = 1;
        scrollIcon.style.visibility = 'visible';

    }
    else {
        scrollIcon.style.opacity = 0;
        scrollIcon.style.visibility = 'hidden';
    }
}