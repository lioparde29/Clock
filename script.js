function updateDate() {
    var date = new Date();

    var setTime = document.getElementById('setTime');
    setTime.innerHTML = 
        ('0' + date.getHours()).slice(-2) + ':' + 
        ('0' + date.getMinutes()).slice(-2) + ':' + 
        ('0' + date.getSeconds()).slice(-2);
    
    var setDate = document.getElementById('setDate');
    setDate.innerHTML = 
        ('0' + date.getDate()).slice(-2) + '-' + 
        ('0' + (date.getMonth() + 1)).slice(-2) + '-' + 
        date.getFullYear();
}

setInterval(updateDate, 1000);
window.onload = updateDate;

function getColor() {
    var color = document.getElementById('setColor').value;
    localStorage.setItem('color', color);
    document.body.style.background = color;
}

function setColor() {
    var color = localStorage.getItem('color');
    if (color) {
        document.getElementById('setColor').value = color;
        document.body.style.background = color;
    }
}

window.onload = function() {
    updateDate();
    setColor();
};
