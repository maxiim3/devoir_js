const imgSrc = "./assets/Logo/logo-fx.jpg";
const imgDst = "./assets/Logo/logo.jpeg";
const allImages = document.querySelectorAll('img');



window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        $('.nav-bar').addClass('nav-bar-fx');
        $('.nav-link').addClass('nav-link-fx');
        $('.nav-link:hover').addClass('nav-link-fx:hover');
        $('[src="./assets/Logo/logo-fx.jpg"]').attr('src', imgDst);

    }
    else {
        $('.nav-bar').removeClass('nav-bar-fx');
        $('.nav-link').removeClass('nav-link-fx');
        $('.nav-link:hover').removeClass('nav-link-fx:hover');
        $('#logo img').attr('src', imgSrc)

    }
});

