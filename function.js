//Time Function
function countryTime(offset) {
  d = new Date();
  localTime = d.getTime();
  localOffset = d.getTimezoneOffset() * 60000;
  utc = localTime + localOffset;
  conTime = utc + (3600000*offset);
  nd = new Date(conTime);
  var hrs = nd.getHours();
  var min = nd.getMinutes();
  var ampm = hrs >= 12 ? 'PM' : 'AM';
  hrs = hrs % 12;
  hrs= hrs ? hrs : 12;
  hrs = hrs < 10 ? '0'+hrs : hrs;
  min = min < 10 ? '0'+min : min;
  var strTime = hrs + ':' + min + ':'+ nd.getSeconds()+ ' ' + ampm;
  return strTime;
}

//Temperature Function
function getTemp(city,code){
    var request = new XMLHttpRequest();
    let apiKey = '7c40fe2f7caa73062387a705a17b6205';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    request.open('GET', url, true);
    request.onload = function () {
      var data = JSON.parse(request.response);
      var weather = {};
 	    //weather.temp = data.main.temp;
      //weather.icon = data.weather[0].icon;
 	    weather.temp = 40;
      // weather.icon = "01d";
      update(weather,code);
    }
    request.send();
}

function update(weather,code){
    document.getElementById(code).innerHTML = Math.floor(weather.temp).toString() + " °C";

    var iconStr = "/icon/"+weather.icon.toString()+".png";
    console.log(code+"i");
    document.getElementById(code+"i").src = iconStr;
}


setInterval(function()
{
  document.getElementById('dxb').innerHTML = countryTime('4');
  document.getElementById('ind').innerHTML = countryTime('5.5');
  document.getElementById('pak').innerHTML = countryTime('5');
  document.getElementById('sri').innerHTML = countryTime('5.5');
  document.getElementById('kwi').innerHTML = countryTime('3');
  document.getElementById('mel').innerHTML = countryTime('10');
  document.getElementById('hng').innerHTML = countryTime('8');
  document.getElementById('bng').innerHTML = countryTime('6');
  document.getElementById('osn').innerHTML = countryTime('2');
  document.getElementById('jed').innerHTML = countryTime('3');
  document.getElementById('wel').innerHTML = countryTime('12');
  document.getElementById("dxbTi").src = "icon/01n.png";
  document.getElementById("dxbTi").height = "70";
  document.getElementById("dxbTi").width = "70";
}, 1000);

setInterval(function(){
    getTemp("dubai","dxbTi");
    getTemp("delhi","indTi");
    getTemp("karachi","pakT");
    getTemp("colombo,lk","sriT");
    getTemp("Al Aḩmadī","kwiT");
    getTemp("Melbourne,au","melT");
    getTemp("hong kong,cn","hngT");
    getTemp("Chittagong,BD","bngT");
    getTemp("Osnabrück,de","osnT");
    getTemp("jeddah,sa","jedT");
    getTemp("wellington,nz","welT");
},5000);
