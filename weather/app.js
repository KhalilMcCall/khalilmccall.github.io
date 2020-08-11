

var button = document.querySelector('.button');
var weatherPage = document.querySelector('.weatherPage');
var form =document.querySelector('.form');

var city = document.querySelector('.city');
var state = document.querySelector('.state');
var url;
button.disabled = true;



var conditions = {

	"Clear":{
	"saying": "Clear Skies Today!"
	},
	"Clouds":{
	"saying": "Kinda cloudy today."
	},
	"Drizzle":{
	"saying": "A lil drizzle never hurt no one!"
	},
	"Rain":{
	"saying": "Its raining today, bring an umbrella!"
	},
	"Thunderstorm":{
	"saying": "Its gonna Thunder!"
	},
	"Snow":{
	"saying": "perfect day to go skiing"
	}
};

function checkPut(){
if(city.value.length != 0 && state.value.length != 0){
state.parentElement.style.border ="3px solid green";
city.parentElement.style.border ="3px solid green";
		button.disabled = false;
		
}else{
	
	if(city.value.length == 0 ){
			city.parentElement.style.border ="3px solid red";
	}else{
		city.parentElement.style.border ="3px solid green";
	}
	
	if(state.value.length == 0){
		state.parentElement.style.border ="3px solid red"
	}else{
		state.parentElement.style.border ="3px solid green";
	}

	button.disabled = true;
}
}



function tog(){
weatherPage.classList.toggle('bottom');
form.classList.toggle("top");
}

function reset(){
document.querySelector('.date').textContent = "";
document.querySelector('.temp').textContent = "";
document.querySelector('.weatherPage').style.background = "#24252A";
document.querySelector('.weatherPage').style.backgroundPosition = "center";
document.querySelector('.saying').textContent = "";
document.querySelector('.img').textContent = "";


}


function weatherMe(weatherData){
		
	
		console.log(weatherData);
		console.log("this is the data!");

	
	console.log(weatherData["name"]);
	var namecon = '<i class="fas fa-map-pin fa-2x"></i><h1 class="nameText"></h1>';
document.querySelector('.name').innerHTML =  namecon;
		document.querySelector('.nameText').textContent =  '\xa0' + weatherData["name"];
document.querySelector('.img').innerHTML = '<img class="setImg" src="">';
	var date = new Date();
var offSet = date.getTimezoneOffset();
var cityMinutes = weatherData["timezone"] / 60;

date.setMinutes(date.getMinutes() + offSet + cityMinutes);
console.log(date);

var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

var hours = date.getHours();

var newformat = hours >= 12 ? 'PM' : 'AM';  

hours = hours % 12;

var minutes = date.getMinutes();

 minutes = minutes < 10 ? '0' + minutes : minutes; 

var newDate = days[date.getDay()] +" "+  months[date.getMonth()]+ " "+date.getDate() +" "+ date.getFullYear() +" "+ hours + ':' + minutes + ' ' + newformat; 


var imageSource = 'http://openweathermap.org/img/wn/'+weatherData["weather"][0]["icon"]+'@2x.png';

document.querySelector(".setImg").src = imageSource;

var background = "url('" +weatherData["weather"][0]["main"]+".jpg')";

document.querySelector(".saying").textContent = conditions[weatherData["weather"][0]["main"]]["saying"];

document.querySelector('.date').textContent = newDate;


document.querySelector('.temp').textContent = weatherData["main"]["temp"] +'\xB0';
document.querySelector('.weatherPage').style.background =  "none";//background;
document.querySelector('.weatherPage').style.backgroundPosition = "center";
}


button.addEventListener('click',function(){


var cityVal = city.value;
cityVal = cityVal.replace(/ +/g," ");
cityVal = cityVal.trim();
var stateVal = state.value;
stateVal = stateVal.replace(/ +/g," ");
stateVal = stateVal.trim();

console.log(cityVal);
console.log(stateVal);
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


















