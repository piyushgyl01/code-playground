const movies = [
    { id: 1, title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
    { id: 2, title: "The Godfather", genre: "Crime", year: 1972 },
    { id: 3, title: "The Dark Knight", genre: "Action", year: 2008 },
    { id: 4, title: "Pulp Fiction", genre: "Crime", year: 1994 }
  ];
const movieListDiv = document.querySelector("#movieListDiv");

const movieListHTML = movies.map((movie) => `
    <strong>ID:</strong> ${movie.id} <br>
    <strong>Title:</strong> ${movie.title} <br>
    <strong>Genre:</strong> ${movie.genre} <br>
    <strong>Year:</strong> ${movie.year} <br>
    <hr>

`)
movieListDiv.innerHTML = movieListHTML.join("");