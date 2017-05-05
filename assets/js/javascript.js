function MiembroSquad(nombreYApellido, edad, hobbies){
	this.nombreYApellido = nombreYApellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

function miembros(){
	var lista = [];

	var fernanda = new MiembroSquad('Fernanda Zamora', 30,
	['escuchar música','Hacer fotografías','Pensar en el existencialismo']);

	var valentina = new MiembroSquad('Valentina Miranda', 26,['dibujar','ver anime y series', 'cocinar']);

	var cindialy = new MiembroSquad('Cindialy Berrios', 23, ['Trekking', 'Escuchar música', 'Deporte']);

	var diana = new MiembroSquad('Diana Villasmil', 29, ['cantar', 'ver series coreanas', 'leer']);

	var natalia = new MiembroSquad('Natalia Villalobos', 30, ['tocar batería', 'dormir', 'hacer queques']);


lista.push(fernanda);
lista.push(valentina);
lista.push(cindialy);
lista.push(diana);
lista.push(natalia);

lista.forEach(function(el){
	var contenedor = document.getElementById('listaIntegrantes');
	contenedor.innerHTML += "<div><b>Nombre: </b>" + el.nombreYApellido + "<br><b>Edad: </b>" + el.edad +
	" años <br>" + "<b>Hobbies: </b><ul><li>" + el.hobbies[0] + "</li><li>" + el.hobbies[1] + "</li><li>" +
	el.hobbies[2] + "</li></ul></div><br>";
});
return lista;

}
miembros();



/*var lista = document.getElementsByClassName('listaIntegrantes');

var miembro1 = "<b><li>Nombre y Apellido: </b>" + fernanda.nombreYApellido + "<br></li><b><li>Edad: </b>" + fernanda.edad + "<br></li><b><li>Hobbie: </b>" + fernanda.hobbies
    + "<br><br>";
var miembro2 = "<b><li>Nombre y Apellido: </b>" + valentina.nombreYApellido + "<br></li><b><li>Edad: </b>" + valentina.edad + "<br></li><b><li>Hobbie: </b>" + valentina.hobbies
    + "<br><br>";
var miembro3 = "<b><li>Nombre y Apellido: </b>" + cindialy.nombreYApellido + "<br></li><b><li>Edad: </b>" + cindialy.edad + "<br></li><b><li>Hobbie: </b>" + cindialy.hobbies
    + "<br><br>";
var miembro4 = "<b><li>Nombre y Apellido: </b>" + diana.nombreYApellido + "<br></li><b><li>Edad: </b>" + diana.edad + "<br></li><b><li>Hobbie: </b>" + diana.hobbies
    + "<br><br>";
var miembro5 = "<b><li>Nombre y Apellido: </b>" + natalia.nombreYApellido + "<br></li><b><li>Edad: </b>" + natalia.edad + "<br></li><b><li>Hobbie: </b>" + natalia.hobbies
    + "<br><br>";

var resultado = miembro1 + miembro2 + miembro3 + miembro4 + miembro5;

lista.innerHTML = resultado;*/