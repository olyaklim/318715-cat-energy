var map;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.938945, lng: 30.323062},
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 15,
    zoomControl: false,
    scaleControl: true
  });


  // Создаем маркер на карте
  var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 59.938945, lng: 30.323062},

    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Кэт энерджи',

    // Укажем свою иконку для маркера
    icon: 'img/map-pin.png'
  });
}

// Menu

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click',function(){
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
