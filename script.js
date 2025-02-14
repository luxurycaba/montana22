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
  const referidoAcreditado = document.getElementById("btn-referidoAcreditado");
  const noIngreso = document.getElementById("btn-noIngreso");
  const soporte = document.getElementById("btn-soporte");
  const sistemaDePagos = document.getElementById("btn-sistemaDePagos");
  const overlay = document.getElementById("overlay");
  const overlayBienvenida = document.getElementById("overlay-bienvenida");
  const overlayRegistrar = document.getElementById("overlay-registrar");
  const overlayRetiradas = document.getElementById("overlay-retiradas");
  const overlayReferidoAcreditado = document.getElementById(
    "overlay-referidoAcreditado"
  );
  const form = document.querySelector("form"); // Seleccionamos el primer formulario
  const formBienvenida = document.querySelectorAll("form")[1]; // Seleccionamos el segundo formulario
  const formRegistrar = document.querySelectorAll("form")[2]; // Seleccionamos el tercer formulario
  const formRetiradas = document.querySelectorAll("form")[3]; // Seleccionamos el cuarto formulario
  const formReferidoAcreditado = document.querySelectorAll("form")[4]; // Seleccionamos el quinto formulario

  let inputTitular, inputCBU, inputAlias;
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
    const texto = `Te dejo mi alias activo, para que puedas transferir, esta a nombre de *${inputTitular}* 🍀💯

🟢 *ALIAS*: ${inputAlias}`;
    copyToClipboard(texto);
  });

  cbu.addEventListener("click", () => {
    const texto = `${inputCBU}`;
    copyToClipboard(texto);
  });

  nombreApodo.addEventListener("click", () => {
    const texto = `Hola! 😊 para generarte usuario déjame tu nombre o apodo 🙏🏻`;
    copyToClipboard(texto);
  });

  bienvenidaPubli.addEventListener("click", () => {
    const texto = `Bienvenida/o a el numero oficial de *MONTANA* 💯🤑

Cargadas, *muchos exitos* 🤞🏼🍀

Ya podes ingresar a nuestra web: http://kingcash7.net 🎰

♦️ Te vamos a estar regalando en todas tus cargas diarias *50% de bono* 👏🏼🎁
`;
    copyToClipboard(texto);
  });

  acreditadas.addEventListener("click", () => {
    const texto = `Cargadas! Muchos exitoss 🍀

Sitio web: http://kingcash7.net

🎁 🔥 *PROMO EXTRA* 🔥 🎁

Por cada referido que venga de tu parte te regalamos *3.000 fichas GRATIS* 🤝

*Numero de respaldo*: +54 9 11 2694-6489`;
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
`;
    copyToClipboard(texto);
  });

  bono.addEventListener("click", () => {
    const texto = `‼ *LEER ATENTAMENTE* ‼

♦ La bonificación *NO* es retirable, pero te hace ganar fichas que *SI* lo son.

♦ Casino en vivo *NO* juega con bonificaciones, antes de ingresar al sector te avisa con un cartel.

♦ Hay algunos *SLOTS* que *NO* aplican el bono, son todos los que están en el sector *BUY BONUS*.`;
    copyToClipboard(texto);
  });

  captura.addEventListener("click", () => {
    const texto = `Mi nombre es Valu! 👩🏼‍💻 Agendame asi podes ver a mis estados de whatsapp ☺

*Para el bonus extra del 150% porfavor enviame captura de como me agendaste* ❤️`;
    copyToClipboard(texto);
  });

  textoDeReferidos.addEventListener("click", () => {
    const texto = `Montana te *REGALA* un *150% de bonificación* en tu primer carga 🎁🤑 

*PRESIONÁ EL LINK DE ABAJO PARA COMUNICARTE CON NOSOTROS!* 👇🏻

wa.link/referidosvalumontana`;
    copyToClipboard(texto);
  });

  retiro.addEventListener("click", () => {
    const texto = `*Cómo retirar tu 💰? envieme:*

🔺 Monto de su premio.
🔺 Su cbu o alias.
🔺 Nombre completo del titular.

🔔 Recordatorio: *LA BONIFICACIÓN NO ES RETIRABLE* y se debita automaticamente al realizar el retiro. ‼

Como ver cuanto puedo retirar?

PASO 1️⃣ : *Ir al símbolo de usuario*
PASO 2️⃣ : *Saldo cobrable*

Una vez que retiramos las fichas, el mismo sistema de la pagina también baja la bonificación.
`;
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
      overlay.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlay.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
  });

  // Función para abrir y cerrar el overlay del menú bienvenida
  btnBienvenida.addEventListener("click", function () {
    if (overlayBienvenida.style.display === "flex") {
      overlayBienvenida.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayBienvenida.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioBienvenida").focus();
  });

  // Función para abrir y cerrar el overlay del menú registrar usuario
  btnRegistrarUsuario.addEventListener("click", function () {
    if (overlayRegistrar.style.display === "flex") {
      overlayRegistrar.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayRegistrar.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioRegistrar").focus();
  });

  // Función para abrir y cerrar el overlay del menú Fichas Retiradas
  retiroExitoso.addEventListener("click", function () {
    if (overlayRetiradas.style.display === "flex") {
      overlayRetiradas.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlayRetiradas.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("fichasRetiradas").focus();
  });

  // Función para abrir y cerrar el overlay del menú Referido Acreditado
  referidoAcreditado.addEventListener("click", function () {
    if (overlayReferidoAcreditado.style.display === "flex") {
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlayReferidoAcreditado.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioQueRefiere").focus();
  });

  // Cerrar el overlay si se hace clic fuera del formulario del primer menú
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay && !firstVisit) {
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del segundo menú
  overlayBienvenida.addEventListener("click", function (e) {
    if (e.target === overlayBienvenida) {
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del tercer menú
  overlayRegistrar.addEventListener("click", function (e) {
    if (e.target === overlayRegistrar) {
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del cuarto menú
  overlayRetiradas.addEventListener("click", function (e) {
    if (e.target === overlayRetiradas) {
      overlayRetiradas.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRetiradas.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del quinto menú
  overlayReferidoAcreditado.addEventListener("click", function (e) {
    if (e.target === overlayReferidoAcreditado) {
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formReferidoAcreditado.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay del primer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !firstVisit) {
      // Verifica si la tecla presionada es Escape
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del segundo menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formBienvenida.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del tercer menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRegistrar.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del cuarto menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayRetiradas.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formRetiradas.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });
  // Cerrar el overlay del quinto menú si se presiona ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Verifica si la tecla presionada es Escape
      overlayReferidoAcreditado.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      formReferidoAcreditado.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Prevenir el envío del formulario y cerrar el overlay
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlay.style.display = "none"; // Cerrar el overlay del primer menú
    inputTitular = document.getElementById("titular").value.trim();
    inputCBU = document.getElementById("cbu").value.trim();
    inputAlias = document.getElementById("alias").value.trim();
    form.reset(); // Limpiar los campos del formulario
    firstVisit = false;
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del segundo menú
  formBienvenida.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayBienvenida.style.display = "none"; // Cerrar el overlay del segundo menú
    const user = document.getElementById("usuarioBienvenida").value.trim();
    const texto = `*Regalo de bienvenida 150% de bonus* 🎁❤️

♦️ *Usuario:*  ${user}
♦️ *Clave:* vip123

Ya podes ingresar a nuestra web: http://kingcash7.net 🃏🎰💯

💰 *CARGA MÍNIMA $1.000*

(Para mas info, solicita cronograma de pagos) 🏦

*Te dejo los datos de mi cuenta para transferir* 👇🏼

🔹 Nombre del Titular: *${inputTitular}*

🚨 Consultá *SIEMPRE* cbu activo 🚨
`;
    copyToClipboard(texto);
    formBienvenida.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del tercer menú
  formRegistrar.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayRegistrar.style.display = "none"; // Cerrar el overlay del tercer menú
    const user = document.getElementById("usuarioRegistrar").value.trim();
    const texto = `✅ USUARIO REGISTRAD@ ✅ 

Sitio web: http://kingcash7.net 🎰

♦️ *Usuario:* ${user}

♦️ *Clave:* vip123

`;
    copyToClipboard(texto);
    formRegistrar.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del cuarto menú
  formRetiradas.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayRetiradas.style.display = "none"; // Cerrar el overlay del tercer menú
    const monto = document.getElementById("fichasRetiradas").value.trim();
    const texto = `✅ *SALDO RETIRADO* ✅  

♦ Premio en fila: *${monto}* 🙌🏻💸

*Su premio ya se encuentra en el sector de pagos*. Le enviaremos el comprobante de pago cuando se haya efectuado! 🫡

*POR FAVOR, NO RESPONDA NI REACCIONE A ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO* 🙏🏻

*CONTESTAMOS POR ORDEN DE LLEGADA, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO, SEA PACIENTE PORFAVOR* 😊🙏🏻

`;
    copyToClipboard(texto);
    formRetiradas.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del quinto menú
  formReferidoAcreditado.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayReferidoAcreditado.style.display = "none"; // Cerrar el overlay del quinto menú
    const usuario1 = document.getElementById("usuarioQueRefiere").value.trim();
    const usuario2 = document.getElementById("usuarioReferido").value.trim();
    const texto = `El usuario *${usuario1}* recomendó al usuario *${usuario2}* y fue bonificado!! ✅`;
    copyToClipboard(texto);
    formReferidoAcreditado.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });
});
