const movies = [

    { id: 1, title: 'Movie 1', genre: 'action' },

    { id: 2, title: 'Movie 2', genre: 'drama' },

    { id: 3, title: 'Movie 3', genre: 'action' },

    { id: 4, title: 'Movie 4', genre: 'comedy' },

  ];

const genreListContainer = document.querySelector("#genreList");
const movieListContainer = document.querySelector("#movieList");

const movieList = movies.reduce((accumulator, currentValue) => {

    const listItem = document.createElement("li");
    listItem.textContent = `${currentValue.title} - Rating: ${currentValue.genre}`;
    movieListContainer.appendChild(listItem)

    return accumulator;
}, "");

const genreList = movies.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.genre]) {
        accumulator[currentValue.genre] = [];
    }
    accumulator[currentValue.genre].push(currentValue.title);
    return accumulator;
}, {});

const genreGroups = movies.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.genre]) {
        accumulator[currentValue.genre] = [];
    }
    accumulator[currentValue.genre].push(currentValue.title);
    return accumulator;
}, {});

Object.keys(genreGroups).forEach(genre => {
    const genreItem = document.createElement("li");
    genreItem.innerHTML = `<strong>Genre:</strong> ${genre}<br><strong>Movies:</strong> ${genreGroups[genre].join(", ")}`;
    genreListContainer.appendChild(genreItem);
});