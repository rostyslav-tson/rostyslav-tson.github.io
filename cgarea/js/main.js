  function myFunctionOff() {
    document.getElementById("demo").innerHTML = "3D Модели"
  }
  function myFunction1() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Архитектура.svg'>"
  }
  function myFunction2() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Декорация.svg'>"
  }
  function myFunction3() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Детская.svg'>"
  }
  function myFunction4() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Кухня.svg'>"
  }
  function myFunction5() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Мебель.svg'>"
  }
  function myFunction6() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Одежда.svg'>"
  }
  function myFunction7() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Освещение.svg'>"
  }
  function myFunction8() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Санузел.svg'>"
  }
  function myFunction9() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Ландшафт.svg'>"
  }
  function myFunction10() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Транспорт.svg'>"
  }
  function myFunction11() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Персонаж.svg'>"
  }
  function myFunction12() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Животные.svg'>"
  }
  function myFunction13() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Техника.svg'>"
  }
  function myFunction14() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Разные.svg'>"
  }
  function myFunction15() {
    document.getElementById("demo").innerHTML = "<img src='img/icons_menu/Скрипт.svg'>"
  }

  $(function() {

 $(window).scroll(function() {

 if($(this).scrollTop() != 0) {

 $('#toTop').fadeIn();
 
 } else {

 $('#toTop').fadeOut();

 }

 });
 
 $('#toTop').click(function() {

 $('body,html').animate({scrollTop:0},800);

 });
 
});
