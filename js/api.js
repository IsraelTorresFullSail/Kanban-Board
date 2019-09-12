// API url
const urlAPI = 'https://volcano-rosemary.glitch.me/api/lists?accessToken=5b1064585f4ab8706d275f90';

// Methods
const option = {
    method: 'GET'
}

// Fetching the API data
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

        for (let i = 0; i < data.length; i++) {
            
            contentToDo += '<div class="taskT">';
                contentToDo += '<h3>' + data[0].items[i].title + '</h3>';
                contentToDo += '<p>' + data[0].items[i].description + '</p>';
                contentToDo += '<div class="date">';
                    contentToDo += '<button>Edit</button>';
                    contentToDo += '<button>Delete</button>';
                    contentToDo += '<img src="./images/calendar.png" alt="calendar">';
                    contentToDo += '<time datetime="2019-09-07">' + data[0].items[i].dueDate + '</time>';
                contentToDo += '</div>';
            contentToDo += '</div>';

            contentInProgess += '<div class="taskI">';
                contentInProgess += '<h3>' + data[1].items[i].title + '</h3>';
                contentInProgess += '<p>' + data[1].items[i].description + '</p>';
                contentInProgess += '<div class="date">';
                    contentInProgess += '<button>Edit</button>';
                    contentInProgess += '<button>Delete</button>';
                    contentInProgess += '<img src="./images/calendar.png" alt="calendar">';
                    contentInProgess += '<time datetime="2019-09-07">' + data[1].items[i].dueDate + '</time>';
                contentInProgess += '</div>';
            contentInProgess += '</div>';

            contentNeedReview += '<div class="taskN">';
                contentNeedReview += '<h3>' + data[2].items[i].title + '</h3>';
                contentNeedReview += '<p>' + data[2].items[i].description + '</p>';
                contentNeedReview += '<div class="date">';
                    contentNeedReview += '<button>Edit</button>';
                    contentNeedReview += '<button>Delete</button>';
                    contentNeedReview += '<img src="./images/calendar.png" alt="calendar">';
                    contentNeedReview += '<time datetime="2019-09-07">' + data[2].items[i].dueDate + '</time>';
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