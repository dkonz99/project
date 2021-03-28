window.addEventListener('DOMContentLoaded', () => {
    //Табы
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = "none";
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    let deadline = '2021-03-24';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t / (1000 * 60 * 60) % 24));
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        let timer = document.querySelector(selector);
        let days = timer.querySelector('#days');
        let hours = timer.querySelector('#hours');
        let minutes = timer.querySelector('#minutes');
        let seconds = timer.querySelector('#seconds');
        let timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            let t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);

    //Modal

    let modalOpen = document.querySelectorAll('[data-modal]');
    let modalClose = document.querySelectorAll('[data-close]');
    let modal = document.querySelector('.modal');

    function modalOpenFunction() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function modalCloseFunction() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    modalOpen.forEach((item,i) => {
            modalOpen[i].addEventListener('click', modalOpenFunction);
    });
    modalClose.forEach((item,i) => {
            modalClose[i].addEventListener('click', modalCloseFunction);
    });
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == '27' && modal.style.display == 'block') {
            modalCloseFunction();
        }
    });    
    modal.addEventListener('click', (event) => {
        if (event.target == modal) {
            modalCloseFunction();
        }
    });

    let modalTimerId = setTimeout(modalOpenFunction, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalOpenFunction();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Templates for cards

    let menuField = document.querySelector('.menu__field');
    let menuFieldContainer = menuField.querySelector('.container');

    class NewMenuItem {
        constructor(src, alt, subtitle, descr, total) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.total = total;
        }

        createItem() {
            let newMenuItem = document.createElement('div');
            let newMenuImg = document.createElement('img');
            let newMenuSubtitle = document.createElement('h3');
            let newMenuDescr = document.createElement('div');
            let newMenuDivider = document.createElement('div');
            let newMenuPrice = document.createElement('div');
            let newMenuCost = document.createElement('div');
            let newMenuTotal = document.createElement('div');
            let newMenuTotalSpan = document.createElement('span');

            menuFieldContainer.style.flexWrap = 'wrap';

            newMenuItem.classList.add('menu__item');
            newMenuItem.style.marginTop = '50px';
            menuFieldContainer.append(newMenuItem);

            newMenuImg.src = this.src;
            newMenuImg.alt = this.alt;
            newMenuItem.append(newMenuImg);

            newMenuSubtitle.classList.add('menu__item-subtitle');
            newMenuSubtitle.innerHTML = this.subtitle;
            newMenuItem.append(newMenuSubtitle);

            newMenuDescr.classList.add('menu__item-descr');
            newMenuDescr.innerHTML = this.descr;
            newMenuItem.append(newMenuDescr);

            newMenuDivider.classList.add('menu__item-divider');
            newMenuItem.append(newMenuDivider);

            newMenuPrice.classList.add('menu__item-price');
            newMenuItem.append(newMenuPrice);

            newMenuCost.classList.add('menu__item-cost');
            newMenuCost.innerHTML = 'Цена:';
            newMenuPrice.append(newMenuCost);

            newMenuTotal.classList.add('menu__item-total');
            newMenuTotal.innerHTML = ' грн/день';
            newMenuPrice.append(newMenuTotal);

            newMenuTotalSpan.innerHTML = this.total;
            newMenuTotal.prepend(newMenuTotalSpan);
            
        }
    }

    new NewMenuItem('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229).createItem();
    new NewMenuItem('img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 550).createItem();
    new NewMenuItem('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 430).createItem();
    
});