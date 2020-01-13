// register service worker
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js', {
        scope: '/'
    })
        .then(function(reg) {
            console.log('service worker registered');
        });
}

// event listener for add item
