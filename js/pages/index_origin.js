async function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  /*let photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois récupéré
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})*/
  //return (
  //fetch("./data/photographers.json", { mode: "no-cors" })
  /*.then((res) => res.json())
      .then((res) => console.log(res.json()))
      .then((res) => res.data)
      .catch((err) => console.log("an error occurs", err))*/
  return window.addEventListener("load", () => {
    fetch("./data/photographers.json", { mode: "no-cors" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.error("An error has occured");
        }
      })
      .then((data) => console.log(data));
  });
  //);
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  console.log(photographers);
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
