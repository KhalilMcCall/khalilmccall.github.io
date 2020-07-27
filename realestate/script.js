var menubtn = document.querySelector('.menu');
var tspan = document.querySelector('#tspan');
var mspan = document.querySelector('#mspan');
var bspan = document.querySelector('#bspan');
var nav = document.querySelector('.nav');
var social = document.querySelectorAll('.s');



var tcont = document.querySelector('.bodyContainer')
var bcont = document.querySelector('.map');
var search = document.querySelector('.searchFor');



function exout(){
	tspan.classList.toggle('t');
	mspan.classList.toggle('m');
	bspan.classList.toggle('b');
	nav.classList.toggle('slide');
	social.forEach(i => i.classList.toggle('slideSocial'));
	  document.querySelector('body').classList.toggle('flow');
  
}

function slideUp(){


	tcont.classList.toggle('bct');
	bcont.classList.toggle('mapt');


}



menubtn.addEventListener('click', exout);


search.addEventListener('click', slideUp);