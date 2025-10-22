//Inicio del script para el reto de las cajas, DOM JS//

//1. Cuando haga click en el btn-cajas titulo se cambie el titulo de las cajas//

document.getElementById("btn-cajas-titulo").addEventListener("click",()=>
         {
  const titulocajas = 
        
        document.getElementById("titulo-cajas");
  titulocajas.textContent = "Aranza Noriega";
});

//2. Cambiar el color de la caja//

document.getElementById("btn-color-cajas").addEventListener("click",()=>
 {
  const cajas =
   document.getElementsByClassName("caja");
  for (let i = 0; i < cajas.length; i++)
    {
      cajas[i].style.backgroundColor = "#DE6149";
    }
});

//3. cambiar el color de la primera caja//

document.getElementById("btn-primera-caja").addEventListener("click",()=>
    
    {
    const primeracaja=
          document.querySelector(".caja");
          primeracaja.style.backgroundColor="#DEA090";
});
  
//4.Cambiar el color al borde de las cajas//

document.getElementById("btn-borde").addEventListener("click",()=>
                                 
    {
     const bordecaja =
           
      document.querySelectorAll(".caja");
       bordecaja.forEach(caja=>
                        
                        {
         caja.style.border = "10px dotted red";
       });
   });

//5. Referencia para agregar las imágenes//

const imageUrlInput = document.getElementById('imageUrlInput');
const addImageBtn = document.getElementById('addImageBtn');
const galleryContainer = document.getElementById('galleryContainer');

// Evento al hacer clic en el botón
addImageBtn.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();
  
  if (imageUrl) {
    // Crear un nuevo contenedor para la imagen
    const col = document.createElement('div');
    col.classList.add('col'); // Para usar la rejilla de Bootstrap

    // Crear la imagen
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('img-fluid', 'rounded', 'shadow-sm'); 
    img.alt = 'Imagen añadida';

    // Agregar la imagen dentro del contenedor
    col.appendChild(img);

    // Añadir el contenedor a la galería
    galleryContainer.appendChild(col);

    // Limpiar input
    imageUrlInput.value = '';
  } else {
    alert('Por favor ingresa una URL válida.');
  }
});