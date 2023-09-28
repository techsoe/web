
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

function showAlert(){
    var guestNameElements = document.getElementsByClassName("name");

    if(guestNameElements.length > 0){
        var finalName = guestNameElements[0].value;
        alert(
            "Hello " + finalName.toUpperCase() + 
            "\n If you want to know the time click TECHSOE"
        );
    }
}