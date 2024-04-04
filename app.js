
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTIxZmE0NGM0OTJlMDFiNTA5OWUyYTE0NTExODFkMyIsInN1YiI6IjY2MGUzMDRmZGE5ZWYyMDE0YTU1ZGZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s-PV7pylAMuJCbsCdqW1zrwTw6lCbhc_aebAfpYl1Kc'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(response => response.json())
  .then((data) => data.results.map((movie) => console.log(`%c Filmin adi: ${movie.title}, IMDB Bali: ${movie.vote_average.toFixed(1)} , Buraxilis ili: ${movie.release_date}`,`color:teal`))) 

