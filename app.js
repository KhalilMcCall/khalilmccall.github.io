

var button = document.querySelector('.button');
var weatherPage = document.querySelector('.weatherPage');
var form =document.querySelector('.form');
var city;
var state;
var url;


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
document.querySelector(".setImg").src = "";

}


function weatherMe(weatherData){
		
	
		console.log(weatherData);
		console.log("this is the data!");

	
	console.log(weatherData["name"]);
		document.querySelector('.nameText').textContent = weatherData["name"];

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

document.querySelector('.nameText').textContent = weatherData["name"];
document.querySelector('.temp').textContent = weatherData["main"]["temp"] +'\xB0';
document.querySelector('.weatherPage').style.background = background;
document.querySelector('.weatherPage').style.backgroundPosition = "center";
}


button.addEventListener('click',function(){

city = document.querySelector('.city');
 state = document.querySelector('.state');
 url = 'https://api.openweathermap.org/data/2.5/weather?q='+city.value+','+state.value+'&units=imperial&appid=1997240d660c8ec4c84f3c60d31c6079';

var nameText = document.querySelector('.nameText');
tog();

fetch(url)
.then(res => {
	if(res.ok){
		console.log("SUCCESS!");
		return res.json()
	}else{
		console.log("NO SUCCESS");
		document.querySelector(".nameText").textContent = "Sorry we couldn't find that city try again.";
		reset();
	}
})
.then(data =>{
	weatherMe(data);
	console.log("weather me");
})
//.catch( error  => console.log('ERROR'))
})


















