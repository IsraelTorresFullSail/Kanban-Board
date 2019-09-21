let title = document.querySelector('#title');
let addbtn = document.querySelector('.add');

title.addEventListener('blur', function (event) {
    let target = event.target;
    let parent = target.parentElement;
    let errorMessage = '<span class="error" aria-live="polite">This field is required!</span>';

    if (!target.value.length){
        if (!parent.querySelector('.error')){
            title.insertAdjacentHTML('afterend', errorMessage);
            title.classList.add('invalid');
            addbtn.classList.add('disabled');
        }
    } else {
        parent.removeChild(parent.querySelector('.error'));
        title.removeAttribute('class');
        addbtn.removeAttribute('class');
    }
}, false);