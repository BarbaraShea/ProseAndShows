let movieTvData;
let bookData;
let postData;
let bookArr = [];
let posterArr = [];
let postArr = [];
let input;
let title;
let genreTag;
let contents;

// M.AutoInit();

var pageLoad = function(event) {
    document.querySelector('.search-container').addEventListener('submit', handleSearch);
};

var handleSearch = function (event) {
    bookArr = [];
    posterArr = [];
    postArr = [];
    event.preventDefault();
    input = document.getElementById('searchTerm').value.trim();
    console.log("input=", input)
    apiSearch(input);

};

function apiSearch (input){
    console.log("working");
    const movieTvApi = `https://api.themoviedb.org/3/search/multi?api_key=d91715fa647bf01938a22226b04904e3&query=${input}&page=1`

    fetch(movieTvApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
       movieTvData = data;
       console.log(movieTvData);
        renderMovieTv();
    });
    const bookApi = `https://www.googleapis.com/books/v1/volumes?q=subject:${input}`

    fetch(bookApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      bookData = data;
       console.log(bookData);
        renderBook();
    });
    const postApi = `/api/post`

    fetch(postApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      postData = data;
       console.log(postData);
        renderPost();
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
        let img = document.querySelector("#movieNum" + i);
        console.log(`https://image.tmdb.org/t/p/w500/${posterArr[i]}`)
        img.setAttribute("src", `https://image.tmdb.org/t/p/w500/${posterArr[i]}`)
    };

    $(document).ready(function(){
        $('.movie-carousel').carousel();
      });
          
}

function renderBook(){
    for (let i = 0; i < 5; i++) {

        const bookImg = bookData.items[i].volumeInfo.imageLinks.thumbnail;
        bookArr.push(bookImg);
        console.log(bookArr);
    };
    for (var i = 0; i < 5; i++) {
        let img = document.querySelector("#bookNum" + i);
        img.setAttribute("src", `${bookArr[i]}`)
    };
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.book-carousel');
        var instances = M.Carousel.init(elems, options);
      });
}

function renderPost() {
    for (let i = 0; i < 5; i++) {
        if (input == postData[i].genre_tag) {
            console.log('Yes');
            const postInfo = postData[i];
            postArr.push(postInfo);
            console.log(postArr);
        // } else {
        //     console.log('No')
        // }
        // console.log(postData[i].genre_tag, input)
    };

    for (let i = 0; i < postArr.length; i++) {
        console.log("Hi")
        title = document.getElementById("post-title-" + i);
        genreTag = document.getElementById("genre-tag-" + i);
        contents = document.getElementById("contents-" + i);

        title.innerHTML = postArr[i].title_of_work;
        contents.innerHTML=postArr[i].contents;
        genreTag.innerHTML=postArr[i].genre_tag;
}
}
}
// function renderPost(postArr) {
//     // if (input == postData[i].genre_tag) {
//         console.log(input, postData[i].genre_tag)

//         // };

//         };
//     // }
// // }

// var getMovieRecommendations = function (search) {
//     fetch(movieTvApi)
//     .then(function (response) {
//         if (response.ok) {
//             response.json().then(function (data)
//             {
//                 renderMovieTV(data, search);
//             });
//         } else {
//             alert('Error: ' + response.statusText);
//         }
//     })
//     .catch(function (error) {
//         alert('Unable to connect to connect to The Movie DB.');
//     });
// };

// // The DOM element you wish to replace with Tagify

// // initialize Tagify on the above input node reference
// new Tagify(input)



  pageLoad ();



