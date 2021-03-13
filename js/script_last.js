"use strict";

// let personalMovieDB = {
//     count:0,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false,
//     start: function() {
//         personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '1');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '1');
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {

//             let lastFilm = prompt('Один из последних просмотренных фильмов?', 'logan');
//             let lastFilmValue = prompt('На сколько оцените его?', '1');
        
//             if (lastFilm != null && lastFilmValue != null && lastFilm != '' && lastFilmValue != '' && lastFilm.length < 50) {
//                 personalMovieDB.movies[lastFilm] = lastFilmValue;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             alert("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//             alert("Вы классический зритель");
//         } else if (personalMovieDB.count > 30) {
//             alert("Вы киноман");
//         } else {
//             alert("Произошла ошибка");
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//             while (personalMovieDB.genres[i-1] == '' || personalMovieDB.genres[i-1] == null) {
//                 personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
//             }
//         }
//         personalMovieDB.genres.forEach(function(item,i,arr) {
//             console.log(`Любимый жанр ${i+1} - это ${item}`);
//         });
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat === false) {
//             personalMovieDB.privat = true;
//         } else {
//             personalMovieDB.privat = false;
//         }
//     },

// };

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

