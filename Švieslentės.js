$(document).ready(function(){
    $.get('klientai.json', function(data, status){
    console.log(data);

    data.sort(function(a, b){return a.number - b.number});

    for(i = 0; i < data.length; i++){
        if (i === 0) {
            $('tbody').append('<tr class="animated flash"> <th>' + data[i].name + '</th><td>' + data[i].number + '</td><td>' + data[i].paslauga + '</td></tr>');
          } else {
            $('tbody').append('<tr> <th>' + data[i].name + '</th><td>' + data[i].number + '</td><td>' + data[i].paslauga + '</td></tr>');
          }
    }
    });
});