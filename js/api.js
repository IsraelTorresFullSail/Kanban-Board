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
        let htmlContent = ``;

        for(const list of data) {
            htmlContent += `
            <div class="task-list" data-id="${list.id}">
                <div class="cardTop">
                    <h2>${list.title}</h2>
                    <button class="add-todo" id="${list.id}">Add task</button>
                </div>
            `
            list.items.forEach(item => {
                htmlContent += `
                    <div class="task">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="date">
                            <button class="btn-edit" id="${item.id}">Edit</button>
                            <button class="btn-delete" id="${item.id}">Delete</button>
                            <img src="./images/calendar.png" alt="calendar">
                            <time datetime="${item.dueDate}">${item.dueDate}</time>
                        </div>
                    </div>
                `
            })
            htmlContent += `
                </div>
            `
        }
        document.querySelector('.mainbox').innerHTML = htmlContent;
    })
    .catch( err => {
        console.log(err);
    })

// ------------------------ Modal Form ------------------------ //
// Get the modal
let modal = document.querySelector('#formModal');

// Get button add
let add = document.querySelector('.add');

// Get button save
let save = document.querySelector('.save');

// Get the <span> element that closes the modal
let close = document.querySelector('.close');

// When the user clicks the button, open the modal
document.querySelector('.mainbox').addEventListener('click', function(e) {
    if(e.target.classList.contains('add-todo')) {

        modal.style.display = 'block';
        
        if(e.target.id == 1) {
            document.querySelector('#listId').value = 1;
        }
        else if(e.target.id == 2) {
            document.querySelector('#listId').value = 2;
        }
        else if(e.target.id == 3) {
            document.querySelector('#listId').value = 3;
        }

        save.style.display = 'none';
    }
})

// When the user clicks on button close, close the modal
close.addEventListener('click', function(){
    modal.style.display = 'none';
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
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
// When the user clicks the edit button, open the modal
let editID = 0;
document.querySelector('.mainbox').addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-edit')) {
        modal.style.display = 'block';
        add.style.display = 'none';
        save.style.display = 'block';
        editID = e.target.id;
    }
})
function putData() {

    let id = editID;

    const urlAPIPut = `${base}items/${id}${accessToken}`;

    let form = document.querySelector('#postData');
    let title = form.querySelector('#title').value;
    let description = form.querySelector('#description').value;
    let dueDate = form.querySelector('#dueDate').value;

    const dataToPutOnServer = {
        title: title,
        description: description,
        dueDate: dueDate,
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
document.querySelector('.mainbox').addEventListener('click', function(e) {
    if(e.target.classList.contains('btn-delete')) {

        let id = e.target.id;

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
})