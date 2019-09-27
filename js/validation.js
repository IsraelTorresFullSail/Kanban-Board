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
    let form = document.querySelector('#postData');

    if (!target.value.length){
        if (!form.querySelector('.error1')){
            form.querySelector('span:nth-of-type(1)').setAttribute('class', 'error1');
        }
        title.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        form.querySelector('span:nth-of-type(1)').removeAttribute('class');
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
    let form = document.querySelector('#postData');

    if (!target.value.length){
        if (!form.querySelector('.error2')){
            form.querySelector('span:nth-of-type(2)').setAttribute('class', 'error2');
        }
        desc.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        form.querySelector('span:nth-of-type(2)').removeAttribute('class');
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
    let form = document.querySelector('#postData');

    if (!target.value.length){
        if (!form.querySelector('.error3')){
            form.querySelector('span:nth-of-type(3)').setAttribute('class', 'error3');
        }
        dueDate.setAttribute('required', '');
        addbtn.setAttribute('disabled', '');
        savebtn.setAttribute('disabled', '');
    } else {
        form.querySelector('span:nth-of-type(3)').removeAttribute('class');
        dueDate.removeAttribute('required');
        addbtn.removeAttribute('disabled');
        savebtn.removeAttribute('disabled');
    }
}, false);