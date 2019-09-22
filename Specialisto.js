$(document).ready(function(){
    $.get('klientai.json', function(data, status){
        console.log(data);

        for(i = 0; i < data.length; i++){
            $('tbody').append('<tr> <th>' + data[i].name + '</th><td>' + data[i].number + '</td><td> <button type="button" class="btn btn-secondary">Aptarnautas</button> </td><td>' + data[i].paslauga + '</td></tr>')
        }
        $('tbody button').click(function() {
            $(this).parent().parent().remove()
        })

        $('.dropdown-item').click(function() {
            $('tbody tr').remove()
            for(i = 0; i < data.length; i++) {
                if (data[i].paslauga === $(this).text()) {
                    $('tbody').append('<tr> <th>' + data[i].name + '</th><td>' + data[i].number + '</td><td> <button type="button" class="btn btn-secondary">Aptarnautas</button> </td><td>' + data[i].paslauga + '</td></tr>');
                }
            }
            $('tbody button').click(function() {
                $(this).parent().parent().remove()
            })
        });

    });
});