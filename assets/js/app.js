function trello() {
	 var save= document.getElementById('save');
	 var bton= document.createElement('button');
	 var cuadradoTexto= document.createElement('input');
	 var nodoT= document.createTextNode('Guardar');

	//atributos//
	cuadradoTexto.setAttribute('id', 'valor');
  //añadiendo nodos//
	bton.appendChild(nodoT);
	save.appendChild(bton);
	save.appendChild(cuadradoTexto);

	  bton.addEventListener('click', function(){
		var listado= document.getElementById('valor').value;
		document.getElementById('valor').value='';
		var save=document.getElementById('cajon');
		var parrafo = document.createElement('p');
		var nuevoTexto = document.createTextNode(listado);


    var add= document.createElement('a');
		add.setAttribute('href', '#');
		var textAdd= document.createTextNode('Añadir tarjeta');

		parrafo.appendChild(nuevoTexto);
		cajon.appendChild(parrafo);
		add.appendChild(textAdd);
		cajon.appendChild(add);

		add.addEventListener('click', function(){

			var textArea= document.createElement('textarea');
			add.appendChild(textAdd);
			cajon.appendChild(textArea);
			cajon.appendChild(add);
		})

	})


}
