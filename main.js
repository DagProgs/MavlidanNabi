import { Workbox } from './workbox-v4.3.0/workbox-window.prod.mjs';

if (!localStorage.getItem('appInstalled') && !window.matchMedia('(display-mode: standalone)').matches && /iPhone|iPod/i.test(navigator.userAgent)) {
    // Открываем модальное окно только на устройствах iPhone
    document.getElementById('myModal').style.display = 'block';
    localStorage.setItem('appInstalled', 'true');
}

if (!localStorage.getItem('appInstalled') && !window.matchMedia('(display-mode: standalone)').matches && /Android/i.test(navigator.userAgent)) {
    // Создаем модальное окно для устройств Android
    const androidModal = document.createElement('div');
    androidModal.id = 'androidModal';
    androidModal.style.display = 'block';
    androidModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p>Установите приложение на вашем устройстве (Android)</p>
            <button id="installAndroidButton">Установить</button>
        </div>
    `;
    document.body.appendChild(androidModal);

    // Закрытие модального окна при нажатии на кнопку "Закрыть"
    androidModal.querySelector('.close').onclick = function() {
        androidModal.style.display = 'none';
    };

    // Добавление обработчика события для кнопки "Установить"
    androidModal.querySelector('#installAndroidButton').onclick = function() {
        // Добавьте здесь код для установки приложения на устройство Android
        // Например, открытие страницы с инструкциями по установке
    };

    localStorage.setItem('appInstalled', 'true');
}

// Закрытие модального окна при нажатии на кнопку "Close"
document.getElementsByClassName("close")[0].onclick = function() {
    document.getElementById('myModal').style.display = "none";
}

if ('serviceWorker' in navigator) {
    const wb = new Workbox('sw-workbox.js');

    wb.addEventListener('installed', event => {
        if (event.isUpdate) {
            if (confirm(`Мы только что обновили версию приложения! Чтобы получить обновления, нажмите на кнопку OK.`)) {
                window.location.reload();
            } else {
                alert(`Вы отказались от обновления приложения. Для получения новых возможностей перезагрузите страницу в будущем.`);
            }
        } else {
            alert(`Приложение готово к работе в автономном режиме`);
        }
    });

    wb.register();
}
