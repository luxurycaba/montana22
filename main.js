let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let nombreApodo = document.getElementById("nombreApodo");
let bienvenida = document.getElementById("modal-button2");
let registrar = document.getElementById("modal-button");
let bienvenidaPubli = document.getElementById("bienvenidaPubli");
let acreditadas = document.getElementById("acreditadas");
let sistemaRecomendacion = document.getElementById("sistemaRecomendacion");
let derivar = document.getElementById("derivar");
let textoRecomendacion = document.getElementById("textoRecomendacion");
let captura = document.getElementById("captura");
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
  globalThis.inputCierre = document.getElementById("cierre").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0 && inputCierre != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `Te dejo mi alias activo *hasta las ${inputCierre}hs*, esta a nombre de *${inputNombre}* ❤`;
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
    document.getElementById("cierre").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

nombreApodo.addEventListener("click", () => {
  const texto = `Déjame un NOMBRE o APODO para generarte el usuario gratis asi comenzas a JUGAR ☺`;
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

  const texto = `✅ USUARIO REGISTRAD@ ✅ 

♦️ *Usuario:* ${user}

♦️ *Clave:* vip123

Sitio web: http://kingcash7.net 🎰
`;
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

  const texto = `Listo! 🃏🎰 Ya podes ingresar a nuestra web:  http://kingcash7.net 

♦️ *Usuario:* ${user}

♦️ *Clave:* vip123

*Regalo de bienvenida 150% de bonus* 🎁 ❤️

💰 *CARGA MÍNIMA $1.000*

(Para mas info, solicita cronograma de pagos) 🏦

*Te dejo los datos de mi cuenta para transferir* 👇🏼

🔹 Nombre del Titular: *${inputNombre}*
🔹 CBU: *${inputCBU}*
🔹 Alias: *${inputAlias}*

🚨 Consulta *SIEMPRE* cbu activo🚨

Enviar debajo usuario y comprobante ⬇️`;
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

bienvenidaPubli.addEventListener("click", () => {
  const texto = `Bienvenida/o a el numero…
🎲 *PRINCIPAL DE MONTANA* 🎲

Fichas cargadas, *MUCHOS EXITOS* 🤞🏼🍀

Ya podes ingresar a nuestra web: http://kingcash7.net 🎰

♦️ Te vamos a estar regalando en todas tus cargas diarias *50% de bono* 👏🏼🎁
`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

acreditadas.addEventListener("click", () => {
  const texto = `Fichas cargadas! Muchísima suerte🍀

🎁 🔥 *NUEVA PROMO* 🔥 🎁

Por cada referido que venga de tu parte te regalamos *3.000 FICHAS GRATIS* 🤝

Sitio web: http://kingcash7.net`;
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

🔺 Por cada conocido que venga de tu parte y comience a jugar con nosotros te *REGALAMOS 3.000 FICHAS* 🎁🤑

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

derivar.addEventListener("click", () => {
  const texto = `Buenísimo!! Una pasito más 🙏🏼

*Para la carga de su saldo + el bonus escribime a mi WHATSAPP PRINCIPAL que le vamos a estar enviando debajo… Por favor envíenos:*

♦️Su usuario asignado 
♦️El comprobante de su transferencia 

‪+54 9 3329 38‑9624`;
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

captura.addEventListener("click", () => {
  const texto = `Mi nombre es Valu! 👩🏼‍💻 Agendame asi podes ver a mis estados de whatsapp ☺

*Para el bonus extra del 100% porfavor enviame captura de como me agendaste* ❤️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

recomendacion.addEventListener("click", () => {
  const texto = `‼ *LEER ATENTAMENTE* ‼

👩🏼‍💻  *SISTEMA DE BONIFICACIÓNES:*

🔺 La bonificación *NO* es retirable, pero te hace ganar fichas que SI lo son.

🔺 Casino en vivo *NO* juega con bonificaciones, antes de ingresar al sector te avisa con un cartel.

🔺 Hay algunos SLOTS que *NO* permiten el bono, otros que si. De igual forma, los que no permiten te avisan con un cartel, algunos no avisan pero te vas a dar cuenta porque no te figura el saldo TOTAL.`;
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
  const texto = `✅ *SALDO RETIRADO* ✅ 

🔺 Premio en fila  🙌🏻💸

*Su premio ya se encuentra en el sector de pagos*. Le enviaremos el comprobante de pago cuando se haya efectuado! 🫡

*POR FAVOR, NO RESPONDA NI REACCIONE A ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO* 🙏🏻

*CONTESTAMOS POR ORDEN DE LLEGADA, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO, SEA PACIENTE PORFAVOR* 😊🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `🥳 *PREMIO ENVIADO*🥳

Felicitaciones! Espero que lo disfrutes mucho 🫶🏽

Mucha gracias por confiar en Montana 🫂

Saludos: Valu ❤`;
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
  const texto = `*Horarios de retiros* : 

♦️ Días hábiles: De 13:00hs a 00:00hs 
♦️ Fines de semana: De 13:00hs a 02:00hs

*Limite de retiros*:

♦️Mínimo de retiro: $2.000
♦️Máximo de retiro por día: $100.000

 *Importante* ‼⬇

♦️ Usuario que retire desde $2.000 a $20.000 puede realizar un retiro mas, luego se tiene que cumplir 24hs para volver a retirar

♦️ Para retiros superiores a $20.000, se permite solo un retiro cada 24 horas.
`;
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
