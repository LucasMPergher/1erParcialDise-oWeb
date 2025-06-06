function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const asunto = document.getElementById("asunto").value;

  const mensaje = `Gracias ${nombre} por contactarte por "${asunto}". Te responderemos pronto.`;
  console.log(mensaje);
  document.getElementById("respuesta").textContent = mensaje;

  // También podrías evitar el envío si estás en modo demo:
  // return false;

  return true;
}

function calcularDescuento() {
  const descuento = parseFloat(document.getElementById("descuento").value);
  const precioBase = 1000; // ficticio
  if (!isNaN(descuento)) {
    const precioFinal = precioBase - (precioBase * descuento / 100);
    document.getElementById("precioFinal").textContent = `Precio final: $${precioFinal.toFixed(2)}`;
  } else {
    document.getElementById("precioFinal").textContent = "Ingresa un valor válido.";
  }
}

// Cambio de estilo al hacer scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

