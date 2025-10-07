// Función para el botón "Regresar al Inicio"
document.getElementById('btnSaludo').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});