import axios from 'axios';

const mockMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: "Drama",
    release_date: "1994-09-23",
    vote_average: 9.3,
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    runtime: 142,
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    genre: "Crime",
    release_date: "1972-03-14",
    vote_average: 9.2,
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    runtime: 175,
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",
    genre: "Action",
    release_date: "2008-07-18",
    vote_average: 9.0,
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    runtime: 152,
    backdrop_path: "/hqkIcbrOHL86UncnHIsHVcVmzue.jpg"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    genre: "Crime",
    release_date: "1994-10-14",
    vote_average: 8.9,
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    runtime: 154,
    backdrop_path: "/4cDFJr4HnXN5AdPw4AKrmLlMWdO.jpg"
  },
  {
    id: 5,
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.",
    genre: "Drama",
    release_date: "1994-06-23",
    vote_average: 8.8,
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    runtime: 142,
    backdrop_path: "/7c9UVPPiTPltouxRVY6N9uugaVA.jpg"
  },
  {
    id: 6,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    genre: "Sci-Fi",
    release_date: "2010-07-16",
    vote_average: 8.8,
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    runtime: 148,
    backdrop_path: "/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg"
  },
  {
    id: 7,
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genre: "Sci-Fi",
    release_date: "1999-03-31",
    vote_average: 8.7,
    poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    runtime: 136,
    backdrop_path: "/7uRbWOXxpWDMtnsd2e3a6fCbQRx.jpg"
  },
  {
    id: 8,
    title: "Goodfellas",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    genre: "Crime",
    release_date: "1990-09-12",
    vote_average: 8.7,
    poster_path: "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    runtime: 146,
    backdrop_path: "/sw7mordbZxgITU877yTpZCud90M.jpg"
  },
  {
    id: 9,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genre: "Sci-Fi",
    release_date: "2014-11-07",
    vote_average: 8.6,
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    runtime: 169,
    backdrop_path: "/pZvZjxPFfWWIwtPQodsNygQ6u5Z.jpg"
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    genre: "Adventure",
    release_date: "2003-12-17",
    vote_average: 8.6,
    poster_path: "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    runtime: 201,
    backdrop_path: "/8BPZO0Bf8TeAy8znF43z8soK3ys.jpg"
  },
  {
    id: 11,
    title: "Parasite",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    genre: "Thriller",
    release_date: "2019-05-30",
    vote_average: 8.5,
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    runtime: 132,
    backdrop_path: "/TU9NIjwzjoKPwQHoRvshDB5z1BE.jpg"
  },
  {
    id: 12,
    title: "Avengers: Endgame",
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
    genre: "Action",
    release_date: "2019-04-26",
    vote_average: 8.4,
    poster_path: "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    runtime: 181,
    backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg"
  }
];

// Movie API service
export const movieAPI = {
  // Get all movies
  getAllMovies: async () => {
    try {
      console.log('Loading 12 popular movies from mock data');
      return mockMovies;
    } catch (error) {
      console.log('Error loading movies, using mock data:', error);
      return mockMovies;
    }
  },

  searchMovies: async (query) => {
    try {
      const filteredMovies = mockMovies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.overview.toLowerCase().includes(query.toLowerCase())
      );
      console.log(`Search for "${query}" found ${filteredMovies.length} movies`);
      return filteredMovies;
    } catch (error) {
      console.log('Search failed, returning all movies');
      return mockMovies;
    }
  },

  getMovieById: async (id) => {
    try {
      const movieId = parseInt(id);
      const movie = mockMovies.find(m => m.id === movieId);
      if (!movie) {
        console.log(`Movie with ID ${id} not found, returning first movie`);
        return mockMovies[0];
      }
      console.log(`Found movie: ${movie.title}`);
      return movie;
    } catch (error) {
      console.log('Error finding movie, returning first movie');
      return mockMovies[0];
    }
  },

  getPopularMovies: async () => {
    try {
      console.log('Loading 6 popular movies for homepage');
      return mockMovies.slice(0, 12);
    } catch (error) {
      console.log('Error loading popular movies');
      return mockMovies.slice(0, 12);
    }
  },

  getImageUrl: (path, size = 'w500') => {
    if (!path) return 'https://via.placeholder.com/500x750/1e293b/ffffff?text=No+Image';
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },

  getMoviesByGenre: async (genre) => {
    try {
      const genreMovies = mockMovies.filter(movie => 
        movie.genre.toLowerCase() === genre.toLowerCase()
      );
      console.log(`Found ${genreMovies.length} movies in ${genre} genre`);
      return genreMovies;
    } catch (error) {
      console.log('Error filtering by genre');
      return mockMovies;
    }
  }
};

export default movieAPI;