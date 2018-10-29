var previousActiveElementId = 'home';
var textClass = document.querySelector('.text');

function changeContent() {
	var elem = document.querySelector('#pContext');
	var ev = event.target;
	var par = ev.parentElement;

	document.addEventListener('click', (event) => {
		var home = 'home',
			profile = 'profile',
			contact = 'contact';
			if(ev.id === home || par.id === home) {
				addRemoveClass(ev);
				rem();
				elem.innerHTML = 'Home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home home';
				previousActiveElementId = home;
			} else if (ev.id === profile || par.id === profile) {
				addRemoveClass(ev);
				elem.innerHTML = 'Profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile profile';
				rem();
				changeBeforePosition();
				previousActiveElementId = profile;
			} else if (ev.id === contact || par.id ===contact) {
				addRemoveClass(ev);
				elem.innerHTML = 'Contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact contact';
				rem();
				changeBeforePosition2();
				previousActiveElementId = contact;
			}
		});
}

function addRemoveClass(variable) {
	var element = document.querySelector('#' + previousActiveElementId);
	variable.classList.add("isActive");
	element.classList.remove("isActive");
}

function changeBeforePosition() {
	var element = document.querySelector('#before');
	element.classList.add("whatever");

	var element = document.querySelector('#after');
	element.classList.add("changeWidth");
}

function changeBeforePosition2() {
	var element = document.querySelector('#before');
	element.classList.add("whatever2");
}

function rem() {
	var element = document.querySelector('#before');
	element.classList.remove("whatever2");
	element.classList.remove("whatever");

	var element = document.querySelector('#after');
	element.classList.remove("changeWidth");

}


//передать как параметр марджин и видс, реализовать этот метод для случая 2 и 3