
document.addEventListener("DOMContentLoaded", function() {
  //Api
  const params = new URLSearchParams(window.location.search)
  const id = params.get('id')
  console.log(id)
  const api_url = `http://localhost:4000/api/content/${id}`;

  //Elements
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const lanzamiento = document.getElementById("throw");
  const banner= document.getElementById("banner");
  const poster = document.getElementById("poster");
  const trailer = document.getElementById("link");


  fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
  
      title.innerHTML = data[0].Nombre;

      description.innerHTML= data[0].Descripcion;

      lanzamiento.innerHTML= `Estreno: ${data[0].Lanzamiento}`;

      banner.style.backgroundImage= `url('/src/images/${data[0].Nombre}-large.jpg')`;

      poster.src = `../images/${data[0].Nombre}.jpg`;
      
      trailer.href = `${data[0].Trailer}`;

      const calificacion= data[0].Calificacion;

      const porcentaje = (calificacion * 10).toFixed(0) + "%";

      const popular= document.getElementById("popular");

      popular.innerHTML= `Popularidad: ${porcentaje}`;

      const iconpopular = document.getElementById("iconpopular");

      if (calificacion > 5) {
        iconpopular.src = "../images/thumbs-up-solid.svg"; // Usamos doble barra diagonal inversa para rutas en Windows
      } else {
        iconpopular.src = "../images/thumbs-down-solid.svg"; // Usamos doble barra diagonal inversa para rutas en Windows
      }

    })
    .catch((err) => console.error(err));

});




function cambiarEspecifica(id){    

  /*
  const botones = document.querySelectorAll('button[value]')

  console.log(botones)

  botones.forEach(boton => {

    boton.addEventListener('click', cambiarEspecifica)
    
  });
  console.log(botones)
  */


}






