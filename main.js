document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos
  const hamburguesaToggle = document.getElementById("modal-hamburguesa-toggle");
  const titular = document.getElementById("btn-titular");
  const cbu = document.getElementById("btn-cbu");
  const nombreApodo = document.getElementById("btn-nombreApodo");
  const btnBienvenida = document.getElementById("btn-bienvenida");
  const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
  const bienvenidaPubli = document.getElementById("btn-bienvenidaPubli");
  const acreditadas = document.getElementById("btn-acreditadas");
  const sistemaDeReferidos = document.getElementById("btn-sistemaDeReferidos");
  const derivar = document.getElementById("btn-derivar");
  const bono = document.getElementById("btn-bono");
  const captura = document.getElementById("btn-captura");
  const textoDeReferidos = document.getElementById("btn-textoDeReferidos");
  const retiro = document.getElementById("btn-retiro");
  const retiroExitoso = document.getElementById("btn-retiroExitoso");
  const premioEnviado = document.getElementById("btn-premioEnviado");
  const solicitarUsuario = document.getElementById("btn-solicitarUsuario");
  const demoraCargas = document.getElementById("btn-demoraCargas");
  const noIngreso = document.getElementById("btn-noIngreso");
  const soporte = document.getElementById("btn-soporte");
  const sistemaDePagos = document.getElementById("btn-sistemaDePagos");
  const overlay = document.getElementById("overlay");
  const overlayBienvenida = document.getElementById("overlay-bienvenida");
  const overlayRegistrar = document.getElementById("overlay-registrar");
  const form = document.querySelector("form"); // Seleccionamos el primer formulario
  const formBienvenida = document.querySelectorAll("form")[1]; // Seleccionamos el segundo formulario
  const formRegistrar = document.querySelectorAll("form")[2]; // Seleccionamos el tercer formulario

  let inputTitular, inputCBU, inputAlias, inputCierre;
  let firstVisit = true;

  // Funcion para copiar texto al portapapeles
  function copyToClipboard(text) {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = text;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
  }

  titular.addEventListener("click", () => {
    const texto = `Te dejo mi alias activo *${inputCierre}hs*, esta a nombre de *${inputTitular}* ❤`;
    copyToClipboard(texto);
  });

  cbu.addEventListener("click", () => {
    const texto = `${inputCBU}`;
    copyToClipboard(texto);
  });

  nombreApodo.addEventListener("click", () => {
    const texto = `Dejame tu *NOMBRE* o *APODO* para generarte un usuario y enviarte toda la información asi comenzás a JUGAR ☺`;
    copyToClipboard(texto);
  });

  bienvenidaPubli.addEventListener("click", () => {
    const texto = `Bienvenida/o a el numero…
🎲 *PRINCIPAL DE MONTANA* 🎲

Fichas cargadas, *MUCHOS EXITOS* 🤞🏼🍀

Ya podes ingresar a nuestra web: http://kingcash7.net 🎰

♦️ Te vamos a estar regalando en todas tus cargas diarias *50% de bono* 👏🏼🎁
`;
    copyToClipboard(texto);
  });

  acreditadas.addEventListener("click", () => {
    const texto = `Fichas cargadas! Muchísima suerte🍀

🎁 🔥 *NUEVA PROMO* 🔥 🎁

Por cada referido que venga de tu parte te regalamos *3.000 FICHAS GRATIS* 🤝

Sitio web: http://kingcash7.net`;
    copyToClipboard(texto);
  });

  sistemaDeReferidos.addEventListener("click", () => {
    const texto = `👥 *SISTEMA DE REFERIDOS* 👥

🔺 Por cada conocido que venga de tu parte y comience a jugar con nosotros te *REGALAMOS 3.000 FICHAS* 🎁🤑

*¿Como invitar a tus amigos?*

🔺 Compartiendo el siguiente texto que te vamos a enviar debajo con quien vos quieras! Tiene el link que redirige a nuestro whatsapp

🙌🏻🙌🏻 *SUPER FACIL* 🙌🏻🙌🏻`;
    copyToClipboard(texto);
  });

  derivar.addEventListener("click", () => {
    const texto = `Buenísimo!! Una pasito más 🙏🏼

*Para la carga de su saldo + el bonus escribime a mi WHATSAPP PRINCIPAL que le vamos a estar enviando debajo… Por favor envíenos:*

♦️Su usuario asignado 
♦️El comprobante de su transferencia 

+54 9 3329 38‑9624`;
    copyToClipboard(texto);
  });

  bono.addEventListener("click", () => {
    const texto = `‼ *LEER ATENTAMENTE* ‼

👩🏼‍💻  *SISTEMA DE BONIFICACIÓNES:*

🔺 La bonificación *NO* es retirable, pero te hace ganar fichas que SI lo son.

🔺 Casino en vivo *NO* juega con bonificaciones, antes de ingresar al sector te avisa con un cartel.

🔺 Hay algunos SLOTS que *NO* permiten el bono, otros que si. De igual forma, los que no permiten te avisan con un cartel, algunos no avisan pero te vas a dar cuenta porque no te figura el saldo TOTAL.`;
    copyToClipboard(texto);
  });

  captura.addEventListener("click", () => {
    const texto = `Mi nombre es Valu! 👩🏼‍💻 Agendame asi podes ver a mis estados de whatsapp ☺

*Para el bonus extra del 150% porfavor enviame captura de como me agendaste* ❤️`;
    copyToClipboard(texto);
  });

  textoDeReferidos.addEventListener("click", () => {
    const texto = `Montana te REGALA un 150% de bonificación en tu primer carga 🎁🤑 

wa.link/referidosvalumontana`;
    copyToClipboard(texto);
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
    copyToClipboard(texto);
  });

  retiroExitoso.addEventListener("click", () => {
    const texto = `✅ *SALDO RETIRADO* ✅ 

🔺 Premio en fila  🙌🏻💸

*Su premio ya se encuentra en el sector de pagos*. Le enviaremos el comprobante de pago cuando se haya efectuado! 🫡

*POR FAVOR, NO RESPONDA NI REACCIONE A ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO* 🙏🏻

*CONTESTAMOS POR ORDEN DE LLEGADA, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO, SEA PACIENTE PORFAVOR* 😊🙏🏻`;
    copyToClipboard(texto);
  });

  premioEnviado.addEventListener("click", () => {
    const texto = `🥳 *PREMIO ENVIADO*🥳

Felicitaciones! Espero que lo disfrutes mucho 🫶🏽

Mucha gracias por confiar en Montana 🫂

Saludos: Valu ❤`;
    copyToClipboard(texto);
  });

  solicitarUsuario.addEventListener("click", () => {
    const texto = `*Recordá porfavor 🙏🏼 ENVIAR DEBAJO DEL COMPROBANTE TU USUARIO ASIGNADO 🙏🏼 para agilizar la carga de fichas*`;
    copyToClipboard(texto);
  });

  demoraCargas.addEventListener("click", () => {
    const texto = `Le comento que al estar en publicidad podemos tener un poco de *demora*, *SEA PACIENTE PORFAVOR* 🙏🏼vamos a responderle lo mas rápido posible. Contestamos por órden de llegada, si envía muchos mensajes luego del comprobante se posicióna *ÚLTIMO EN LA FILA!!!*`;
    copyToClipboard(texto);
  });

  noIngreso.addEventListener("click", () => {
    const texto = `🚫 Tu transferencia todavía no impactó 🚫

*Tené en cuenta que a veces las transferencias se demoran.*  🙏🏻

*Por favor sea paciente, en cuanto impacte en nuestra cuenta, las fichas serán cargadas* 🙌🏻`;
    copyToClipboard(texto);
  });

  soporte.addEventListener("click", () => {
    const texto = `Por problemas e inconvenientes con la plataforma le solicitamos que *se comuníque con el whatsapp de soporte*. 📲

Puede encontrar el contacto en el menú de nuestra página, en la parte inferior del lado izquierdo donde figuran tres rayitas ☺️`;
    copyToClipboard(texto);
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
    copyToClipboard(texto);
  });

  // Función para abrir y cerrar el overlay del menú hamburguesa
  hamburguesaToggle.addEventListener("click", function () {
    if (overlay.style.display === "flex") {
      overlay.style.display = "none"; // Cerrar overlay del menú hamburguesa
    } else {
      overlay.style.display = "flex"; // Abrir overlay del menú hamburguesa
    }
    document.getElementById("titular").focus();
  });

  // Función para abrir y cerrar el overlay del menú bienvenida
  btnBienvenida.addEventListener("click", function () {
    if (overlayBienvenida.style.display === "flex") {
      overlayBienvenida.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayBienvenida.style.display = "flex"; // Abrir overlay del menú central
    }
    document.getElementById("usuarioBienvenida").focus();
  });

  // Función para abrir y cerrar el overlay del menú registrar usuario
  btnRegistrarUsuario.addEventListener("click", function () {
    if (overlayRegistrar.style.display === "flex") {
      overlayRegistrar.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayRegistrar.style.display = "flex"; // Abrir overlay del menú central
    }
    document.getElementById("usuarioRegistrar").focus();
  });

  // Cerrar el overlay si se hace clic fuera del formulario del primer menú
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay && !firstVisit) {
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del segundo menú
  overlayBienvenida.addEventListener("click", function (e) {
    if (e.target === overlayBienvenida) {
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del tercer menú
  overlayRegistrar.addEventListener("click", function (e) {
    if (e.target === overlayRegistrar) {
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
    }
  });

  // Prevenir el envío del formulario y cerrar el overlay
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlay.style.display = "none"; // Cerrar el overlay del primer menú
    inputTitular = document.getElementById("titular").value.trim();
    inputCBU = document.getElementById("cbu").value.trim();
    inputAlias = document.getElementById("alias").value.trim();
    inputCierre = document.getElementById("cierre").value.trim();
    form.reset(); // Limpiar los campos del formulario
    firstVisit = false;
  });

  // Prevenir el envío del formulario y cerrar el overlay del segundo menú
  formBienvenida.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayBienvenida.style.display = "none"; // Cerrar el overlay del segundo menú
    const user = document.getElementById("usuarioBienvenida").value.trim();
    const texto = `Listo! 🃏🎰 Ya podes ingresar a nuestra web:  http://kingcash7.net 

♦️ *Usuario:* ${user}

♦️ *Clave:* vip123

*Regalo de bienvenida 150% de bonus* 🎁 ❤️

💰 *CARGA MÍNIMA $1.000*

(Para mas info, solicita cronograma de pagos) 🏦

*Te dejo los datos de mi cuenta para transferir* 👇🏼

🔹 Nombre del Titular: *${inputTitular}*
🔹 CBU: *${inputCBU}*
🔹 Alias: *${inputAlias}*

🚨 Consulta *SIEMPRE* cbu activo🚨

Enviar debajo usuario y comprobante ⬇️`;
    copyToClipboard(texto);
    formBienvenida.reset(); // Limpiar los campos del formulario
  });

  // Prevenir el envío del formulario y cerrar el overlay del tercer menú
  formRegistrar.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayRegistrar.style.display = "none"; // Cerrar el overlay del tercer menú
    const user = document.getElementById("usuarioRegistrar").value.trim();
    const texto = `✅ USUARIO REGISTRAD@ ✅ 

♦️ *Usuario:* ${user}

♦️ *Clave:* vip123

Sitio web: http://kingcash7.net 🎰
`;
    copyToClipboard(texto);
    formRegistrar.reset(); // Limpiar los campos del formulario
  });
});
