// Get button selector
let selector = document.querySelector('#btn-selector');
if(selector) {
    initTheme(); // on page load, if user has already selected a specific theme -> apply it

    selector.addEventListener('click', function(event) {
        resetThemme(); // update color theme
    });

    function initTheme() {
        let bodyDarkSelected = (localStorage.getItem('body') !== null && localStorage.getItem('body') === 'dark');
        let wrapperDarkSelected = (localStorage.getItem('wrapper') !== null && localStorage.getItem('wrapper') === 'select-wrapper-dark');
        let btnDarkSelected = (localStorage.getItem('btn-selector') !== null && localStorage.getItem('btn-selector') === 'selector-dark');
        let navDarkSelected = (localStorage.getItem('nav') !== null && localStorage.getItem('nav') === 'nav-dark');
        let footerDarkSelected = (localStorage.getItem('footer') !== null && localStorage.getItem('footer') === 'footer-dark');

        // update body, nav and footer class attributes
        bodyDarkSelected ? document.body.setAttribute('class', 'dark') : document.body.removeAttribute('class');
        wrapperDarkSelected ? document.querySelector('#wrapper').setAttribute('class', 'select-wrapper-dark') : document.querySelector('#wrapper').removeAttribute('class');
        btnDarkSelected ? document.querySelector('#btn-selector').setAttribute('class', 'selector-dark') : document.querySelector('#btn-selector').removeAttribute('class');
        navDarkSelected ? document.querySelector('nav').setAttribute('class', 'nav-dark') : document.querySelector('nav').removeAttribute('class');
        footerDarkSelected ? document.querySelector('footer').setAttribute('class', 'footer-dark') : document.querySelector('footer').removeAttribute('class');
    };

    function resetThemme() {
        let themes = document.querySelector('.themes');
        if(!themes.querySelector('.select-wrapper-dark') && !themes.querySelector('.selector-dark')) { // dark theme has been selected
            document.querySelector('#wrapper').setAttribute('class', 'select-wrapper-dark');
            document.querySelector('#btn-selector').setAttribute('class', 'selector-dark');
            document.body.setAttribute('class', 'dark');
            document.querySelector('nav').setAttribute('class', 'nav-dark');
            document.querySelector('footer').setAttribute('class', 'footer-dark');

            // save theme selection
            localStorage.setItem('body', 'dark'); 
            localStorage.setItem('wrapper', 'select-wrapper-dark');
            localStorage.setItem('btn-selector', 'selector-dark');
            localStorage.setItem('nav', 'nav-dark');
            localStorage.setItem('footer', 'footer-dark');
        } else {
            themes.querySelector('#wrapper').removeAttribute('class');
            themes.querySelector('#btn-selector').removeAttribute('class');
            document.body.removeAttribute('class');
            document.querySelector('nav').removeAttribute('class');
            document.querySelector('footer').removeAttribute('class');

            // reset theme selection
            localStorage.removeItem('body'); 
            localStorage.removeItem('wrapper');
            localStorage.removeItem('btn-selector');
            localStorage.removeItem('nav');
            localStorage.removeItem('footer');
        }
    };
}
