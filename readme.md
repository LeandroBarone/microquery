# Microquery 0.1

Una versión infinitesimal de jQuery con fines didácticos.

Es básicamente un wrapper para queryElementAll.

## Uso

	// Seleccionamos un elemento y lo mostramos
	$("#contenedor .cabecera .icono").show();
	// Encadenamos métodos
	$('#titulo').addClass('blink').show();
	// Seleccionamos varios elementos
	const $elementos = $('#elem1, #elem2, #elem3');
	// Accedemos al array de elementos
	$elementos.toArray().map(el => el.remove());

## API

	$('#elem').toArray();
	$('#elem').css('propiedad', ['valor']);
	$('#elem').attr('atributo', ['valor']);
	$('#elem').show();
	$('#elem').hide();
	$('#elem').toggle();
	$('#elem').hasClass('clase1 [clase2 ...]');
	$('#elem').addClass('clase1 [clase2 ...]');
	$('#elem').removeClass('clase1 [clase2 ...]');
	$('#elem').toggleClass('clase1 [clase2 ...]');