const MovieTvApi = "https://movie-database-imdb-alternative.p.rapidapi.com/?i=tt4154796&r=json"
let movieTvData;


function pageLoad (){
    fetch(MovieTvApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       movieTvData = data;
       console.log(movieTvData) 
        // renderMovieTv();
    });
};


pageLoad ();