"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '1');
let lastFilm;
let lastFilmValue;

let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false,

};
for (let i = 0; i < 2; i++) {
    lastFilm = prompt('Один из последних просмотренных фильмов?', 'logan');
    if (lastFilm == "" || lastFilm == null || lastFilm.length > 50) {
        lastFilm = prompt('Один из последних просмотренных фильмов?', 'logan');
        i--;
    } else {
        lastFilmValue = prompt('На сколько оцените его?', '1');
        personalMovieDB.movies[lastFilm] = lastFilmValue;
    }  
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);
