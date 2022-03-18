let btnBuscar = document.querySelector("#boton");

btnBuscar.addEventListener("click", (event) => {
  event.preventDefault();
  let input = document.querySelector("#identificaElInput");
  let ciudad = input.value;

  console.log(ciudad);

  fetch (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=3624d2bd2d6848c78874340a683d5840&lang=es`)
  .then(respuesta => respuesta.json())
  .then(respuesta => {

      document.querySelector("#feels").innerHTML = respuesta.main.feels_like
      document.querySelector("#wind").innerHTML = respuesta.wind.speed
      document.querySelector("#humi").innerHTML = respuesta.main.humidity
      document.querySelector("#press").innerHTML = respuesta.main.pressure
      document.querySelector("#visi").innerHTML = respuesta.visibility
      document.querySelector("#descri").innerHTML = respuesta.weather[0].description
      document.querySelector("#pais").innerHTML = respuesta.sys.country
      document.querySelector("#cityName").innerHTML = respuesta.name
      document.querySelector("#temp").innerHTML = respuesta.main.temp

  })
  .catch( err => console.log(err))
  
});