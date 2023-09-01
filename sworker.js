self.addEventListener("install",e=>{
    
    e.waitUntill(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./style.css","./images/logo64.png","./image/logo512.png"]);
       })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response || fetch(e.request);
        })
    )
}) 