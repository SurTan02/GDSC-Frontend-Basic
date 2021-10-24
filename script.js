fetch('movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        main(data);
   
    })
    .catch(function (err) {
        console.log(err);
    });
/*
function appendData(data){
    var mainContainer = document.getElementById("movieList");
    
    for (var i = 0; i<data.length; i++){
        //Dipslaying list of the movie 
        var el= document.createElement("div");
        var text = document.createElement("button");
        var modalText = document.createElement('p');

        text.id="myClick";
        modalText.id ="ModalContent";
        tes();

        text.innerHTML='<img  src="'+data[i].image+'"class=imgMovie>' + '<h2>'+ data[i].title + "(" + data[i].year +")" + '</h2>';      
        modalText.innerHTML = "Movie Description: " + data[i].desc;


        text.appendChild(modalText)
        el.className = "movie";
        el.appendChild(text);    
        mainContainer.appendChild(el);
        


    }
}




//Onclick 
var inisial = document.getElementById("inisial");
function tes(){
    window.onclick = function(){
        inisial.style.color = "red";
        var modal = document.getElementById("ModalContent");
        var ops  = document.getElementById('myClick');
        var span  = document.getElementsByClassName("close")[0];
    
        //open the modal
        ops.onclick = function(){
            modal.style.display="block";
        }
    
        //close the modal
        
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
    
    }
}
*/



function main(data){
    
    for (var i= 0; i<data.length; i++){
        let index=i;
        inputMovie(data,index);
        
        const allMovieImg = document.querySelectorAll('.imgMovie');
        allMovieImg.forEach(movie => {
            movie.addEventListener('click',()=>{
                const movieParent = movie.parentElement;
                const modal = movieParent.querySelector('.modal');
                console.log(modal);
                const open  = movie.querySelector('.imgMovie');
                modal.style.display="block";
            })

            const close  = movie.parentElement.querySelector(".close");   
            close.addEventListener('click',(e)=>{
                const modal = close.parentElement.parentElement;
                modal.style.display="none";
            })
        });

        
    
    }
    searchMovie(data);
}

function inputMovie(data,index){
    //parent = movielist
    var mainContainer = document.getElementById("movieList");
    
    var divModal = document.createElement("div");

    let movieProperty;

    movieProperty = "<div class = 'movie'>" + 
                        "<img src=' " + data[index].image + " 'class = 'imgMovie'>" +
                        "<h2>" + data[index].title + " (" + data[index].year +")" + "</h2>" +
                    
                        
                        "<div class='modal'>"+
                            "<div class='ModalContent'>"+
                                
                                "<img src=' " + data[index].image + " 'class = 'imgMovie'>" +
                                "<div class = 'movie-desc'>" +
                                    "<h2>" + data[index].title + " (" + data[index].year +")" + "</h2>" +
                                    "<p class='rating'> Rating : " + data[index].rating + "</p>" +
                                    "<p>" + data[index].desc + "</p>" +
                                "</div>" +     
                                "<span class = 'close'>&times;</span> "+
                            "</div>" +
                        "</div>" +     
                    "</div>";

    mainContainer.innerHTML+= (movieProperty);
}

//return newData
function searchMovie(){
    var input = document.querySelector(".searchbar");
    var filter = input.value.toLowerCase(); 
    console.log(filter);
    const movies = document.querySelectorAll('.movie');
    console.log(movies);

    for (var i=0; i<movies.length; i++){
        const movieTitle = movies[i].getElementsByTagName('h2')[0];
            txtValue = movieTitle.textContent || movieTitle.innerHTML;
            console.log(txtValue);
            if(txtValue.toLowerCase().indexOf(filter)>-1){
                movies[i].style.display="";
            }
            else{
                movies[i].style.display="none";
            }
    }

    // movies.forEach(movie => {
    //     input.addEventListener('keyup',()=>{
    //         const movieTitle = movie.getElementsByTagName('h2')[0];
    //         txtValue = movieTitle.textContent || movieTitle.innerHTML;
    //         console.log(txtValue);
    //         if(txtValue.toLowerCase().indexOf(filter)>-1){
    //             movies.style.visibility="";
    //         }
    //         else{
    //             movies.style.visibility="hidden";
    //         }
    //     })
    // })

}


    



