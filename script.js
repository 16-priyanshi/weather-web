

var button=document.querySelector('.button')
var input=document.querySelector('.form-control')
var names=document.querySelector('.name');
var desc=document.querySelector('.description');
var temp=document.querySelector('.temp');
var humidity=document.querySelector('.humidity');
var pressure=document.querySelector('.pressure');



button.addEventListener('click',function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+ input.value +'&appid=89ee6dea1111d223fb41c1e0ff1645dd')
 .then(response => response.json())
 .then(data => {
   var namevalue= data['name'];
   var humidityvalue=data['main']['humidity'] + " %"; 
   var pressurevalue=data['main']['pressure'] + " mb";
  
   var descvalue= data['weather'][0]['description'];
   var tempvalue= data['main']['temp']-273.15;


   names.innerHTML= namevalue;
   temp.innerHTML= tempvalue.toFixed(2) + " °C";
   desc.innerHTML= descvalue;
   humidity.innerHTML=humidityvalue;
   pressure.innerHTML=pressurevalue;

 })
 
 .catch(err => alert("Please enter valid city name"))

})

