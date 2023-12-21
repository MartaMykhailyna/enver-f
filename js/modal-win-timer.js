document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal-window');

    // Відображення модального вікна при завантаженні сторінки
    modal.style.display = 'block';
    container.classList.add("blur");


    // Прикріплюємо обробник подій до кнопки закриття
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', function () {
        // Закриваємо модальне вікно
        modal.style.display = 'none';
        container.classList.remove("blur");
    });

    // Прикріплюємо обробник подій до об'єкта document
    document.addEventListener('click', function (event) {
        // Перевіряємо, чи клік відбувся поза модальним вікном та його дочірніми елементами
        if (!isDescendant(modal, event.target)) {
            // Закриваємо модальне вікно
            modal.style.display = 'none';
        container.classList.remove("blur");

        }
    });

    // Додавання обробника подій для самого модального вікна
    modal.addEventListener('click', function () {
        // Закриваємо модальне вікно
        modal.style.display = 'none';
        container.classList.remove("blur");

    });
});

// Функція для перевірки, чи елемент є нащадком іншого елемента
function isDescendant(parent, child) {
    let node = child.parentNode;

    while (node !== null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }

    return false;
}




////////////////////////////////////////////////////////////////////////
    const nextYearContainer = document.querySelector('#year');
    const daysContainer = document.querySelector('#days');
    const hoursContainer = document.querySelector('#hours');
    const minutesContainer = document.querySelector('#minutes');
    const secondsContainer = document.querySelector('#seconds');

    const date = new Date();
    const currentYear = date.getFullYear();
    const nextYear = currentYear + 1;

    const newYearTime = new Date(`${nextYear}-01-01T00:00:00`);
    // nextYearContainer.textContent = nextYear;

    function formatTimeValue(time) {
        return time < 10 ? '0' + time : time;
    }

    function insertCountdownValues({ days, hours, minutes, seconds }) {
        daysContainer.textContent = formatTimeValue(days);
        hoursContainer.textContent = formatTimeValue(hours);
        minutesContainer.textContent = formatTimeValue(minutes);
        secondsContainer.textContent = formatTimeValue(seconds);
    }

    function updateCountdown() {
        const currentTime = new Date();
        const difference = newYearTime - currentTime;

        const days = Math.floor(difference / 1000 / 60 / 60 / 24);
        const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
        const minutes = Math.floor(difference / 1000 / 60) % 60;
        const seconds = Math.floor(difference / 1000) % 60;

        insertCountdownValues({ days, hours, minutes, seconds });
    }

    setInterval(() => updateCountdown(), 1000);