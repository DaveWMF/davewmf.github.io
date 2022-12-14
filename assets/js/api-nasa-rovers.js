const API_KEY = "KGNIFQJ3PRYtndGGK4hHgTqxfvHYh3zjByrWYgh5";
let pagina = "https://api.nasa.gov/mars-photos/api/v1/";

async function obtenerRover(nombre)
{
    let data = await fetch(pagina + "manifests/" +
        nombre + "?" + 
        "api_key=" + API_KEY)
    .then((response) => response.json())
    .then((data) => {return data})
    .catch( (error) => console.log(error));
    return data;
}

async function obtenerImagenes(nombre, sol)
{
    let data = await fetch(pagina + "rovers/" +
        nombre + "/" + 
        "photos?api_key=" + API_KEY +
        "&sol="+sol)
    .then((response) => response.json())
    .then((data) => {return data})
    .catch( (error) => console.log(error));
    return data;
}