
//https://www.loc.gov/'

let query = document.location.search;


function getApi(){
    var info = []
        var splitQuery = query.split('&')
        for(var i = 0; i < splitQuery.length ; i++){
    
            info.push(splitQuery[i].split("=")[1]);
            console.log(info)
        }
        var LibOfCongressLink = 'https://www.loc.gov/'+info[1]+"/?q="+info[0]+"&fo=json"
        console.log(LibOfCongressLink)
    fetch(LibOfCongressLink)
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