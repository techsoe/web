
var headerName = document.getElementById("headerName");

let time;

var stopButton = document.getElementById("stopTime");
magic()
function magic(){
    stopButton.style.display = "none";
}

headerName.onmouseenter = function(){
    time = window.setInterval(function(){
        clock();
    },1000);
    
    stopButton.style = "display: flex";
}
 
stopButton.onclick = function(){
    clearInterval(time);
    setTimeout(function(){
        magic()
        headerName.innerHTML = "Techsoe"
    },1000)
}


function clock(){
        
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

   headerName.innerHTML = (dateFixer(hour) + ":" + dateFixer(minutes) + ":" + dateFixer(seconds));
    
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
    var guestEmail = document.getElementsByClassName("email");

    if(guestNameElements.length > 0 && guestEmail.length > 0){
        var finalName = guestNameElements[0].value;
        var finalEmail = guestEmail[0].value;
        alert(
            "Hello " + finalName.toUpperCase() + 
            "\nYour message is secured, please wait for a reply at " + finalEmail + 
            "\nIf you want to know the time click TECHSOE"
        );
    }
}

