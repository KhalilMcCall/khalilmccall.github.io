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

button.addEventListener('click',function(){

var cityVal = city.value;
var stateVal = state.value;
 url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityVal+','+stateVal+',us&units=imperial&appid=1997240d660c8ec4c84f3c60d31c6079';

var nameText = document.querySelector('.nameText');
tog();

fetch(url)
.then(res => {
	if(res.ok){
		console.log("SUCCESS!");
		return res.json()
	}else{
		console.log("NO SUCCESS");
		document.querySelector('.weatherPage').style.background =  "none";
		document.querySelector(".name").textContent = "Sorry we couldn't find that city try again.";
		reset();
	}
})
.then(data =>{
	weatherMe(data);
	console.log("weather me");
})
//.catch( error  => console.log('ERROR'))
})



















