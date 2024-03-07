fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Procesa los datos obtenidos (por ejemplo, muestra los posts)
    console.log(data);
  })
  .catch(error => {
    console.error('Error al obtener datos desde la API:', error);
  });