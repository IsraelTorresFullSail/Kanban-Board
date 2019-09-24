let title = document.querySelector('#title');
let desc = document.querySelector('#description');
let dueDate = document.querySelector('#dueDate');
let addbtn = document.querySelector('.add');
let savebtn = document.querySelector('.save');

title.addEventListener('input', function(event) {
    let target = event.target;

    if (!target.value.length){
        title.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        title.removeAttribute('required');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);

title.addEventListener('blur', function (event) {
    let target = event.target;
    let parent = target.parentElement;
    let errorMessage = '<span class="error" aria-live="polite">Fill out the required fields!</span>';

    if (!target.value.length){
        if (!parent.querySelector('.error')){
            title.insertAdjacentHTML('afterend', errorMessage);
        }
        title.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        parent.removeChild(parent.querySelector('.error'));
        title.removeAttribute('required');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);

desc.addEventListener('input', function(event) {
    let target = event.target;

    if (!target.value.length){
        desc.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        desc.removeAttribute('required');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);

desc.addEventListener('blur', function (event) {
    let target = event.target;
    let parent = target.parentElement;
    let errorMessage = '<span class="error" aria-live="polite">Fill out the required fields!</span>';

    if (!target.value.length){
        if (!parent.querySelector('.error')){
            desc.insertAdjacentHTML('afterend', errorMessage);
        }
        desc.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        parent.removeChild(parent.querySelector('.error'));
        desc.removeAttribute('required');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);

dueDate.addEventListener('input', function(event) {
    let target = event.target;

    if (!target.value.length){
        dueDate.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        dueDate.removeAttribute('required');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);

dueDate.addEventListener('blur', function (event) {
    let target = event.target;
    let parent = target.parentElement;
    let errorMessage = '<span class="error" aria-live="polite">Fill out the required fields!</span>';

    if (!target.value.length){
        if (!parent.querySelector('.error')){
            dueDate.insertAdjacentHTML('afterend', errorMessage);
        }
        dueDate.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        parent.removeChild(parent.querySelector('.error'));
        dueDate.removeAttribute('required');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);