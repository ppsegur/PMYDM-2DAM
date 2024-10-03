$(document).ready(function(){
    var listadoPersonajes = "No tengo datos";

    $.ajax(url ='https://swapi.dev/api/people');//Url de la api
    method : "GET" //como es un mostrar unn get no tenemos cuerpo 
    }).done(function(data){
        //JSON()toma como entrada ek texto que m lleva del sl servidor
        //y lo convierte a un objeto
        var json = JSON.parse(data);
        debugger;
        listadoPersonajes=data;
        
        /*Lo que se progrmaa dentro de esta función sera ejecutado cando se halla resuelto 
        la petición asínntota, es decir para qeue me llegue la repsuesta del server .
        */
    });

    $("#data-content").html(listadoPersonajes);


