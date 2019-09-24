// Get button selector
let selector = document.querySelector('.selector');

// Add event listener to button selector
selector.addEventListener('click', function(){
    let themes = document.querySelector('.themes');
    if(!themes.querySelector('.select-wrapper-dark') && !themes.querySelector('.selector-dark')){
        //themes.querySelector('#wrapper').classList.add('select-wrapper-dark');
        //themes.querySelector('#btn-selector').classList.add('selector-dark');

        let wrapper = themes.querySelector('#wrapper');
        localStorage.setItem('wrapper', wrapper.classList.add('select-wrapper-dark'));

        let selector = themes.querySelector('#btn-selector');
        localStorage.setItem('btn-selector', selector.classList.add('selector-dark'));

        let nav = document.querySelector('nav');
        localStorage.setItem('nav', nav.style.backgroundImage = 'linear-gradient(to right, #060b17, #060b17)');

        let body = document.querySelector('body');
        localStorage.setItem('body', body.style.backgroundColor = '#e3faf7');

        let footer = document.querySelector('footer');
        localStorage.setItem('footer', footer.style.backgroundImage = 'linear-gradient(to right, #060b17, #060b17)');

        let h3Footer = document.querySelector('footer h3');
        localStorage.setItem('h3Footer', h3Footer.style.color = '#f0f3f5');

    }
    else {
        themes.querySelector('#wrapper').removeAttribute('class');
        themes.querySelector('#btn-selector').removeAttribute('class');
        //themes.querySelector('#wrapper').classList.add('select-wrapper');
        //themes.querySelector('#btn-selector').classList.add('selector');

        let wrapperD = themes.querySelector('#wrapper');
        localStorage.setItem('wrapper', wrapperD.classList.add('select-wrapper'));

        let selectorD = themes.querySelector('#btn-selector');
        localStorage.setItem('btn-selector', selectorD.classList.add('selector'));

        let navD = document.querySelector('nav');
        localStorage.setItem('nav', navD.style.backgroundImage = 'linear-gradient(to right, #08a998, #3DB1C9, #1fc6b1)');

        let bodyD = document.querySelector('body');
        localStorage.setItem('body', bodyD.style.backgroundColor = '#f0f3f5');

        let footerD = document.querySelector('footer');
        localStorage.setItem('footer', footerD.style.backgroundImage = 'linear-gradient(to right, #08a998, #3DB1C9, #1fc6b1)');

        let h3FooterD = document.querySelector('footer h3');
        localStorage.setItem('h3Footer', h3FooterD.style.color = '#2f2e3a');
    }
})

