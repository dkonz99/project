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
});