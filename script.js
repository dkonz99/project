let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '1');

let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

};

let lastFilm = prompt('Один из последних просмотренных фильмов?', 'logan');
let lastFilmValue = prompt('На сколько оцените его?', '1');
let lastFilm2 = prompt('Один из последних просмотренных фильмов?', 'logan2');
let lastFilmValue2 = prompt('На сколько оцените его?', '2');

personalMovieDB.movies[lastFilm] = lastFilmValue;
personalMovieDB.movies[lastFilm2] = lastFilmValue2;

console.log(personalMovieDB);
