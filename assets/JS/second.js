var resultsEL = document.getElementById('results');
var goBackButton = document.getElementById("go-back")

goBackButton.addEventListener("click", function(){
    document.location = "./index.html"
})

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
         for (var i = 0; i < 10 ; i++) {
            var inputTitle = document.createElement("h3");
            var inputDescription = document.createElement('p');
            var inputDate = document.createElement("p")
            var containerDiv = document.createElement("div");
            var infoButton = document.createElement("a")
            var buttonURL = data.results[i].url

            infoButton.addEventListener("click", function(){
                //document.location = data.results[i].url
                console.log(buttonURL)
            })

            containerDiv.setAttribute("class", "row bg-warning m-3");

            
            inputTitle.textContent = data.results[i].title;
            inputDate.textContent = data.results[i].date;
            inputDescription.textContent = data.results[i].description;
            infoButton.textContent = "Read More"
            infoButton.setAttribute("href", data.results[i].url)
            
            console.log(inputDescription);
            
            containerDiv.appendChild(inputTitle);
            containerDiv.appendChild(inputDate);
            containerDiv.appendChild(inputDescription);
            containerDiv.appendChild(infoButton)

            resultsEL.appendChild(containerDiv)

            

            
   
         };
         
        

        console.log(data);

        
    });

}

getApi();