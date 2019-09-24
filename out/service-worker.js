self.__precacheManifest = [
  {
    "url": "/_next/static/KT7cfVKhV0a83eqLRSLR_/pages/_app.js",
    "revision": "a20f92185efb6348f785"
  },
  {
    "url": "/_next/static/KT7cfVKhV0a83eqLRSLR_/pages/_error.js",
    "revision": "478c3a80fee1168a4f15"
  },
  {
    "url": "/_next/static/KT7cfVKhV0a83eqLRSLR_/pages/index.js",
    "revision": "dbeaf88a57de9f2f5710"
  },
  {
    "url": "/_next/static/chunks/commons.5734b6cd8629d5b22406.js",
    "revision": "b852eb573dcbfc0be4ea"
  },
  {
    "url": "/_next/static/runtime/main-be77e61e8a68c587a21f.js",
    "revision": "c6591bd92025c022e70b"
  },
  {
    "url": "/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
