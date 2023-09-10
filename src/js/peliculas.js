
const peliculas = document.querySelector('#container-peliculas')
const series = document.querySelector('#container-series')
const populares = document.querySelector('#container-populares')
const recientes = document.querySelector('#container-recientes')
console.log(recientes)

function setContent(data, elemento){

    let content = ""

    data.map( contenido => 
        content = content +
        `
    <figure>
        <img src="../images/${contenido.Nombre}-large.jpg" alt="${contenido.Nombre}" >
        <div class="container-image-hover" >
            <div>
                <div>
                    <a href=""><img src="../images/info.svg" alt="" class="icons"></a>
                    <a href="${contenido.Trailer}"><img src="../images/play.svg" alt="" class="icons"></a>
                </div>
                <div>
                    <p>${contenido.D_Corta}</p>
                </div>
            </div>
            
        </div>
    </figure>`)

    elemento.innerHTML = content

}



fetch('http://localhost:4000/api/movies')
    .then(response => response.json())
    .then(data => setContent(data, peliculas))

fetch('http://localhost:4000/api/series')
    .then(response => response.json())
    .then(data => setContent(data, series))

fetch('http://localhost:4000/api/content')
    .then(response => response.json())
    .then(data => setContent(data, populares))

fetch('http://localhost:4000/api/movies/recent')
    .then(response => response.json())
    .then(data => setContent(data, recientes))

