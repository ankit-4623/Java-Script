const clock = document.getElementById('clock');

setInterval(function() {
    var date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);
