let search = "mystery"
const movieTvApi = `https://api.themoviedb.org/3/search/multi?api_key=d91715fa647bf01938a22226b04904e3&query=${search}&page=1`
let poster;
const fetch = require("node-fetch");
let movieTvData;
let posterArr = [];
let posterURL = window.document.querySelectorAll('.carousel-item');


function pageLoad (){
    fetch(movieTvApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       movieTvData = data;
       console.log(movieTvData);
        renderMovieTv();
    });

};

function renderMovieTv(){

    for (let i = 0; i < 10; i++) {
        poster = movieTvData.results[i].poster_path;
        const movie = movieTvData.results[i].poster_path;
        posterArr.push(movie);
        console.log(posterURL);
    }

    // posterURL.textContent = `https://image.tmdb.org/t/p/w500/${posterArr[1]}`

}


// // The DOM element you wish to replace with Tagify
// var input = document.querySelector('input[name=basic]');

// // initialize Tagify on the above input node reference
// new Tagify(input)

// // carousel initializer
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

  pageLoad ();
