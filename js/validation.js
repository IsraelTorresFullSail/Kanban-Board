let title = document.querySelector('#title');
let addbtn = document.querySelector('.add');
let savebtn = document.querySelector('.save');

title.addEventListener('input', function(event) {
    let target = event.target;

    if (!target.value.length){
        title.setAttribute('invalid', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        title.removeAttribute('invalid');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);

title.addEventListener('blur', function (event) {
    let target = event.target;
    let parent = target.parentElement;
    let errorMessage = '<span class="error" aria-live="polite">This field is required!</span>';

    if (!target.value.length){
        if (!parent.querySelector('.error')){
            title.insertAdjacentHTML('afterend', errorMessage);
        }
        title.setAttribute('invalid', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        parent.removeChild(parent.querySelector('.error'));
        title.removeAttribute('invalid');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);