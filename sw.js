const CACHE='bluecar-v1';self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','index.html','styles.css','app.js','manifest.json','interior.png','exterior.png','higienizacao.png','polimento.png']))));self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

