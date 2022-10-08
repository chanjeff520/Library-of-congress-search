// Get user input from text and select box

// Send user input to second page using document.location.search

var submitButtonElement = document.getElementById("submitButton");
var textInput = document.getElementById('searchText');
var formatInput = document.getElementById('formatSelector');

submitButtonElement.addEventListener('click', function (event){
    if( (formatInput.value != 'Select a format...') && textInput.value ){
        console.log(textInput.value)
        console.log('testing this!');
        document.location = "./second.html?textInput=" + textInput.value.trim() + '&format=' + formatInput.value;
    }
})