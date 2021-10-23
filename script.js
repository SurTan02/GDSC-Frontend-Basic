fetch('movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });

function appendData(data){
    var mainContainer = document.getElementById("movieList");
    
    for (var i = 0; i<data.length; i++){
        //Dipslaying list of the movie 
        var el= document.createElement("div");
        var text = document.createElement('h2');
        text.innerHTML='<img  src="'+data[i].image+'"class=imgMovie>' + data[i].title + "(" + data[i].year +")" ;       
        
        el.className = "movie";
        el.appendChild(text);    
        mainContainer.appendChild(el);
        

        
    }
}


