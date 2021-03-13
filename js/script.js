/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let adv = document.querySelector('.promo__adv');
let genre = document.querySelector('.promo__genre');
let bg = document.querySelector('.promo__bg');
let interactiveList = document.querySelector('.promo__interactive-list');
let interactiveItem = document.querySelectorAll('.promo__interactive-item');
let Delete = document.querySelectorAll('.delete');

adv.remove();

genre.textContent = 'ДРАМА';

bg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';

movieDB.movies.sort();
for (let i = 0; i < interactiveItem.length; i++) {
    Delete[i].remove();
    interactiveItem[i].textContent = i+1 + '.' + ' ' + movieDB.movies[i];
}


