
let search = "mystery"
const movieTvApi = `https://api.themoviedb.org/3/search/multi?api_key=d91715fa647bf01938a22226b04904e3&query=${search}&page=1`
let poster;
let movieTvData;
let posterArr = [];


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

    for (let i = 0; i < 5; i++) {
        poster = movieTvData.results[i].poster_path;
        const movie = movieTvData.results[i].poster_path;
        posterArr.push(movie);
        console.log(posterArr);
    };

    for (var i = 0; i < 5; i++) {
        console.log(document);
        let img = document.querySelector("#num" + i);
        console.log(`https://image.tmdb.org/t/p/w500/${posterArr[i]}`)
        img.setAttribute("src", `https://image.tmdb.org/t/p/w500/${posterArr[i]}`)
    };

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, options);
      });
          

}


// // // The DOM element you wish to replace with Tagify
// // var input = document.querySelector('input[name=basic]');

// // // initialize Tagify on the above input node reference
// // new Tagify(input)

// carousel initializer


  pageLoad ();
