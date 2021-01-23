const wsUri = "wss://echo.websocket.org/";
const sub = document.querySelector("#s")
const geo = document.querySelector("#g")
const res = document.querySelector(".res")
websocket = new WebSocket(wsUri);
websocket.onmessage = function(evt) {
	let div = document.createElement("div")
	const val = document.querySelector(".inp").value
	div.innerHTML = `<div class="container">
  <img src="https://pbs.twimg.com/profile_images/1231386129254899714/yMTgsgRD_400x400.jpg" alt="Avatar" style="width:100%;">
  <p>RESPONSE: ${val}</p>
</div>`
	res.appendChild(div)
}

const error = () => {
   console.log('Невозможно получить ваше местоположение');
}

// Функция, срабатывающая при успешном получении геолокации
const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  let div = document.createElement("div")
  div.innerHTML = `<div class="container">
  <img src="https://pbs.twimg.com/profile_images/1231386129254899714/yMTgsgRD_400x400.jpg" alt="Avatar" style="width:100%;">
  <a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Map Link</a>
</div>`
  res.appendChild(div)
}

geo.addEventListener('click', () => {
  if (!navigator.geolocation) {
    console.log('Geolocation не поддерживается вашим браузером');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
sub.addEventListener('click', () => {
	let div = document.createElement("div")
	const val = document.querySelector(".inp").value
	div.innerHTML = `<div class="container darker">
  <img src="https://www.w3schools.com/howto/img_avatar.png" class="right" alt="Avatar" style="width:100%;">
  <p>${val}</p>
</div>`
	res.appendChild(div)
	websocket.send(val);
})