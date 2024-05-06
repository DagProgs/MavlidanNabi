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


// Сохраняем положение скролла в sessionStorage при скролле страницы
window.addEventListener('scroll', function() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
});

// Восстанавливаем положение скролла при загрузке страницы
window.addEventListener('load', function() {
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
    }
});
