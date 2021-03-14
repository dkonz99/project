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
let add = document.querySelector('.add');
let buttonConfirm = add.querySelector('button');
let addingInput = add.querySelector('.adding__input');
let checkboxLove = add.querySelector('[type="checkbox"]');

adv.remove();
genre.textContent = 'ДРАМА';
bg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';
movieDB.movies.sort();
for (let i = 0; i < interactiveItem.length; i++) {
    Delete[i].remove();
    interactiveItem[i].textContent = i+1 + '.' + ' ' + movieDB.movies[i];
}

function confirm(event) {
    event.preventDefault();
    if (addingInput.value != '' && addingInput.value != null) {
        movieDB.movies.push(addingInput.value.toUpperCase());
        movieDB.movies.sort();
        let newInteractiveItem = document.createElement('li');
        newInteractiveItem.classList = 'promo__interactive-item';
        interactiveList.append(newInteractiveItem);
        let newinteractiveItems = document.querySelectorAll('.promo__interactive-item');
        for (let i = 0; i < newinteractiveItems.length; i++) {
            newinteractiveItems[i].textContent = i+1 + '.' + ' ' + movieDB.movies[i];
        }
        function long() {
            newinteractiveItems.forEach((item,i) => {
                if (newinteractiveItems[i].textContent.split('').length > 24) {
                    newinteractiveItems[i].textContent = 
                    newinteractiveItems[i].textContent.split('').splice(0,24).join('') + "...";
                }
            });
        }
        long();
        function trashAddNew() {
            newinteractiveItems.forEach((item,i) => {
                let trash = document.createElement('button');
                let trashIcon = document.createElement('img');
                trashIcon.src = "icons/trash.png";
                trashIcon.width = '20';
                trashIcon.height = '20';
                trash.style.cssText = 
                "margin-left: 20px; border: none; background: transparent; width: 20px; height: 20px";
                trash.append(trashIcon);
                newinteractiveItems[i].append(trash);
                trash.addEventListener('click', (event) => {
                    event.preventDefault();
                    newinteractiveItems[i].remove();
                });
            });
        }
        trashAddNew();
        if (checkboxLove.checked) {
            console.log("Добавляем любимый фильм");
        }
    }
}
buttonConfirm.addEventListener('click', confirm);

function trashAdd() {
    interactiveItem.forEach((item,i) => {
        let trash = document.createElement('button');
        let trashIcon = document.createElement('img');
        trashIcon.src = "icons/trash.png";
        trashIcon.width = '20';
        trashIcon.height = '20';
        trash.style.cssText = 
        "margin-left: 20px; border: none; background: transparent; width: 20px; height: 20px";
        trash.append(trashIcon);
        interactiveItem[i].append(trash);
        trash.addEventListener('click', (event) => {
            event.preventDefault();
            interactiveItem[i].remove();
        });
    });
}
trashAdd();






