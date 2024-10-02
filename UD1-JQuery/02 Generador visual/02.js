$(document).ready(function(){
    $('#bt_add').click(function(){
        agregar( );
    });
    $('#bt_del').click(function(){
        if (id_fila_selected != null) {
            eliminar(id_fila_selected);
            id_fila_selected = null;
        } 
    });
})  


//agregar
var cont = 0;
function agregar(){
    cont++;
    var fila = '<tr class="selected" id="fila' + cont + '" onclick="seleccionar(\'fila' + cont + '\')">' +
               '<td>' + cont + '</td>' +
               '<td>Texto por defecto</td>' +
               '<td>00.00</td>' +
               '</tr>';
    $('#tabla tbody').append(fila);
}

//Para elimianr una fila lo haremos por su id qu elo obtendremos gracias a la siguiente función
function seleccionar(id_fila){
    if($('#'+id_fila).hasClass('seleccionada')){
        ($('#'+id_fila).removeClass('seleccionada'))
    }else{
        ($('#'+id_fila).addClass('seleccionada'))
    }   
    id_fila_selected = id_fila;
}
function eliminar(id_fila){
    $('#'+id_fila).remove();
}


