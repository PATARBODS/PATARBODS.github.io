const navbarContainer = document.getElementsByClassName("navbar-container")[0];

onScroll = (event) => {
    var viewportY = window.scrollY;
    var viewportHeight = window.innerHeight/100;

    if (viewportY > viewportHeight) {
        navbarContainer.style.transform = 'translateY(0)';
    } else 
    {
        navbarContainer.style.transform = 'translateY(-100%)';
    }
};

addEventListener('scroll', onScroll)