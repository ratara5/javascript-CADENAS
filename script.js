let cadena=new String("las cadenas son objetos");

let cadena1="cadena de prueba";
let cadena2=" cadena 2"
let cadena3="cadena"
let cadena4=" de prueba"
let cadena5="na de pr"
let cadena6="hola ¿cómo estás?"
let verLongitud="   RAYMOND   "

// todas las funciones de búsqueda son estrictas
let resultado1=cadena1.concat(cadena2);
let resultado2=cadena;
let resultado3=cadena1.startsWith(cadena3);
let resultado4=cadena1.endsWith(cadena4);
let resultado5=cadena1.includes(cadena5);
let resultado6=cadena1.indexOf("ena");
let resultado7=cadena1.lastIndexOf("a");

// agregar cadenas a las cadenas
let resultado8=cadena3.padStart(15,"abc ");
let resultado9=cadena3.padEnd(10," abc");
let resultado10=cadena3.repeat(3);
let numero=450000

// transformar cadenas
let resultado11=cadena6.split(" ");
let resultado12=cadena.substring(0,4);
let resultado13=("ESTO ESTÁ EN MAYÚSCULA Y LE APLIQUÉ LOWERCASE").toLowerCase();
let resultado14=("esto está en minúscula y le apliqué UPPERCASE").toUpperCase();
let resultado15=numero.toString();
let resultado16=verLongitud.length;
let resultado17=(   "Esto Es Una Cadena Con Espacios Al Pppio Y Al Final Y Le Apliqué Trim   ").trim(); //también hay trimEnd y trimStart

document.write(resultado1+"</br>");
document.write(resultado2+"</br>");
document.write(resultado3+"</br>");
document.write(resultado4+"</br>");
document.write(resultado5+"</br>");
document.write(resultado6+"</br>");
document.write(cadena[13]+"</br>");
document.write(resultado7+"</br>");
document.write(resultado8+"</br>");
document.write(resultado9+"</br>");
document.write(resultado10+"</br>");
document.write(resultado11+"</br>"); //Este es un array
document.write(resultado11[0]+"</br>");
document.write(resultado11[1]+"</br>");
document.write(resultado12+"</br>");
document.write(resultado13+"</br>");
document.write(resultado14+"</br>");
document.write(resultado15+"</br>");
document.write(resultado16+"</br>"); //El html casi siempre no muestra los espacios antes ni después de cadena
document.write(resultado17+"</br>");