importScripts('workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: 'workbox-v4.3.1/'
});

// Turn on logging
workbox.setConfig({
  debug: true
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "309782afbe9d8d0816586444a3da4a3d"
  },
  {
    "url": "manifest.json",
    "revision": "0ba86fe094e633b7c5919db9be9d5d6e"
  },
  {
    "url": "css/style.css",
    "revision": "f9223eb922f0df529a4b8cda9257a4f3"
  },
  {
    "url": "js/copy.js",
    "revision": "7c29f02088c887de3f98f4ed08e42c43"
  },
  {
    "url": "js/jquery-3.6.0.min.js",
    "revision": "0732e3eabbf8aa7ce7f69eedbd07dfdd"
  },
  {
    "url": "js/pwacompat.min.js",
    "revision": "0bf1bea41b1ba758d3989814c988f46e"
  },
  {
    "url": "smain.js",
    "revision": "eeb06dd2d4354b144f89fdb6118da6ea"
  },
  {
    "url": "img/1.webp",
    "revision": "4433b980e10c1b841e463422c89da704"
  },
  {
    "url": "img/10.webp",
    "revision": "eabd1c0944c5f8de45f48eb2d8aa63df"
  },
  {
    "url": "img/11.webp",
    "revision": "d0d26ebf6eb30f42e1f4db084d0b3e2d"
  },
  {
    "url": "img/12.webp",
    "revision": "ffa274720324cc1667d9e3e476c04ce2"
  },
  {
    "url": "img/13.webp",
    "revision": "810e59bdaa12fdd4c6b92a03d3b7bb9a"
  },
  {
    "url": "img/14.webp",
    "revision": "d391a2d4c07247ce120339e0ac1e21e3"
  },
  {
    "url": "img/15.webp",
    "revision": "c7dae8f9a59e9d280aa540109107c5f4"
  },
  {
    "url": "img/16.webp",
    "revision": "b44406f1c194c8d9e34320bf0e44b2ef"
  },
  {
    "url": "img/2.webp",
    "revision": "2c5315188a2d0d198891bc94d65a44cc"
  },
  {
    "url": "img/3.webp",
    "revision": "ba2b3267c885d7e6904241f10785a4eb"
  },
  {
    "url": "img/4.webp",
    "revision": "6d9ade5695d3a50e36a054ac69807b7a"
  },
  {
    "url": "img/5.webp",
    "revision": "22c8e073e91f5e84ce53efaaf762e332"
  },
  {
    "url": "img/6.webp",
    "revision": "df52cf5d00279b8b0e410b84acc410e0"
  },
  {
    "url": "img/7.webp",
    "revision": "0fe221fdc98af959be88bf13bbbd63d0"
  },
  {
    "url": "img/8.webp",
    "revision": "a684859bd7be1c014a3059a1db7d86a7"
  },
  {
    "url": "img/9.webp",
    "revision": "4964e4d1a0d2851dfd067d63bfdcc5d0"
  },
  {
    "url": "img/DuaEnd.webp",
    "revision": "4444d3e8f930bb1e2f0dff88702dfc27"
  },
  {
    "url": "img/mosque.avif",
    "revision": "235d8aa6a3e923932bfa8d60ce45eb81"
  },
  {
    "url": "img/Quranayats.webp",
    "revision": "4f2d7a4aca055fc7c42b7e771b046b28"
  },
  {
    "url": "img/Salavat.webp",
    "revision": "f797ed49bd225701fa146dfdf3447072"
  },
  {
    "url": "img/screen.png",
    "revision": "21909f0bd0f04a0c9873d2abe38a82db"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "c1fdb4f328dc224c31d4f63b37a2d7eb"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "fbf62408a29bafea9714e5006212cdbc"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "480c47876f2576e4ea51c6e6f6b3a0e1"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "661e7275a650d6a3616d38e98bd09219"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "15230a15012db5dfc25c8756191f8ded"
  },
  {
    "url": "assets/icons/icon-48x48.png",
    "revision": "34950ff63a4a4de30783fa922faee9c2"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "28dca3664bb91e23c7a8ad2d0d8194d7"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "bcd59f0dc93d37c8e8f963471f39028d"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "cce9088080585a31862e0fe7d70d306f"
  }
]);

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  workbox.strategies.cacheFirst()
)

// OTHER EVENTS

// Receive push and show a notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker]: Received push event', event);
});
