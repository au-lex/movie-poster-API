const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

    const movieContainer = document.querySelector(".container");

 function Movies(url) {
    axios.get(url)
    .then(result => {
        let data =result.data;
        showMovie(data)
    })
    
 }

    Movies(APIURL);

    const showMovie = (data => {
        movieContainer.innerHTML ="";
        data.results.forEach(result => {
            const imagePath =IMGPATH + result.poster_path;

            const box = document.createElement("section");
            box.classList.add("movies-container");

            box.innerHTML = `
            <div class="movies-img " >
                     <img src="${imagePath}" alt="">
                 </div>
                     <div class="overlay">
                         <h2 class="tittle"${result.original_title} </h2>
                         <span class="rate">${result.vote_average} </span>
                         <h3 class="sub-title">overview:</h3>
                         <p class="text-desc">
                         ${result.overview}
                         </p>
                     </div>

            `
            movieContainer.appendChild(box)

        });  
    })


    // search-section

    document.querySelector(".seaechBox").addEventListener("keyup", function (event) {
        if (event.target.value !== "") {
            Movies(SEARCHAPI + event.target.value)

        }else {
            Movies(APIURL)
        }
    })