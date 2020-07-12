

var button = document.querySelector('.button');

var city = document.querySelector('.city');
var state = document.querySelector('.state');
var form =document.querySelector('.form');
var weatherPage = document.querySelector('.weatherPage');
var nameText = document.querySelector('.nameText');

/*weatherPage.classList.add('bottom');
form.classList.toggle("top");*/


/*
var weatherData = {
"coord": {
"lon": -81.66,
"lat": 30.33
},
"weather": [
{
"id": 211,
"main": "Thunderstorm",
"description": "thunderstorm",
"icon": "11d"
}
],
"base": "stations",
"main": {
"temp": 89.46,
"feels_like": 91.33,
"temp_min": 87.8,
"temp_max": 93.99,
"pressure": 1013,
"humidity": 58
},
"visibility": 16093,
"wind": {
"speed": 12.75,
"deg": 270
},
"clouds": {
"all": 75
},
"dt": 1594234586,
"sys": {
"type": 1,
"id": 5093,
"country": "US",
"sunrise": 1594204290,
"sunset": 1594254702
},
"timezone": -14400,
"id": 4160021,
"name": "Jacksonville",
"cod": 200
};
*/

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














button.addEventListener('click',function(){

weatherPage.classList.toggle('bottom');
form.classList.toggle("top");

fetch('https://api.openweathermap.org/data/2.5/weather?q='+city.value+','+state.value+'&units=imperial&appid=1997240d660c8ec4c84f3c60d31c6079')
.then(res => {
	if(res.ok){
		console.log("SUCCESS!");
		return res.json()
	}else{
		console.log("NO SUCCESS");
	}
})
.then(data =>{
	console.log(data)
	var weatherData = data;
		document.querySelector('.nameText').textContent = weatherData["name"];

	var date = new Date();
var offSet = date.getTimezoneOffset();
var cityMinutes = weatherData["timezone"] / 60;

date.setMinutes(date.getMinutes() + offSet + cityMinutes);
console.log(date);

var days = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
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
document.querySelector('.nameText').textContent = weatherData["name"];
document.querySelector('.temp').textContent = weatherData["main"]["temp"] +'\xB0';
document.querySelector('.weatherPage').style.background = background;
document.querySelector('.weatherPage').style.backgroundPosition = "center";
})
.catch( error  => console.log('ERROR'))

})
