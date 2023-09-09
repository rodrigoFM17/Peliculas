
let peliculas = []
const slider = document.querySelector('#slider-peliculas')

function setPeliculas(data){
    peliculas = data
    console.log(peliculas)

    peliculas.map( pelicula => {
        content = content + 
    `<figure>
        <img src='src/images/${pelicula.Nombre}.jpg' />
        <div class="container-image-hover">
            <div>
                <a href=""><img src="src/images/info.svg" alt="" class="icons"></a>
                <a href=""><img src="src/images/play.svg" alt="" class="icons"></a>
            </div>
        </div>
    </figure>`
    })

    slider.innerHTML = content

}
   
    let content = ""


    fetch('http://localhost:4000/api/movies')
        .then(response => response.json())
        .then(data => setPeliculas(data))
        


