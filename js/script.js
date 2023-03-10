import movies from "./db.js";

let ul = document.querySelector(".promo__interactive-list");
let promo__bg = document.querySelector(".promo__bg");
let promo__genre = document.querySelector(".promo__genre");
let promo__title = document.querySelector(".promo__title");
let promo__descr = document.querySelector(".promo__descr");
let imdb = document.querySelector(".imdb");
let reyting = document.querySelector(".reyting");
let inpSearch = document.querySelector("#search");
let btnSearch = document.querySelector(".header__search form p");
let promo__adv = document.querySelectorAll(".promo__adv img");
let active = document.querySelector('.promo__menu-item_active')

let allFilm = document.querySelector("#All-film");
let Adventure = document.querySelector("#Adventure");
let Scifi = document.querySelector("#Sci-Fi");
let Fantasy = document.querySelector('#Fantasy')
let Drama = document.querySelector("#Drama");
let Action = document.querySelector("#Action");
let Horor = document.querySelector("#Horor");
let Comedy = document.querySelector('#Comedy')


promo__adv.forEach((item) => {
  item.remove();
});

btnSearch.onclick = () => {
  let key = inpSearch.value.toLowerCase().trim();
  let filtered = movies.filter((item) => {
    let title = item.Title.toLowerCase();
    if (title.includes(key)) {
      return item;
    }
  });

  reload(filtered);
};

function reload(arr) {
  arr = arr.sort((a, b) => (a.Title < b.Title ? -1 : 1));
  ul.innerHTML = "";

  setMovie(arr[0]);

  for (let item of arr) {
    let li = document.createElement("li");
    let del = document.createElement("div");

    del.classList.add("delete");
    li.classList.add("promo__interactive-item");

    li.innerHTML = `${arr.indexOf(item) + 1}. ${item.Title}`;

    li.append(del);
    ul.append(li);

    li.onclick = () => {
      setMovie(item);
    };
  }
}
allFilm.onclick = () => {
  reload(movies, ul);
};



Adventure.onclick = () => {
    let GenreAdv = movies.filter(item => {
        if (item.Genre === 'Adventure') {
            return item
        }
    })
    reload(GenreAdv, movies)
}

Scifi.onclick = () => {
    let GenreSci = movies.filter(item => {
      if (item.Genre === 'Sci-Fi') {
          return item
      }
    })
    reload(GenreSci, movies)
  }

Drama.onclick = () => {
    let GenreDrama = movies.filter(item => {
        if (item.Genre === 'Drama') {
            return item
        }
    })
    reload(GenreDrama, movies)
}
Fantasy.onclick = () => {
    let GenreFan = movies.filter(item => {
        if (item.Genre === 'Fantasy') {
            return item
        }
    })
    reload(GenreFan, movies)
}

Action.onclick = () => {
    let GenreAction = movies.filter(item => {
        if (item.Genre === 'Action') {
            return item
        }
    })
    reload(GenreAction, movies)
}
Horor.onclick = () => {
    let GenreHoror = movies.filter(item => {
        if (item.Genre === 'Horor') {
            return item
        }
    })
    reload(GenreHoror, movies)
}

Horor.onclick = () => {
    let GenreHoror = movies.filter(item => {
        if (item.Genre === 'Horor') {
            return item
        }
    })
    reload(GenreHoror, movies)
}

Comedy.onclick = () => {
    
    let GenrerComedy = movies.filter(item => {
        if (item.Genre === 'Comedy') {
            return item
        }
    })
    reload(GenrerComedy, movies)
}
  
  
  
  

function setMovie(movie) {
  promo__bg.style.background = `url(${movie.Poster})`;
  promo__genre.innerHTML = movie.Genre;
  promo__title.innerHTML = movie.Title;
  promo__descr.innerHTML = movie.Plot;
  imdb.innerHTML = "IMDb: " + movie.imdbRating;
  reyting.innerHTML = "Metascore: " + movie.Metascore;
}

reload(movies, ul);
