  // Seleccionamos el botón por su ID
  const boton = document.getElementById('botonCambioColor');

    // Añadimos un event listener al botón para que cuando se haga clic ejecute una función
    boton.addEventListener('click', function() {
    // Seleccionamos todos los párrafos
    document.getElementById('parrafo3').style.color = 'red';
  });
