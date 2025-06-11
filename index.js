let counter = 2;
setInterval(() => {
    document.getElementById("radio" + counter ).checked = true; 
    counter++;
    if(counter == 5){
        counter = 1;
    }
}, 5000);

setTimeout( () => {
    document.getElementById("cancel").style.display= "block"
    document.getElementById("alert-background").style.opacity= "1"
    document.getElementById("alert").style.opacity= "1"
    }, 1000
    );

    function myAlert(){
        document.getElementById("cancel").style.display = "none";
        document.getElementById("alert").style.opacity= "0";
        document.getElementById("alert").style.display= "none";
        document.getElementById("alert-background").style.display= "none";
    }