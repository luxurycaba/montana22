let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let nombreApodo = document.getElementById("nombreApodo");
let bienvenida = document.getElementById("modal-button2");
let registrar = document.getElementById("modal-button");
let fichasBonificacion = document.getElementById("fichasBonificacion");
let fichasRecomendacion = document.getElementById("fichasRecomendacion");
let sistemaRecomendacion = document.getElementById("sistemaRecomendacion");
let textoRecomendacion = document.getElementById("textoRecomendacion");
let recomendacion = document.getElementById("recomendacion");
let retiro = document.getElementById("retiro");
let retiroExitoso = document.getElementById("retiroExitoso");
let premioEnviado = document.getElementById("premioEnviado");
let solicitarUsuario = document.getElementById("solicitarUsuario");
let demoraCargas = document.getElementById("demoraCargas");
let noIngreso = document.getElementById("noIngreso");
let soporte = document.getElementById("soporte");
let sistemaDePagos = document.getElementById("sistemaDePagos");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];
let usuario2 = document.getElementById("usuario2");
let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("pad-button-reg2");
let span2 = document.getElementsByClassName("close2")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  globalThis.inputNombre = document.getElementById("name").value;
  globalThis.inputCBU = document.getElementById("number").value;
  globalThis.inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `Datos de nuestra cuenta:

🔺 Nombre del Titular: *${inputNombre}*
🔺 CBU: *${inputCBU}*
🔺 Alias: *${inputAlias}*

✅ SI QUIERE QUE SEA MAS RÁPIDA LA CARGA ENVIENOS EL USUARIO ASIGNADO DEBAJO DEL COMPROBANTE

INGRESÁ ACÁ PARA JUGAR:
https://citygame.casino`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

nombreApodo.addEventListener("click", () => {
  const texto = `Buenas! Que tal ✨ Para comenzar a jugar con nosotros solicito su nombre o usuario que le gustaria tener…`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;

  const texto = `Registrad@: ✅ 

👩‍💻 *Usuario:* 
🔐 *Clave:* vip123
 
Sitio web: https://montana22.com`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});


bienvenida.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario2").value;
  console.log(user);

  const texto = `Bienvenido/a … Mi nombre es Valu y voy ser tu MEJOR CAJERA de confianza! 👩🏼‍💻🎉

Sitio web: https://montana22.com ⭐️ 

🎁 REGALO de bienvenida 100% de BONO 🎁

👩‍💻 *Usuario* : ${user}
🔐 *Clave* : vip123
💰 CARGA MÍNIMA $1000 

🚨 RECORDÁ CONSULTAR CVU ACTIVO SIEMPRE ANTES DE TRANSFERIR 🚨

Datos de nuestra cuenta:
🔹 Nombre del Titular: *${inputNombre}*
🔹 CBU: *${inputCBU}*
🔹 Alias: *${inputAlias}*

✅ *ENVIAR DEBAJO COMPROBANTE Y USUARIO ASIGNADO*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario2").value = "";

  modal2.style.display = "none";
});

fichasBonificacion.addEventListener("click", () => {
  const texto = `📲 Agéndanos para poder acceder a nuestros estados donde subimos: bonificación, sorteos, premios y mucho mas ‼️💥

Plataforma: https://montana22.com ⭐`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

