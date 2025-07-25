document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos
  const hamburguesaToggle = document.getElementById("modal-hamburguesa-toggle");
  const cbu = document.getElementById("btn-cbu");
  const btnBienvenida = document.getElementById("btn-bienvenida");
  const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
  const bienvenidaPubli = document.getElementById("btn-bienvenidaPubli");
  const acreditadas = document.getElementById("btn-acreditadas");
  const sistemaDeReferidos = document.getElementById("btn-sistemaDeReferidos");
  const bono = document.getElementById("btn-bono");
  const captura = document.getElementById("btn-captura");
  const retiro = document.getElementById("btn-retiro");
  const retiroExitoso = document.getElementById("btn-retiroExitoso");
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

  cbu.addEventListener("click", () => {
    const texto = `${inputCBU}`;
    copyToClipboard(texto);
  });

  bienvenidaPubli.addEventListener("click", () => {
    const texto = `Bienvenida/o a el numero oficial de *MONTANA* 💯🤑

Ya podes ingresar a nuestra web: http://kingcash7.net 🎰

♦️ Te vamos a estar regalando en todas tus cargas diarias *50% de bono* 👏🏼🎁
`;
    copyToClipboard(texto);
  });

  acreditadas.addEventListener("click", () => {
    const texto = `Cargadas! Muchos exitoss 🍀

Sitio web: http://kingcash7.net

🎁 🔥 *FICHAS DE REGALO* 🔥 🎁

Por cada referido que venga de tu parte y comience a jugar te regalamos *4.500 fichas GRATIS* 🤝`;
    copyToClipboard(texto);
  });

  sistemaDeReferidos.addEventListener("click", () => {
    const texto = `👥 *SISTEMA DE REFERIDOS* 👥

🔺 Por cada conocido que venga de tu parte y comience a jugar con nosotros te *REGALAMOS 4.500 EN SALDO* 🎁🤑

*¿Como invitar a tus amigos?*

🔺 Compartiendo nuestro contacto, y que nos avise que viene de parte de tu usuario. 

🙌🏻🙌🏻 *SUPER FACIL* 🙌🏻🙌🏻`;
    copyToClipboard(texto);
  });

  bono.addEventListener("click", () => {
    const texto = `⬇️ *INFO IMPORTANTE* ⬇️

📣 Consultar por cvu disponible siempre antes de transferir, van rotando por turnos 🙏🏻

📣 Hay juegos que *NO* permiten usar la bonificación, y estos se encuentran en la sección *BUY BONUS*. 
En caso de no usar la bonificación, no es posible retirarla 🚫`;
    copyToClipboard(texto);
  });

  captura.addEventListener("click", () => {
    const texto = `Mi nombre es Valu! 👩🏼‍💻 *Para el bonus extra del 200% en tu carga porfavor enviame captura de como me agendaste* ❤️`;
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
    const texto = `*Nuestro cronograma* : 

♦️ Días hábiles: De 13:00hs a 00:00hs 
♦️ Fines de semana: De 13:00hs a 02:00hs
♦️Mínimo de retiro: $3.000

 *Importante* ‼⬇

♦️ Usuario que retire desde $2.000 a $30.000 puede realizar un retiro mas, luego se tiene que cumplir 24hs para volver a retirar

♦️ Para retiros superiores a $30.000, se permite solo un retiro cada 24 horas.

💥 *MAXIMO DE RETIRO DEPENDIENDO DE LA CARGA* ⬇️⬇️

♦️Si la carga es menor a 50.000 puede retirar hasta 100.000 diarias 💪🏼

♦️Si la carga apartir de 50.000 puede retirar hasta 150.000 🫰🏼

♦️Si la carga es apartir de 100.000 puede retirar hasta 200.000 diarios 🙌🏻
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
    const texto = `¡Bienvenid@ a MONTANA c4sin0! 🎰🔥 Tu suerte arranca HOY 🍀🫰🏼

💥 *200% de b0n0 de regalo en tu primer deposito*💃
💥 *150% en tu segunda c4rg4* 😱

📲 Usu4rio: ${user}
🔐 Cl4ve: vip123

L1NK: https://kingcash7.net 🫰🏼

🔺M1n1mo de c4rg4: *$1.000*
🔺M1n1m0 de retiro: *$3.000*
🔺 Atencion las 24 hs 🕒
🔺B0nus en todas tus c4rgas diarias 💃🥳

Te envio 4li4s? confirmame 🥰
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

*Su premio ya se encuentra en el sector de pagos*. Le enviaremos el comprobante cuando se haya efectuado! 🫡

*SEA PACIENTE PORFAVOR, NO RESPONDA NI REACCIONE A ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO* 😊🙏🏻
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
