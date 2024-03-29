importScripts('workbox-v4.3.0/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: 'workbox-v4.3.0/'
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
    "revision": "5e1d56008d1c98bfe900712092292a70"
  },
  {
    "url": "main.js",
    "revision": "2676aa2c3d7a9eb04f238bf700c3c7d3"
  },
  {
    "url": "manifest.json",
    "revision": "d3ba7397319a097757495d6b11854caf"
  },
  {
    "url": "assets/css/style.css",
    "revision": "e6919dfb16efe169e000e9078d5125ab"
  },
  {
    "url": "js/jquery-3.6.0.min.js",
    "revision": "0732e3eabbf8aa7ce7f69eedbd07dfdd"
  },
  {
    "url": "js/pwacompat.min.js",
    "revision": "038770ef3eb91f3e8a50a3916cb7cf28"
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
  },
  {
    "url": "assets/img/bg-1",
    "revision": "c54ab9419e633332f73b2eb04648362e"
  },
  {
    "url": "assets/img/bg-2",
    "revision": "f0a344396802b51eac58df781f683a0a"
  },
  {
    "url": "assets/pages/1",
    "revision": "d45ed5b91c0b64e6205d812e31777f3a"
  },
  {
    "url": "assets/pages/10",
    "revision": "eabd1c0944c5f8de45f48eb2d8aa63df"
  },
  {
    "url": "assets/pages/11",
    "revision": "d0d26ebf6eb30f42e1f4db084d0b3e2d"
  },
  {
    "url": "assets/pages/12",
    "revision": "ffa274720324cc1667d9e3e476c04ce2"
  },
  {
    "url": "assets/pages/13",
    "revision": "810e59bdaa12fdd4c6b92a03d3b7bb9a"
  },
  {
    "url": "assets/pages/14",
    "revision": "d391a2d4c07247ce120339e0ac1e21e3"
  },
  {
    "url": "assets/pages/15",
    "revision": "c7dae8f9a59e9d280aa540109107c5f4"
  },
  {
    "url": "assets/pages/16",
    "revision": "b44406f1c194c8d9e34320bf0e44b2ef"
  },
  {
    "url": "assets/pages/2",
    "revision": "2c5315188a2d0d198891bc94d65a44cc"
  },
  {
    "url": "assets/pages/3",
    "revision": "ba2b3267c885d7e6904241f10785a4eb"
  },
  {
    "url": "assets/pages/4",
    "revision": "6d9ade5695d3a50e36a054ac69807b7a"
  },
  {
    "url": "assets/pages/5",
    "revision": "22c8e073e91f5e84ce53efaaf762e332"
  },
  {
    "url": "assets/pages/6",
    "revision": "df52cf5d00279b8b0e410b84acc410e0"
  },
  {
    "url": "assets/pages/7",
    "revision": "0fe221fdc98af959be88bf13bbbd63d0"
  },
  {
    "url": "assets/pages/8",
    "revision": "a684859bd7be1c014a3059a1db7d86a7"
  },
  {
    "url": "assets/pages/9",
    "revision": "4964e4d1a0d2851dfd067d63bfdcc5d0"
  },
  {
    "url": "assets/pages/dua-end",
    "revision": "4444d3e8f930bb1e2f0dff88702dfc27"
  },
  {
    "url": "assets/pages/quran-ayats",
    "revision": "44ffedf466d7f5796df50cf7ad6bcae2"
  },
  {
    "url": "assets/pages/salavat",
    "revision": "48eb9d47ee126ec9359e1d07fa766e93"
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
