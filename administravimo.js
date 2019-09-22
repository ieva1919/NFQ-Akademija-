$(document).ready(function(){
    $.get("klientai.json", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
    });
});