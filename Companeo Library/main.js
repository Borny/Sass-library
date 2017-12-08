///////////////////////
// CANCEL BODY SCROLL
///////////////////////
var bodyBlock = document.querySelector('body'),
    navInput = document.querySelector('.nav-input'),
    modalInput = document.querySelector('.modal-input');

navInput.addEventListener('change',function(){
    if(this.checked){
        bodyBlock.classList.add('modal-open');
    } else{
        bodyBlock.classList.remove('modal-open');        
    }
});

modalInput.addEventListener('change',function(){
    if(this.checked){
        bodyBlock.classList.add('modal-open');
    } else{
        bodyBlock.classList.remove('modal-open');        
    }
});

//////////////////////////
// INPUT LABEL ANIMATION
//////////////////////////

// Gets all the input_field elements of the page
var inputField = document.querySelectorAll('.input_field');

// Goes through the array inputField
inputField.forEach(function (e) {

    // Creates an event listener on the current input_field
    e.addEventListener('input', function (e) {
        if (this.value !== '') {
            this.parentNode.classList.add('filled');
        } else {
            this.parentNode.classList.remove('filled');
        }
    });
});

inputField.forEach(function (e) {
    if (e.value !== '') {
        e.parentNode.classList.add('filled');
    } else {
        e.parentNode.classList.remove('filled');
    }
});

//////////////////////////
// CLEAR INPUT BUTTON
//////////////////////////

var clearInput = document.querySelector('.clear-input');
var inputField = document.querySelector('.input_field');

inputField.addEventListener('focus',function(){
        if(this.focus){
            clearInput.classList.add('show-inlineBlock');
        }
});

inputField.addEventListener('blur',function(){
        if(this.focus && this.value === ""){
            clearInput.classList.remove('show-inlineBlock');
        }
});

clearInput.addEventListener('click', function (){
    inputField.value = '';
    inputField.focus();
    inputField.parentNode.classList.remove('filled');
    this.classList.remove('show-inlineBlock');
});
