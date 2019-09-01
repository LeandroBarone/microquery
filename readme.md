# Microquery 0.1

Una versión infinitesimal de jQuery con fines didácticos.

Es básicamente un wrapper para queryElementAll.

## Uso

```javascript
// Seleccionamos un elemento y lo mostramos
$("#contenedor .cabecera .icono").show();
// Encadenamos métodos
$('#titulo').addClass('blink').show();
// Seleccionamos varios elementos
const $elementos = $('#elem1, #elem2, #elem3');
// Accedemos al array de elementos
$elementos.toArray().map(el => el.remove());
```

## API

```javascript
// Devuelve un array con todos los elementos
$('#elem').toArray();
// Devuelve o establece una propiedad CSS
$('#elem').css('propiedad', ['valor']);
// Devuelve o establece un atributo
$('#elem').attr('atributo', ['valor']);
// Muestra u oculta los elementos
$('#elem').show();
$('#elem').hide();
$('#elem').toggle();
// Añade o quita clases
$('#elem').hasClass('clase1 [clase2 ...]');
$('#elem').addClass('clase1 [clase2 ...]');
$('#elem').removeClass('clase1 [clase2 ...]');
$('#elem').toggleClass('clase1 [clase2 ...]');
```