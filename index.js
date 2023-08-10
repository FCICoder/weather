let searchInput = document.getElementById("searchYourLocation");
let countryData = document.getElementById("countryData");
let searchBtn   = document.getElementById('searchBtn')

let timing1 =`<img id="img1" src="https://cdn.weatherapi.com/weather/64x64/night/113.png" alt="" width="90">`
let timing2 =`<img id="img2" src="https://cdn.weatherapi.com/weather/64x64/day/113.png" alt="" width="48">`

console.log(timing1);
let dataList =[];
let currentTime;
async function getTemp(index) {
        let temp = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=823dac18a67e4b0a980221005230208&q=${index}&days=3&aqi=no&alerts=no`);
        let tempData =await temp.json();

        dataList =  tempData;
        let today = new Date(dataList.location.localtime);
        let weekday = new Date(dataList.location.localtime).toLocaleDateString('en-EN', { weekday: 'long' });
        let monthGet = new Date(dataList.location.localtime).toLocaleDateString('en-us', {day:"numeric",month:"long"});
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
         let nextDay = days[today.getDay() +1];
         let dayAfterTommoro = days[today.getDay() +2];
         console.log(dayAfterTommoro);
         if(dayAfterTommoro === undefined || nextDay === undefined){
         dayAfterTommoro = days[0]
         }
         console.log(dayAfterTommoro);
         let date = new Date(); 
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        console.log(hh);
         if(hh>=7&&hh<19){
            let trs = `
        <div id="item" class="col-md-4 bg-tranparnt ">
        
        <div class="weatherInfo-item ">
          <div class="head  d-flex justify-content-around p-1 text-light">
            <div id="today">${weekday}</div>
            <div id="month">${monthGet}</div>
          </div>
          <div class="body p-4">
            <div class="country text-white ">${dataList.location.name}</div>
            <div class="temperature d-flex align-items-center">
              <div id="degree" class="text-white fw-bold">${dataList.current.temp_c}<sup>o</sup>c</div>${timing2}
              <img src ="${dataList.current.condition.icon}"  alt= ""/>
            </div>
            <div class="weatherStatus text-primary mb-4">
              ${dataList.current.condition.text}
            </div>
            <span class="text-white me-2"><img src="./images/icon-umberella.png" alt="" class="me-1">${dataList.current.cloud}%</span>
            <span class="text-white me-2"><img src="./images/icon-wind.png" alt="" class="me-1">${dataList.current.vis_km}km/h</span>
            <span class="text-white"><img src="./images/icon-compass.png" alt="" class="me-1">${dataList.current.wind_dir}</span>
          </div>
        </div>
      </div>
      <div id="item1" class="col-md-4">
        <div class="weatherInfo-item bg-tranparnt text-light">
            <div id="today2" class="head  text-center p-1">${nextDay}</div>
          <div class="body p-2 text-center">
          ${timing2} 
            <div class="high-temperature fs-2 text-white mt-3">${dataList.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</div>
            <div class="low-temperature text-white">${dataList.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div>
            <div class="weatherStatus text-primary mb-3 mt-4">
             ${dataList.forecast.forecastday[1].day.condition.text}
            </div>
            </div>
          </div>
        </div>
        <div id="item2" class="col-md-4">
        <div class="weatherInfo-item bg-tranparnt">
            <div id="today2" class="head  text-center p-1 text-light">${dayAfterTommoro}</div>
          <div class="body p-2 text-center">
          ${timing2}
            <div class="high-temperature fs-2 text-white mt-3">${dataList.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</div>
            <div class="low-temperature text-white">${dataList.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div>
            <div class="weatherStatus text-primary mb-3 mt-4">
             ${dataList.forecast.forecastday[2].day.condition.text}
            </div>
            </div>
          </div>
        </div>
        `
        
        countryData.innerHTML = trs;
    }else if(hh>=19&&hh<7){
            let trs = `
            <div id="item" class="col-md-4 bg-tranparnt ">
            <div>${currentTime12()}</div>
            <div class="weatherInfo-item ">
              <div class="head  d-flex justify-content-around p-1 text-light">
                <div id="today">${weekday}</div>
                <div id="month">${monthGet}</div>
              </div>
              <div class="body p-4">
                <div class="country text-white ">${dataList.location.name}</div>
                <div class="temperature d-flex align-items-center">
                  <div id="degree" class="text-white fw-bold">${dataList.current.temp_c}<sup>o</sup>c</div>${timing1}
                  <img src ="${dataList.current.condition.icon}"  alt= ""/>
                </div>
                <div class="weatherStatus text-primary mb-4">
                  ${dataList.current.condition.text}
                </div>
                <span class="text-white me-2"><img src="./images/icon-umberella.png" alt="" class="me-1">${dataList.current.cloud}%</span>
                <span class="text-white me-2"><img src="./images/icon-wind.png" alt="" class="me-1">${dataList.current.vis_km}km/h</span>
                <span class="text-white"><img src="./images/icon-compass.png" alt="" class="me-1">${dataList.current.wind_dir}</span>
              </div>
            </div>
          </div>
          <div id="item1" class="col-md-4">
            <div class="weatherInfo-item bg-tranparnt">
                <div id="today2" class="head  text-center p-1 text-light">${nextDay}</div>
              <div class="body p-2 text-center">
              ${timing1}
                <div class="high-temperature fs-2 text-white mt-3">${dataList.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>c</div>
                <div class="low-temperature text-white">${dataList.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div>
                <div class="weatherStatus text-primary mb-3 mt-4">
                 ${dataList.forecast.forecastday[1].day.condition.text}
                </div>
                </div>
              </div>
            </div>
            <div id="item2" class="col-md-4">
            <div class="weatherInfo-item bg-tranparnt">
                <div id="today2" class="head  text-center p-1 text-light">${dayAfterTommoro}</div>
              <div class="body p-2 text-center">
              ${timing1}
                <div class="high-temperature fs-2 text-white mt-3">${dataList.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>c</div>
                <div class="low-temperature text-white">${dataList.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div>
                <div class="weatherStatus text-primary mb-3 mt-4">
                 ${dataList.forecast.forecastday[2].day.condition.text}
                </div>
                </div>
              </div>
            </div>
            `
            countryData.innerHTML = trs;
         }
       
        
       
}

console.log(currentTime);

getTemp('cairo');


searchBtn.addEventListener('click', async function(){
  await getTemp(searchYourLocation.value.toLowerCase());
})

function currentTime12() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
     
     document.getElementById('clock').innerHTML= time; 
    }
    setInterval(currentTime12,1000)
  



