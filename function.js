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
function getTemp(city){
    var request = new XMLHttpRequest();
    let apiKey = '05cdb164b02a324453f48bae55a6b8b0';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    request.open('GET', url, true);
    request.onload = function () {
      var data = JSON.parse(request.response);
      var weather = {};
 	  weather.temp = data.main.temp;
      update(weather);
    }
    request.send();
}

function update(weather){
    document.getElementById('dxbT').innerHTML = weather.temp;
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

   getTemp("dubai");
  document.getElementById('indT').innerHTML = getTemp("dubai");
  document.getElementById('pakT').innerHTML = getTemp("dubai");
  document.getElementById('sriT').innerHTML = getTemp("dubai");
  document.getElementById('kwiT').innerHTML = countryTime('3');
  document.getElementById('melT').innerHTML = countryTime('10');
  document.getElementById('hngT').innerHTML = countryTime('8');
  document.getElementById('bngT').innerHTML = countryTime('6');
  document.getElementById('osnT').innerHTML = countryTime('2');
  document.getElementById('jedT').innerHTML = countryTime('3');
  document.getElementById('welT').innerHTML = countryTime('12');
}, 1000);
