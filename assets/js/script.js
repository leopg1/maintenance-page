const movies = [
    {
        name: 'Gravity Fals',
        rating: 100
    },
    {
        name: 'Regular Show',
        rating: 10
    },
    {
        name: 'Bears Brothers',
        rating: 6
    }
];

// movies.forEach(function(movie){
//     console.log(`${movie.name} - ${movie.rating}/10`);
// })

for(let movie of movies){
    console.log(`${movie.name} - ${movie.rating}/10`);
}