var home = document.querySelector('#home');

var portfolio =document.querySelector('#portfolio');

var btn = document.querySelector('.slide');

var one = document.querySelector('.one');


function slide(){


portfolio.scrollIntoView({behavior: "smooth"});



}
function tog(){

	one.firstElementChild.src ="weather.gif";
}
function ttog(){

	one.firstElementChild.src ="weather.png";
}

btn.addEventListener('click', slide);

one.addEventListener('mouseover', tog);
one.addEventListener('mouseout', ttog);