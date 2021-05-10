const MovieTvApi = "https://api.themoviedb.org/3/search/keyword?api_key=d91715fa647bf01938a22226b04904e3&query=adventure&page=1"
// "https://api.themoviedb.org/3/movie/550?api_key=d91715fa647bf01938a22226b04904e3"
const fetch = require("node-fetch");
let movieTvData;
let genre;


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

// / genres: [
//     { id: 10759, name: 'Action & Adventure' },
//     { id: 16, name: 'Animation' },
//     { id: 35, name: 'Comedy' },
//     { id: 80, name: 'Crime' },
//     { id: 99, name: 'Documentary' },
//     { id: 18, name: 'Drama' },
//     { id: 10751, name: 'Family' },
//     { id: 10762, name: 'Kids' },
//     { id: 9648, name: 'Mystery' },
//     { id: 10763, name: 'News' },
//     { id: 10764, name: 'Reality' },
//     { id: 10765, name: 'Sci-Fi & Fantasy' },
//     { id: 10766, name: 'Soap' },
//     { id: 10767, name: 'Talk' },
//     { id: 10768, name: 'War & Politics' },
//     { id: 37, name: 'Western' }

// The DOM element you wish to replace with Tagify
var input = document.querySelector('input[name=basic]');

// initialize Tagify on the above input node reference
new Tagify(input)

// carousel initializer
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

