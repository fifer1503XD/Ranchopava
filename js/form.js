document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //Ingresar el numero xd
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
let telefono = "573209880247";

  let nombre = document.querySelector("#nombre").value;
  let telefono = document.querySelector("#telefono").value;
  let correo = document.querySelector("#correo").value;
  let mensaje = document.querySelector("#mensaje").value;
 
 

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_RANCHO DE PAVA_*%0A
		*Reservas*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${nombre}%0A
		*¿Cual es tu telefono?*%0A
		${telefono}%0A
		*¿Cual es tu correo?*%0A
		${correo}%0A
    *¿Cuál es el servicio que se desea realizar?*%0A
		${mensaje}`;
	

    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${nombre}`;
      return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${nombre}`;

  window.open(url);
});
