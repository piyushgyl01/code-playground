console.log("A5_Assignment");
console.log("---- ---- ----")
console.log("1.1");
console.log("---- ---- ----")

const movies = [
    {
        name: "Kabhi Khushi Kabhi Gham",
        genre: "Drama",
        boxOffice: 500,
        satelliteRights: 120,
        ottRights: 70,
        musicRights: 20
    },
    {
        name: "Dilwale Dulhania Le Jayenge",
        genre: "Romance",
        boxOffice: 550,
        satelliteRights: 130,
        ottRights: 80,
        musicRights: 25
    },
    {
        name: "3 Idiots",
        genre: "Comedy",
        boxOffice: 600,
        satelliteRights: 140,
        ottRights: 90,
        musicRights: 30
    },
    {
        name: "Bajrangi Bhaijaan",
        genre: "Action",
        boxOffice: 700,
        satelliteRights: 160,
        ottRights: 100,
        musicRights: 40
    },
    {
        name: "Padmaavat",
        genre: "Historical",
        boxOffice: 800,
        satelliteRights: 180,
        ottRights: 110,
        musicRights: 45
    }
];
  
console.log(movies);
  
console.log("---- ---- ----")
console.log("1.2");
console.log("---- ---- ----")

function moviesTotalCost(movies) {
    let totalCost = 0;
    for (let i = 0; i < movies.length; i++) {
        movies[i].totalCost = movies[i].boxOffice + movies[i].satelliteRights + movies[i].ottRights + movies[i].musicRights
        console.log(movies[i])
    }
    return "";
}

console.log(moviesTotalCost(movies));
  
console.log("---- ---- ----")
console.log("1.3");
console.log("---- ---- ----")

function printCostCard(movies) {
    for (let i = 0; i < movies.length; i++) {
        console.log(" Movie Cost Card")
        console.log(` Name: ${movies[i].name} \n Genre: ${movies[i].genre} \n Total Cost: ${movies[i].totalCost} \n ------`)
    }
}

printCostCard(movies);
  
console.log("---- ---- ----")
console.log("1.4");
console.log("---- ---- ----")

function mostExpensiveMovie(movies) {
    let expensiveMovie = movies[0];
    for (let i = 1; i < movies.length; i++) {
        if (expensiveMovie.totalCost < movies[i].totalCost) {
            expensiveMovie = movies[i];
        }
    }
    return expensiveMovie;
}

function totalMoviesCost(movies) {
    let totalmovieCost = 0;
    for (let i = 0; i < movies.length; i++) {
        totalmovieCost = totalmovieCost + movies[i].totalCost
    }
    return totalmovieCost
}

function totalAverageCost (movies) {
    let totalCost = totalMoviesCost(movies);
    return totalCost / movies.length;
}

function diffAverages(movies, medium) {
    let sumehe = 0;
    for (let i = 0; i < movies.length; i++) {
        sumehe = sumehe + movies[i][medium];
    }
    return sumehe / movies.length;
}

function movieReport(movies) {
    let expensiveMoviee = mostExpensiveMovie(movies);

    console.log(`====== Movie Report ======
        Most Expensive Movie
        ------
        Name: ${expensiveMoviee.name}
        Genre: ${expensiveMoviee.genre}
        Total Cost: ${expensiveMoviee.totalCost}


        Movies Average
        ------
        Total Cost of all Movies: ${totalMoviesCost(movies)}
        Total Average cost of all movies: ${totalAverageCost(movies)}
        ------
        Total Box Office Average: ${diffAverages(movies, "boxOffice")}
        Total Satellite Rights Average: ${diffAverages(movies, "satelliteRights")}
        Total OTT Rights Average: ${diffAverages(movies, "ottRights")}
        Total Music Rights Average: ${diffAverages(movies, "musicRights")}
        `)
}

movieReport(movies);