const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    console.log("Response: ", response);
    const datos = await response.json();
    console.log("Informacion a procesar: ", datos);
  } catch (err) {
    console.log(err);
  }
};
getDatos();

// Función asíncrona para obtener los títulos de álbumes desde la URL en la nube
async function obtenerTitulosDeAlbumes() {
  const url = "https://jsonplaceholder.typicode.com/photos";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Obtener los primeros 20 títulos de álbumes
    const titulos = data.slice(0, 20).map((album) => album.title);

    // Mostrar los títulos en la consola
    titulos.forEach((titulo, index) => {
      console.log(`Álbum ${index + 1}: ${titulo}`);
    });

    // Retornar el mensaje "Información Enviada" después de 3 segundos
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Información Enviada");
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

// Llamar a la función principal
obtenerTitulosDeAlbumes();

//utilizar el método fetch dentro de un bloque try/catch

async function obtenerDatosDesdeURL() {
  const url = "https://jsonplaceholder.typicode.com/photos";

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Aquí puedes trabajar con los datos obtenidos
    console.log("Datos obtenidos:", data);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

// Llama a la función para obtener los datos
obtenerDatosDesdeURL();

//utilizar el método forEach para mostrar los primeros 20 títulos
const data = [
  { id: 1, title: "accusamus beatae ad facilis cum similique qui sunt" },
  { id: 2, title: "reprehenderit est deserunt velit ipsam" },
  { id: 3, title: "officia porro iure quia iusto qui ipsa ut modi" },
  {
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  },
  { id: 5, title: "natus nisi omnis corporis facere molestiae rerum in" },
];

function enviarInformacion() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Información Enviada");
    }, 3000);
  });
}

// Ejemplo de uso:
async function main() {
  try {
    const mensaje = await enviarInformacion();
    console.log(mensaje);
  } catch (error) {
    console.error("Error al enviar la información:", error);
  }
}

main();
