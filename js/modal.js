// Get the modal
let modal = document.querySelector('#formModal');

// Get button add
let add = document.querySelector('.add');

// Get button save
let save = document.querySelector('.save');

// Get the button that opens the modal
let btnAddT = document.querySelector('.add-todo');
let btnAddI = document.querySelector('.add-inprog');
let btnAddN = document.querySelector('.add-needrev');

// Get the <span> element that closes the modal
let close = document.querySelector('.close');

// When the user clicks the button, open the modal
btnAddT.addEventListener('click', function(){
    modal.style.display = 'block';
    document.querySelector('#listId').value = 1;
    save.style.display = 'none';
}) 

btnAddI.addEventListener('click', function(){
    modal.style.display = 'block';
    document.querySelector('#listId').value = 2;
    save.style.display = 'none';
}) 

btnAddN.addEventListener('click', function(){
    modal.style.display = 'block';
    document.querySelector('#listId').value = 3;
    save.style.display = 'none';
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