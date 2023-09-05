document.addEventListener("DOMContentLoaded", function(){

const container = document.getElementById("container");

const url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";

    fetch(url)
    .then(response => response.json())
    .then(data => {

        let contador = 0;

        let pokemons = data.results; // Variable para acceder a la info de los pokemons.            
        console.log(pokemons); // Mostrar info de API en la consola.

        // ForEach para agregar el contenido en el html
        pokemons.forEach(pokemon => {
            contador ++;
            let img = ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ contador +".png");

            container.innerHTML += 
            `
            <div class="col-12 col-md-6 col-lg-3 col-xl-2">
                <div class="card col-12">
                    <img class="px-4" src="${img}">
                    <p class="text-center">#${contador} ${pokemon.name}</p>
                </div>
            </div>
            `;
        })
    })
    // Mensaje de error por si ocurre un error al cargar el fetch.
    .catch(error => {
        console.error("Error al cargar los productos:", error);
    });
    
});