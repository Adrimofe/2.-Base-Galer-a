Práctica Javascript DOM

A través del DOM se accede a los atributos de los elementos, para pintar la imagen seleccionada a través del click en los enlaces <a>.
Con preventDefault(), elimino la acción por defecto del evento "click". En este caso el evento por defecto al hacer click en  un elemento <a> es llevarnos a dicho
enlace, y en su lugar la acción es coger el atributo href="carpeta/nombrefoto.jpg" para ser usado en el elemento <img> y pegar el resultado en el atributo src="ruta/imagen.jpg"
