
var headerName = document.getElementById("headerName");



headerName.onclick = function(){

    window.setInterval(function(){

        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        headerName.innerHTML = dateFixer(hour) + ":" + dateFixer(minutes) + ":" + dateFixer(seconds);
    }, 1000);
    
}

function dateFixer(num){
    var newHour;

    if(num < 10){
        return newHour = "0" + num
    }else {
        return newHour = num.toString();
    }
}