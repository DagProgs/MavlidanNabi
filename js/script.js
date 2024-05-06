// Сохраняем текущее положение скролла при закрытии PWA приложения
window.addEventListener('beforeunload', function(event) {
    localStorage.setItem('scrollPosition', window.scrollY.toString());
});

// Восстанавливаем положение скролла при открытии PWA приложения
window.addEventListener('load', function() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});
