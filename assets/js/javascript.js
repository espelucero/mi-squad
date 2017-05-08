function MiembroSquad(nombre, apellido, edad, hobbies, id){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	//this.fotografia = new Image();
	//this.fotografia.src="img/" + this.apellido + ".jpg";
	this.id = id;
};

function Comentario(id_miembro, comentario, likes){
    this.id_miembro = id_miembro;
    this.comentario = comentario;
    this.likes = 0;
  };


function miembros(){
	var lista = [];

	var fernanda = new MiembroSquad('Fernanda', 'Zamora', 30,
	['escuchar música','Hacer fotografías','Pensar en el existencialismo']);

	var valentina = new MiembroSquad('Valentina', 'Miranda', 26,['Dibujar','Ver anime y series', 'Cocinar']);

	var cindialy = new MiembroSquad('Cindialy','Berrios', 23, ['Trekking', 'Escuchar música', 'Deporte']);

	var diana = new MiembroSquad('Diana', 'Villasmil', 29, ['Cantar', 'Ver series coreanas', 'Leer']);

	var natalia = new MiembroSquad('Natalia', 'Villalobos', 30, ['Tocar batería', 'Dormir', 'Hacer queques']);

	var vanePelle = new MiembroSquad('Vanessa', 'Pellegrini', 25,['Jugar lol','Ver series','Visitar parques']);

	var vaneGarcia = new MiembroSquad('Vanessa' , 'García', 25, ['Aprender de Agilidad', 'Probar cervezas', 'Escuchar música']);


lista.push(fernanda);
lista.push(valentina);
lista.push(cindialy);
lista.push(diana);
lista.push(natalia);
lista.push(vanePelle);
lista.push(vaneGarcia);

lista.forEach(function(el){
	var contenedor = document.getElementById('listaIntegrantes');
	contenedor.innerHTML += "<section><b>Nombre: </b>" + el.nombre + " " + el.apellido  + "<br><b>Edad: </b>" + el.edad +
	" años <br>" + "<b>Hobbies: </b><ul><li>" + el.hobbies[0] + "</li><li>" + el.hobbies[1] + "</li><li>" +
	el.hobbies[2] + "</li></ul>" + '<textarea cols="60" rows="4" id="comment' + el.id + '"></textarea>' +
	"<br>" + '<button type="button" id="send-comment' + el.id + '"onClick="obtComentario()">Dejar Comentario</button>' +
	'<div id="add-comment' + el.id + '"></div><br><br>' + "</section>";
    
 


  return contenedor;

});

return lista;

}

miembros();

function obtComentario(){
    var addComent=[];
	var input = document.getElementById("send-comment");

	var contComment = document.getElementById("comment" + id);
	
	var contenido = contComment.value;
	contenido += 'img onClick="contadorLikes(' + id + ')" src="img/favicon.png"></img>' +
	 '<div id="likes' + id + '"></div>';
	
	
	document.getElementById("add-comment" + id).innerHTML = contenido;
	var comentario = new Comentario(id,contComment.value, 0);
	addComent.push(comentario);
	console.log(addComent);

}

//Boton de likes:
    
     var clicks = 0;
     function contadorLikes(){
          
          if (clicks == 1) {
          	document.getElementById("clicks").innerHTML = clicks++;
          
      }
    };


