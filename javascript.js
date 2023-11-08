  // Seleccionamos el botón por su ID
  const boton = document.getElementById('botonCambioColor');

  // Añadimos un event listener al botón para que cuando se haga clic ejecute una función
  boton.addEventListener('click', function() {
    // Seleccionamos todos los párrafos
    const parrafos = document.querySelectorAll('p');

    // Cambiamos el color de cada párrafo a rojo
    parrafos.forEach(function(parrafo) {
      parrafo.style.color = 'red';
    });
  });
