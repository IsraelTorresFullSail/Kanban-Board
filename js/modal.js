// Get the modal
var modal = document.querySelector('#formModal');

// Get the button that opens the modal
var btnAddT = document.querySelector('.add-todo');
var btnAddI = document.querySelector('.add-inprog');
var btnAddN = document.querySelector('.add-needrev');

// Get the <span> element that closes the modal
var close = document.querySelector('.close');

// When the user clicks the button, open the modal
btnAddT.addEventListener('click', function(){
    modal.style.display = 'block';
    document.querySelector('#listId').value = 1;
}) 

btnAddI.addEventListener('click', function(){
    modal.style.display = 'block';
    document.querySelector('#listId').value = 2;
}) 

btnAddN.addEventListener('click', function(){
    modal.style.display = 'block';
    document.querySelector('#listId').value = 3;
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