document.addEventListener('DOMContentLoaded', function () {
    const requestURL = './js/get-started.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    
    request.onload = function () {
        const data = request.response;
        showContent(data);
        loadServices(displayServices);
    };
    
    function showContent(data) {
        // Отримання елементів DOM
        const titleElement = document.querySelector('.get-started__text h1');
        const descriptionElement = document.querySelector('.get-started__text p');
        const btnP = document.querySelector('.get-started__btn p');
        titleElement.textContent = data.title;
        descriptionElement.textContent = data.description;
        btnP.textContent = data.buttonText;

    }
    function displayServices(services) {
        var container = document.querySelector('.services-list__columns-container');
      
        services.forEach(function (service) {
          var column = document.createElement('div');
          column.classList.add('services-list__column');
      
          var imgContainer = document.createElement('div');
          imgContainer.classList.add('services-list__column-img-container');
      
          var img = document.createElement('img');
          img.src = service.icon;
          img.alt = '';
      
          imgContainer.appendChild(img);
          column.appendChild(imgContainer);
      
          var title = document.createElement('h3');
          title.textContent = service.title;
          column.appendChild(title);
      
          var description = document.createElement('p');
          description.textContent = service.description;
          column.appendChild(description);
      
          container.appendChild(column);
        });
    }})