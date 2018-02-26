declare var google: any;

export function obtenerArrayLatLong(pLatLongCadena){
    var arrayCoords = new Array();
    var posArray = pLatLongCadena.split(",");
    var latLong2="";
    for(var j = 0; j < posArray.length; j++){
        latLong2= posArray[j].split(" ");
        arrayCoords[j]= new google.maps.LatLng(parseFloat(latLong2[0]),parseFloat(latLong2[1]));
    }
    return arrayCoords;
}

export function obtenerLatLongBounds(arrayLatLong){    
    //Variables
    var bounds = new google.maps.LatLngBounds();
        
    arrayLatLong.forEach(function(objeto, key, array){
        bounds.extend(objeto);        
    }); 

    return bounds;	
}

export function obtenerStringLatLongGeometry(pPath, opt_options){
    var options = opt_options || {};
    var cerrar = options['cerrar'] || false;

    var maxpoints = 65536; //Maximo Puntos Permitidos
    var lista = pPath.getArray() || pPath.overview_path;
    var formateado='';
    var total = lista.length;
    var latLngInicial, latLngFinal;

    if(total>maxpoints){
        var coeficiente = total/maxpoints;
        var nuevaLista=[];
        for (var i = 0; i < maxpoints; i++){
            nuevaLista.push(lista[i*Number(coeficiente.toFixed(0))])
        };
        lista = nuevaLista;
    }

    lista.forEach(function(objeto, key, array){
        formateado += objeto.lat()+' '+objeto.lng()+',';
    });

    //Cerrar Poligono
    if(cerrar){
        latLngInicial=pPath.getAt(0);
        latLngFinal=pPath.getAt(lista.length-1);
        if(!(latLngInicial.lat() == latLngFinal.lat() && latLngInicial.lng() == latLngFinal.lng())){
            formateado += latLngInicial.lat()+' '+latLngInicial.lng()+','; 
        }                
    }
    return formateado.substring(0,formateado.length-1);
}