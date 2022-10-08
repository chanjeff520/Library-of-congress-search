
//https://www.loc.gov/'

let query = document.location.search;
var info = [];      //for input and format
var LibOfCongressLink = 'https://www.loc.gov/' /* + info[]*/;

var splitQuery = query.split('&')
for(var i = 0; i < splitQuery.length ; i++){
    info.push(splitQuery[i].split("=")[1]);
    console.log(info)
}


function getApi(){
    fetch('https://www.loc.gov/maps/?q=civil war&fo=json')
    .then( function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then(function(data){
        console.log(data);
    });
}

getApi();