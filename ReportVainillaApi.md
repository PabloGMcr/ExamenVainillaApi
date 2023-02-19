# Reporte Vainilla Api 

# Logica del main.js

El programa usa la función fetch para consumir la API de RandomUser y utiliza el método document.querySelector para capturar los elementos de una tarjeta de Bootstrap y mostrar la información.

Hay un método catch() principalmente para ver los errores que puedan ocurrir durante la ejecución de la solicitud a la API.

~~~js
function fetchUser() {
  fetch(`https://randomuser.me/api/?inc=gender,name,nat,picture`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const user= data.results[0];
      const card = document.querySelector(".card");
      const image = card.querySelector("img");
      image.src = data.results[0].picture.large;
      const username = card.querySelector(".card-text");
      username.textContent = `Name : ${user.name.first} ${user.name.last}`;
      const usernat=card.querySelector(".card-nat");
      usernat.textContent=`Nacionalidad : ${user.nat}`;
      const usergender=card.querySelector(".card-gender");
      usergender.textContent=`Genero : ${user.gender}`;
      
    })
    .catch((error) => {
      console.error(error);
    });
}
~~~

 La carta tiene un boton con con `addEventListener` y `querySelector` para ejecutar el evento click

 # CSS & HTML

 Para el estilo se usa Boostrap y los siguientes estilos globales.

 ~~~CSS
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
    color: antiquewhite;
   
}

.bi{
    background-color: transparent;
    color: black;
}

.card-body{
    border: solid;
    
    
}

 ~~~
  
