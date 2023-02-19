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

/* Boton */

const nextUserButton = document.querySelector("#next-user");
nextUserButton.addEventListener("click", () => {
 fetchUser();
});

fetchUser();
