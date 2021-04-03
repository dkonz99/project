window.addEventListener('DOMContentLoaded', () => {
    //Табы
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
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
    let modal = document.querySelector('.modal');

    function modalOpenFunction() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function modalCloseFunction() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    modalOpen.forEach((item,i) => {
            modalOpen[i].addEventListener('click', modalOpenFunction);
    });
    document.addEventListener('keydown', (event) => {
        if (event.keyCode == '27' && modal.classList.contains('show')) {
            modalCloseFunction();
        }
    });    
    modal.addEventListener('click', (event) => {
        if (event.target == modal || event.target.getAttribute('data-close') == '') {
            modalCloseFunction();
        }
    });

    let modalTimerId = setTimeout(modalOpenFunction, 50000);

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
        constructor(src, alt, subtitle, descr, total, ...classes) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.total = total;
            this.classes = classes;
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
    
    //Forms

    let forms = document.querySelectorAll('form');

    let message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    });

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display:block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            let formData = new FormData(form);

            let object = {};
            formData.forEach(function(value, key) {
                object[key] = value;
            });

            fetch('server.php', {
                method:"POST",
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify(object)
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            })
        });
    }

    function showThanksModal(message) {
        let prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        prevModalDialog.classList.remove('show');
        modalOpenFunction();

        let thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                modalCloseFunction();
        }, 4000);
    }

});