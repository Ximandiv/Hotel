function precios(){
    var tarifa = (document.getElementById("tarifa").value);
    var huespedes = parseInt(document.getElementById("ctd_Huesped").value);
    var dias = parseFloat(document.getElementById("ctd_Dias").value);
    var precio_Total = 0;

switch(tarifa){
    case 'Individual':
        precio_Total = (2.50 * dias) - ((2.50*dias)*5/100)
        document.getElementById("Mensaje1").innerHTML = "El precio de su estadía sería de" + " " +  "$" + precio_Total
        break;
    case 'Doble' || 'doble' || 'DOBLE':
        precio_Total = 4.60 * dias - ((4.60*dias) * 9 / 100)
        document.getElementById("Mensaje1").innerHTML = "El precio de su estadía sería de" + " " +  "$" + precio_Total
        break;
    case 'Familiar':
        precio_Total = 5.20 * dias - ((5.20*dias)* 15 / 100)
        document.getElementById("Mensaje1").innerHTML = "El precio de su estadía sería de" + " " + "$" + precio_Total
        break;
    }
}