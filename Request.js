const API_KEY = "37c0176aff21abc600f07f7102fd7534";

const request = {
	fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&language=en-US&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
	fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};
