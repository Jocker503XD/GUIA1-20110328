function init(){
    //prompt() permite obtener entrada de datos del usuario
    var temp = prompt('Ingrese la temperatura que quiera convertir ','');
    var xd,i;
    var div = document.getElementById('distribucion');

    //Realizando los cálculos para distribución del presupuesto
    xd = temp*1.8;
    
    //Creando el código que se insertará dentro del elemento div id=distribucion

    var html = "<ul>\n\t<li>\n";
    html += "\t\t<a href='#' class='move-right'>\n";
    html += "\t\t\tLa Conversion que llega tener de Celcius a Fahrenheit es de  " + (xd+32)+"º"+"\n";
    html += "\t\t</a>\n";
    html += "\t</li>\n";
    html += "</ul>\n";

    div.innerHTML = html;
    var links = document.getElementsByTagName('a');
    for(i=0; i<links.length; i++){
        links[i].onmouseover = function(){
            this.className = 'move-right-hover';
};
links[i].onmouseout = function(){
    this.className = 'move-right';
};
}
}
window.onload = init;
