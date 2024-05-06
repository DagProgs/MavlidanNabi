// Когда пользователь прокручивает вниз 50px от верхней части документа, измените размер шрифта заголовка
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-text").style.fontSize = "15px";
  } else {
    document.getElementById("header-text").style.fontSize = "20px";
  }
}