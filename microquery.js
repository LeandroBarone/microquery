// MicroQuery es una versión infinitesimal de jQuery.
// Es básicamente un wrapper de querySelectorAll con métodos que uso mucho.
// Ejemplos de uso:
// $('#elemento');
// $('#elemento p:first-child');
// $('#elem1, #elem2, #elem3');
// Admite los métodos:
// css, attr
// show, hide, toggle
// hasClass, showClass, removeClass, toggleClass
// toArray
// click
const $ = arg => new SelectedElements(arg);

// La clase SelectedElements es básicamente un array de objetos SelectedElement
// Los métodos del objeto devuelven el propio objeto para poder encadenarlos:
// $('#elemento').addClass('blink').show();
class SelectedElements {
	constructor(arg) {
		this.els = SelectedElements.queryToArray(arg);
	}

	// Toma un query
	// Devuelve un array de elementos obtenidos con querySelectorAll
	// SelectedElements.queryToArray('nav ul span');
	static queryToArray(arg) {
		const nodelist = document.querySelectorAll(arg);
		const nodelist_arr = Array.prototype.slice.call(nodelist);
		return nodelist_arr.map(el => new SelectedElement(el));
	}

	// Devuelve un array común con todos los elementos
	toArray() {
		return this.els.map(el => el.el);
	}

	// Devuelve o configura un atributo
	// Si hay varios elementos, devuelve el valor del primero
	// $('#elemento').attr('data-titulo');
	// $('#elemento').attr('data-titulo', 'hola, mundo!');
	attr(k, v) {
		if (typeof v === 'undefined')
			return (this.els.length) ? this.els[0].attr(k) : false;
		else
			this.els.forEach(el => el.attr(k, v));
	}

	// Devuelve o configura un estilo CSS
	// Si hay varios elementos, devuelve el valor del primero
	// $('#elemento').css('font-weight');
	// $('#elemento').css('color', 'yellow');
	css(k, v) {
		if (typeof v === 'undefined')
			return (this.els.length) ? this.els[0].css(k) : false;
		else
			this.els.forEach(el => el.css(k, v));
	}

	// Muestra u oculta los elementos
	// $('#elemento').show();
	show() {
		this.els.forEach(el => el.show());
		return this;
	}

	hide() {
		this.els.forEach(el => el.hide());
		return this;
	}

	toggle() {
		this.els.forEach(el => el.toggle());
		return this;
	}

	// Devuelve si todos los elementos tienen las clases especificadas
	// $('#elemento').hasClass('azul negrita');
	hasClass(arg) {
		return this.els.every(el => el.hasClass(arg));
	}

	// Agrega o quita una o más clases a todos los elementos
	// $('#elemento').addClass('azul negrita');
	addClass(arg) {
		this.els.forEach(el => el.addClass(arg));
		return this;
	}

	removeClass(arg) {
		this.els.forEach(el => el.removeClass(arg));
		return this;
	}

	toggleClass(arg) {
		this.els.forEach(el => el.toggleClass(arg));
		return this;
	}

	click(fn) {
		this.els.forEach(el => el.click(fn));
		return this;
	}
}

// La clase SelectedElement es simplemente un wrapper para un nodo del DOM
class SelectedElement {
	constructor(el) {
		this.el = el;
	}

	css(k, v) {
		if (typeof v === 'undefined')
			return this.el.style[k];
		else {
			this.el.style[k] = v;
			return this;
		}
	}

	attr(k, v) {
		if (typeof v === 'undefined')
			return this.el.getAttribute(k);
		else {
			this.el.setAttribute(k, v);
			return this;
		}
	}

	show() {
		if (this.attr('data-display'))
			this.css('display', this.attr('data-display'));
		else
			this.css('display', '');
		return this;
	}

	hide() {
		if (this.css('display') && this.css('display') !== 'none')
			this.attr('data-display', this.css('display'));
		this.css('display', 'none');
		return this;
	}

	toggle() {
		if (this.css('display') === 'none')
			this.show();
		else
			this.hide();
		return this;
	}

	hasClass(arg) {
		return arg.split(' ').every(c => this.el.classList.contains(c));
	}

	addClass(arg) {
		this.el.classList.add(arg.split(' '));
		return this;
	}

	removeClass(arg) {
		this.el.classList.remove(arg.split(' '));
		return this;
	}

	toggleClass(arg) {
		arg.split(' ').forEach(c => this.el.classList.toggle(c));
		return this;
	}

	click(fn) {
		this.el.addEventListener('click', fn);
		return this;
	}
}