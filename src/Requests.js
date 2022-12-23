const key = "37c0176aff21abc600f07f7102fd7534";

const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
	requestUpcoming: `https://api.themoviedb.org/3/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`,
	requestAction: `https://api.themoviedb.org/3/search/movie/popular?api_key=${key}&language=en-US&page=2`,
};

export default requests;
