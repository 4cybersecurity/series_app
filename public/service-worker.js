const CACHE_NAME = "version-1"
const urlsToCache = ["index.html","offline.html"]


//installation
this.addEventListener('install',(event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened Cache")
            return cache.addAll(urlsToCache);
        })
    );
});


// listen for request
this.addEventListener(("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((res) => {
            return fetch(event.request).catch(() => caches.match('offline.html'))
        })
    )
}))



// activate the service worker
this.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});