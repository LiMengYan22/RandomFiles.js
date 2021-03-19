<script >
var objetos = new Array();
objetos[0] = "Imagen";
objetos[1] = "Imagen";
objetos[2] = "Imagen";
function aleatorio() 
{
var azar = Math.floor(Math.random() * objetos.length);
document.images["imagen"].src = objetos[azar];
}
</script>
