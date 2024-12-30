const movies = [
    { id: 1, title: "Movie 1", rating: 4.5 },
    { id: 2, title: "Movie 2", rating: 3.8 },
    { id: 3, title: "Movie 3", rating: 4.2 },
    { id: 4, title: "Movie 4", rating: 3.5 }
  ];
  

const movieListContainer = document.querySelector("#movieList");
const averageRatingContainer = document.querySelector("#averageRating");

const movieList = movies.reduce((accumulator, currentValue) => {
    accumulator.totalRating = accumulator.totalRating + currentValue.rating;

    const listItem = document.createElement("li");
    listItem.textContent = `${currentValue.title} - Rating: ${currentValue.rating}`;
    movieListContainer.appendChild(listItem)

    return accumulator;
}, { totalRating: 0});

const averageRating = movieList.totalRating / movies.length;

averageRatingContainer.textContent = averageRating;