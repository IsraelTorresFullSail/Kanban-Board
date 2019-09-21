// Set values on local storage
localStorage.setItem('bar-light', 'linear-gradient(to right, #08a998, #3DB1C9, #1fc6b1)');
localStorage.setItem('body-light', '#f0f3f5');
localStorage.setItem('black', '#2f2e3a');

localStorage.setItem('bar-dark', 'linear-gradient(to right, #060b17, #060b17)');
localStorage.setItem('body-dark', '#e3faf7');
localStorage.setItem('white', '#f0f3f5');

// Get button selector
let selector = document.querySelector('.selector');

// Add event listener to button selector
selector.addEventListener('click', function(){
    let themes = document.querySelector('.themes');
    if(!themes.querySelector('.select-wrapper-dark') && !themes.querySelector('.selector-dark')){
        themes.querySelector('#wrapper').classList.add('select-wrapper-dark');
        themes.querySelector('#btn-selector').classList.add('selector-dark');

        document.querySelector('nav').style.backgroundImage = localStorage.getItem('bar-dark');
        document.querySelector('body').style.backgroundColor = localStorage.getItem('body-dark');
        document.querySelector('footer').style.backgroundImage = localStorage.getItem('bar-dark');
        document.querySelector('footer h3').style.color = localStorage.getItem('white');

    }
    else {
        themes.querySelector('#wrapper').removeAttribute('class');
        themes.querySelector('#btn-selector').removeAttribute('class');
        themes.querySelector('#wrapper').classList.add('select-wrapper');
        themes.querySelector('#btn-selector').classList.add('selector');

        document.querySelector('nav').style.backgroundImage = localStorage.getItem('bar-light');
        document.querySelector('body').style.backgroundColor = localStorage.getItem('body-light');
        document.querySelector('footer').style.backgroundImage = localStorage.getItem('bar-light');
        document.querySelector('footer h3').style.color = localStorage.getItem('black');
    }
})

