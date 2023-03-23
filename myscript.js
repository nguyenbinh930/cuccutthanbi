function Myfunction(){
    var pwdin = document.getElementById("pwd").value;
    if (pwdin != "12345678") {
        alert("Try again");        
    } else {
        window.close();
        window.open("/main.html","_blank");
    }
}