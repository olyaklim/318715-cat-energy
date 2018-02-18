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

// Slider
var val_before;
var val_after;


var slider__range = document.querySelector('.slider__range');
slider__range.classList.add('slider__range-center');
slider__range.addEventListener("click", sliderrange);

var mytoogle = document.querySelector('.slider__toogle');
var mytoogle_after = document.querySelector('.slider__toogle--after');

var slider_left = document.querySelector('.slider__item--left');
var slider_right = document.querySelector('.slider__item--right');
mytoogle.addEventListener("click", handler);
mytoogle_after.addEventListener("click", handler2);

function sliderrange() {
  slider__range.classList.add('slider__range-center');
  slider_left.style.width =  '50%';
  slider_right.style.width = '50%';
}
function handler() {
  slider__range.classList.remove('slider__range-center');
  val_before = 100;
  val_after = 0;

  slider_left.style.width =  val_before + '%';
  slider_right.style.width = val_after + '%';
}

function handler2() {
  slider__range.classList.remove('slider__range-center');
  val_before = 0;
  val_after = 100;
  slider_left.style.width =  val_before + '%';
  slider_right.style.width = val_after + '%';
}


// var map;

// function initMap() {

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 59.938945, lng: 30.323062},
// // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
// zoom: 15,
// zoomControl: false,
// scaleControl: true
// });


// // Создаем маркер на карте
// var marker = new google.maps.Marker({

// // Определяем позицию маркера
// position: {lat: 59.938945, lng: 30.323062},

// map: map,

// // Пишем название маркера - появится если навести на него курсор и немного подождать
// title: 'Кэт энерджи',

// // Укажем свою иконку для маркера
// icon: 'img/map-pin.png'
// });
// }
