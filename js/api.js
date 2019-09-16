// API url
const base = 'https://truthful-tapir.glitch.me/api/';
const accessToken = '?accessToken=5b1064585f4ab8706d275f90';

const urlAPI = `${base}lists${accessToken}`;

// Methods
const option = {
    method: 'GET'
}

// ------------------------ GET data from API using fetch ------------------------ //
fetch(urlAPI, option)
    .then( response => {
        if(response.ok) {
            return response.json();
        } else {
            throw response;
        }
    })
    .then( data => {
        console.log(data);
        const todoList = document.querySelector('#todoList');
        const inProgressList = document.querySelector('#inProgressList');
        const needReviewList = document.querySelector('#needReviewList');

        let contentToDo = '';
        let contentInProgess = '';
        let contentNeedReview = '';

        for (let i = 0; i < data[0].items.length; i++) {
            contentToDo += '<div class="taskT getId" data-id=' + data[0].items[i].id + '>';
                contentToDo += '<h3>' + data[0].items[i].title + '</h3>';
                contentToDo += '<p>' + data[0].items[i].description + '</p>';
                contentToDo += '<div class="date">';
                    contentToDo += '<button class="btn-edit" onClick=btnEdit()>Edit</button>';
                    contentToDo += '<button class="btn-delete" onClick=deleteData()>Delete</button>';
                    contentToDo += '<img src="./images/calendar.png" alt="calendar">';
                    contentToDo += '<time datetime="MM-dd-yyyy">' + data[0].items[i].dueDate + '</time>';
                contentToDo += '</div>';
            contentToDo += '</div>';
        }
        for (let i = 0; i < data[1].items.length; i++) {
            contentInProgess += '<div class="taskI getId" data-id=' + data[1].items[i].id + '>';
                contentInProgess += '<h3>' + data[1].items[i].title + '</h3>';
                contentInProgess += '<p>' + data[1].items[i].description + '</p>';
                contentInProgess += '<div class="date">';
                    contentInProgess += '<button class="btn-edit" onClick=btnEdit()>Edit</button>';
                    contentInProgess += '<button class="btn-delete" onClick=deleteData()>Delete</button>';
                    contentInProgess += '<img src="./images/calendar.png" alt="calendar">';
                    contentInProgess += '<time datetime="MM-dd-yyyy">' + data[1].items[i].dueDate + '</time>';
                contentInProgess += '</div>';
            contentInProgess += '</div>';
        }
        for (let i = 0; i < data[2].items.length; i++) {
            contentNeedReview += '<div class="taskN getId" data-id=' + data[2].items[i].id + '>';
                contentNeedReview += '<h3>' + data[2].items[i].title + '</h3>';
                contentNeedReview += '<p>' + data[2].items[i].description + '</p>';
                contentNeedReview += '<div class="date">';
                    contentNeedReview += '<button class="btn-edit" onClick=btnEdit()>Edit</button>';
                    contentNeedReview += '<button class="btn-delete" onClick=deleteData()>Delete</button>';
                    contentNeedReview += '<img src="./images/calendar.png" alt="calendar">';
                    contentNeedReview += '<time datetime="MM-dd-yyyy">' + data[2].items[i].dueDate + '</time>';
                contentNeedReview += '</div>';
            contentNeedReview += '</div>';
        }
        
        todoList.querySelector('.cardTop').insertAdjacentHTML('afterend', contentToDo);
        inProgressList.querySelector('.cardTop').insertAdjacentHTML('afterend', contentInProgess);
        needReviewList.querySelector('.cardTop').insertAdjacentHTML('afterend', contentNeedReview);
    })
    .catch( err => {
        console.log(err);
    })

// ------------------------ POST data to API using feth ------------------------ //
    function postData(event) {
        event.preventDefault();

        const urlAPIPost = `${base}items${accessToken}`;

        let form = document.querySelector('#postData');
        let listId = form.querySelector('#listId').value;
        let title = form.querySelector('#title').value;
        let description = form.querySelector('#description').value;
        let dueDate = form.querySelector('#dueDate').value;

        const dataToSendToServer = {
            title: title,
            description: description,
            dueDate: dueDate,
            listId: listId,
        }
        const config = {
            method: 'POST',
            body: JSON.stringify(dataToSendToServer),
            headers: {
                'content-type': 'application/json'
            }
        }
        
        fetch(urlAPIPost, config)
            .then( response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then( responseAsJson => {
                console.log(responseAsJson);
            })
            .catch( err => {
                console.log(err);
            })

        // Reset Form
        document.querySelector('#postData').reset();
    }

    // Add Evet Listener to button Add
    let postD = document.querySelector('.add');
    postD.addEventListener('click', postData);

// ------------------------ PUT data on API using feth ------------------------ //
    function btnEdit(){
        modal.style.display = 'block';
        add.style.display = 'none';
        save.style.display = 'block';
    }
    function putData() {

        let task = document.querySelector('.getId');
        let id = task.getAttribute('data-id');

        const urlAPIPut = `${base}items/${id}${accessToken}`;

        let form = document.querySelector('#postData');
        let listId = form.querySelector('#listId').value;
        let title = form.querySelector('#title').value;
        let description = form.querySelector('#description').value;
        let dueDate = form.querySelector('#dueDate').value;

        const dataToPutOnServer = {
            title: title,
            description: description,
            dueDate: dueDate,
            listId: listId,
        }

        const configPut = {
            method: 'PUT',
            body: JSON.stringify(dataToPutOnServer),
            headers: {
                'content-Type': 'application/json'
            }
        }

        fetch(urlAPIPut, configPut)
            .then( response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then( resp => {
                console.log(resp);
            })
            .catch( err => {
                console.log(err);
            })

        // Reset Form
        document.querySelector('#postData').reset();
    }

    // Add Evet Listener to button Save
    let putD= document.querySelector('.save');
    putD.addEventListener('click', putData);

// ------------------------ DELETE data from API using feth ------------------------ //
    function deleteData() {

        let task = document.querySelector('.getId');
        let id = task.getAttribute('data-id');

        const urlAPIDelete = `${base}items/${id}${accessToken}`;

        const configDelete = {
            method: 'DELETE',
            headers: {
                'content-Type': 'application/json'
            }
        }

        fetch(urlAPIDelete, configDelete)
            .then( response => {
                if(response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then( res => {
                console.log(res);
            })
            .catch( err => {
                console.log(err);
            })
    }