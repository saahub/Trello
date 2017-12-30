var boton1 = document.getElementById('boton1');
var oculto = document.getElementById('oculto');

// con este evento estoy llamando al boton 1 
// al clickear se ejecuta la funcion 
boton1.addEventListener('click', function () {
//display none lo hace invisible 
	boton1.style.display = 'none';
//llamo al formulario , display block lo visualiza
	oculto.style.display = 'block';
});

/*
	var boton2 = document.createElement('input');
	boton2.setAttribute('type', 'boton2');
	boton2.setAttribute('value', 'Guardar');
	boton2.classList.add('btn', 'boton2');*/