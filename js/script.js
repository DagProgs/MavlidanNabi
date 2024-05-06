// Сохраняем положение скролла в localStorage при закрытии приложения
window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPosition', window.scrollY);
});

// Восстанавливаем положение скролла при открытии приложения
window.addEventListener('load', function() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});
