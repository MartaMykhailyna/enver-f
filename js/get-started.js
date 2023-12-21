document.addEventListener('DOMContentLoaded', function () {
const requestURL = './js/get-started.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const data = request.response;
    showContent(data);
    console.log(data); // Виведення вмісту JSON-файлу в консоль

};

function showContent(data) {
    // Отримання елементів DOM
    const titleElement = document.querySelector('.get-started__text h1');
    const descriptionElement = document.querySelector('.get-started__text p');
    const btnP = document.querySelector('.get-started__btn p');

    // Оновлення вмісту елементів
    titleElement.textContent = data.title;
    descriptionElement.textContent = data.description;
    btnP.textContent = data.buttonText;

    // // Отримання елемента DOM для зображення
    // const photoElement = document.querySelector('.get-started__photo-container img');

    // // Оновлення атрибуту src для зображення
    // photoElement.src = data.photo;

    // Тут можна додати код для обробки інших даних та оновлення DOM
}})
