document.addEventListener("DOMContentLoaded", function() {
  
  //Api
  const id = "5";
  const api_url = `http://localhost:4000/api/content/${id}`;

  //Elements
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const lanzamiento = document.getElementById("throw");
  const banner= document.getElementById("banner");
  const poster = document.getElementById("poster");
  const trailer = document.getElementById("link");
  const iconpopular = document.getElementById("iconpopular");
  const popular= document.getElementById("popular");

  fetch(api_url)
    .then((res) => res.json())
    .then((data) => {

      console.log(data);
  
      title.innerHTML = data[0].Nombre;
      description.innerHTML= data[0].Descripcion;
      lanzamiento.innerHTML= `Estreno: ${data[0].Lanzamiento}`;
      banner.style.backgroundImage= `url('/src/img/${data[0].Nombre}-banner.webp')`;
      poster.src = `src/img/${data[0].Nombre}.jpg`;
      trailer.href = `${data[0].Trailer}`;

      const calificacion= data[0].Calificacion;
      const porcentaje = (calificacion * 10).toFixed(0) + "%";

      popular.innerHTML= `Popularidad: ${porcentaje}`;

      iconpopular.src= calificacion > 5 ? "src\\img\\thumbs-up-solid.svg" : "src\\img\\thumbs-down-solid.svg";

    })
    .catch((err) => console.error(err));

});