fichasRecomendacion.addEventListener("click", () => {
  const texto = `Acreditadas! ✅ MUCHOS EXITOS🤞🏼
sitio web: https://montana22.com ✨

Recordá que en todas tus *CARGAS DIARIAS* tenes *50% DE BONO* 🔥 

⬇️ ‼️*IMPORTANTE* ‼️⬇️

Agéndanos para poder acceder a nuestras promociones diarias 📲🎁`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaRecomendacion.addEventListener("click", () => {
  const texto = `👥 *SISTEMA DE REFERIDOS* 👥

🔺 Por cada conocido que venga de tu parte y comience a jugar con nosotros te *REGALAMOS 1500 FICHAS* 🎁🤑

*¿Como invitar a tus amigos?*

🔺 Compartiendo el siguiente texto que te vamos a enviar debajo con quien vos quieras! Tiene el link que redirige a nuestro whatsapp

🙌🏻🙌🏻 *SUPER FACIL* 🙌🏻🙌🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

textoRecomendacion.addEventListener("click", () => {
  const texto = `Montana te REGALA un 100% de bonificación en tu primer carga 🎁🤑 

wa.link/referidosmontana`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

recomendacion.addEventListener("click", () => {
  const texto = `🎁 *Sistema de Referidos* 🎁
¡Recibimos una recomendación tuya! 🤩🙌🏼 

¿Cómo canjear tus fichas?

Simplemente escríbenos apartir de las 10 am a 12 am  para solicitar tus fichas correspondientes.
A continuación, envíanos los números de tus amigos a quienes invitaste para que podamos verificar que hayan jugado.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiro.addEventListener("click", () => {
  const texto = `*Cómo retirar tu 💰? envieme:*

1- Monto de su premio
2- Su cbu o alias
3- Nombre completo del titular que recibe la transferencia

🔔 Recordatorio: *LA BONIFICACIÓN NO ES RETIRABLE* ‼️

Como ver cuanto puedo retirar?

PASO 1️⃣ : MENÚ
PASO 2️⃣ : MI CUENTA
PASO 3️⃣ : SALDO

O desde la parte superior derecha donde esta la silueta de un usuario.

Una vez que retiramos las fichas, el mismo sistema de la pagina también baja la bonificación.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiroExitoso.addEventListener("click", () => {
  const texto = `✅ FICHAS RETIRADAS ✅ 

🔺 Premio en fila  🙌🏻💸
*Su premio ya se encuentra en el sector de pagos*. Le enviaremos el comprobante de pago cuando se haya efectuado! 

*POR FAVOR, NO RESPONDA NI REACCIONE A ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO, SEA PACIENTE PORFAVOR*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `✨🥂🎉*PREMIO ENVIADO*🎉🥂✨

Felicitaciones‼️ Espero que lo disfrutes …

Mucha gracias por confiar en MONTANA ♥️
recordá que vamos a estar dando *50% de bonificación* en todas tus cargas próximas…

Saludos: Valu ✨`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitarUsuario.addEventListener("click", () => {
  const texto = `*Recordá porfavor 🙏🏼 ENVIAR DEBAJO DEL COMPROBANTE TU USUARIO ASIGNADO 🙏🏼 para agilizar la carga de fichas*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demoraCargas.addEventListener("click", () => {
  const texto = `Le comento que al estar en publicidad podemos tener un poco de *demora*, *SEA PACIENTE PORFAVOR* 🙏🏼vamos a responderle lo mas rápido posible. Contestamos por órden de llegada, si envía muchos mensajes luego del comprobante se posicióna *ÚLTIMO EN LA FILA!!!*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `🚫 Tu transferencia todavía no impactó 🚫

*Tené en cuenta que a veces las transferencias se demoran.*  🙏🏻

*Por favor sea paciente, en cuanto impacte en nuestra cuenta, las fichas serán cargadas* 🙌🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `Por problemas e inconvenientes con la plataforma le solicitamos que *se comuníque con el whatsapp de soporte*. 📲

Puede encontrar el contacto en el menú de nuestra página, en la parte inferior del lado izquierdo donde figuran tres rayitas ☺️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `👩🏼‍💻 *SISTEMA DE PAGOS MONTANA:*
 Horarios de Retiro : 
🔺Días hábiles: De 12:00hs a 12:00hs 
🔺Fines de semana: De 12:00hs a 02:00hs

 Límites de Retiro :
🔺Mínimo de Retiro: $2.000
🔺Máximo de Retiro por Día: $100.000

‼ *IMPORTANTE* ‼

🔺 Usuario que retire desde $2.000 a $20.000 puede realizar un retiro mas, luego se tiene que cumplir 24hs para volver a retirar

🔺Para retiros superiores a $20.000, se permite solo un retiro cada 24 horas.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

btn2.onclick = function () {
  modal2.style.display = "block";
  usuario2.focus();
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    event.target.style.display = "none";
  }
};
