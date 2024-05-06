import { Workbox } from './workbox-v4.3.1/workbox-window.prod.mjs';

if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw-workbox.js');

    wb.addEventListener('installed', event => {
        if (event.isUpdate) {
            window.location.reload();
        }
    });

    wb.register();
}


// iPhone

// Сохраняем положение скролла в localStorage при изменении видимости страницы
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === 'hidden') {
        localStorage.setItem('scrollPosition', window.scrollY);
    }
});

// Восстанавливаем положение скролла при открытии приложения
window.addEventListener('load', function() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});


// Android

// Сохраняем положение скролла в localStorage при закрытии приложения
window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPosition', window.scrollY);
    window.dispatchEvent(new Event('appClosed'));
});

// Восстанавливаем положение скролла при открытии приложения
window.addEventListener('load', function() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});

// Прослушиваем кастомное событие для восстановления положения скролла
window.addEventListener('appClosed', function() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});
