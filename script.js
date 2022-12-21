const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": SECRET_KEY,
    "X-RapidAPI-Host": SECRET_HOST,
  },
};
const get_info = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      const sunrise_time = new Date(response.sunrise * 1000).toLocaleString();
      sunrise.innerHTML = sunrise_time.substring(sunrise_time.length, 12);
      //   sunrise.innerHTML = sunrise_time;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  get_info(city.value);
});

get_info("Bokaro");

const city_id = [
  bokaro_temp,
  bokaro_humidity,
  bokaro_wind_speed,
  bokaro_feels_like,
  bokaro_min_temp,
  bokaro_max_temp,
  bokaro_sunrise,
  bokaro_sunset,
  bokaro_cloud_pct,
  bokaro_wind_degrees,
  bhubaneswar_temp,
  bhubaneswar_humidity,
  bhubaneswar_wind_speed,
  bhubaneswar_feels_like,
  bhubaneswar_min_temp,
  bhubaneswar_max_temp,
  bhubaneswar_sunrise,
  bhubaneswar_sunset,
  bhubaneswar_cloud_pct,
  bhubaneswar_wind_degrees,
];

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bokaro",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    city_id[0].innerHTML = response.temp;
    city_id[1].innerHTML = response.humidity;
    city_id[2].innerHTML = response.wind_speed;
    city_id[3].innerHTML = response.feels_like;
    city_id[4].innerHTML = response.min_temp;
    city_id[5].innerHTML = response.max_temp;
    city_id[6].innerHTML = new Date(response.sunrise * 1000).toLocaleString();
    city_id[7].innerHTML = new Date(response.sunset * 1000).toLocaleString();
    city_id[8].innerHTML = response.cloud_pct;
    city_id[9].innerHTML = response.wind_degrees;

    city_id[10].innerHTML = response.temp;
    city_id[11].innerHTML = response.humidity;
    city_id[12].innerHTML = response.wind_speed;
    city_id[13].innerHTML = response.feels_like;
    city_id[14].innerHTML = response.min_temp;
    city_id[15].innerHTML = response.max_temp;
    city_id[16].innerHTML = new Date(response.sunrise * 1000).toLocaleString();
    city_id[17].innerHTML = new Date(response.sunset * 1000).toLocaleString();
    city_id[18].innerHTML = response.cloud_pct;
    city_id[19].innerHTML = response.wind_degrees;
  })
  .catch((err) => console.error(err));
