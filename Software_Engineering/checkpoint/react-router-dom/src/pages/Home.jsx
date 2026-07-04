import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const Home = () => {
  // list of movies
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller where dreams are within dreams.",
      posterURL:
        "https://www.originalfilmart.com/cdn/shop/files/inception_2010_advance_original_film_art_f4801a23-edb3-4db0-b382-1e2aec1dc927_1200x.jpg?v=1715962948",
      rating: 5,
    },
    {
      title: "The Dark Knight",
      description: "Batman faces off against the Joker in Gotham City.",
      posterURL:
        "https://www.originalfilmart.com/cdn/shop/products/dark_knight_2008_advance_original_film_art_0691cf44-3607-4896-b82a-10f8d982425d_1200x.jpg?v=1678127111",
      rating: 5,
    },
    {
      title: "Interstellar",
      description:
        "Explorers travel through a wormhole in space to save humanity.",
      posterURL:
        "https://www.originalfilmart.com/cdn/shop/products/interstellar_2014_italian_2_fogli_teaser_original_film_art_1200x.jpg?v=1584876962",
      rating: 4,
    },
    {
      title: "Avengers: Endgame",
      description: "The Avengers assemble to undo the damage caused by Thanos.",
      posterURL:
        "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
      rating: 4,
    },
    {
      title: "Joker",
      description:
        "A failed comedian's descent into madness and crime in Gotham.",
      posterURL:
        "https://www.originalfilmart.com/cdn/shop/products/joker_2019_japanese_b2_original_film_art_1200x.jpg?v=1601474883",
      rating: 3,
    },
  ]);

  // filter input state variable
  const [filterQuery, setFilterQuery] = useState({ title: "", rating: "" });
  const [filteredMovies, setFilteredMovies] = useState(null);

  // filter logic
  useEffect(() => {
    filterMovieByQuery(movies, filterQuery.title, filterQuery.rating);
  }, [filterQuery]);

  // Filter movies by title and rating
  const filterMovieByQuery = (movies, titleQuery, ratingQuery) => {
    // If both queries are empty, reset the filtered movies
    if (titleQuery === "" && ratingQuery === "") {
      setFilteredMovies([]);
    }
    // If title query is empty and rating query is not, filter by rating
    else if (titleQuery === "" && ratingQuery !== "") {
      const filteredMovie = movies.filter(
        (movie) => movie.rating >= ratingQuery
      );
      setFilteredMovies(filteredMovie);
    }
    // If title query is not empty and rating query is not, filter by both
    else {
      const filteredMovie = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(titleQuery.toLowerCase()) ||
          movie.rating >= ratingQuery
      );
      setFilteredMovies(filteredMovie);
    }
  };

  // modal state variable
  const [modal, setModal] = useState(false);
  // add movie function
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setModal(false);
  };

  return (
    <div className="relative">
      <div className="">
        <h1 className="text-4xl font-bold text-center my-4">Movie App</h1>
        <Filter
          filteredMovies={filteredMovies}
          setFilterQuery={setFilterQuery}
          filterQuery={filterQuery}
        />
      </div>

      <div className="flex justify-between mx-4 my-4">
        <h1 className="text-2xl font-bold mb-4">Movie</h1>
        <button
          onClick={() => setModal(true)}
          className="bg-blue-400 text-white px-2 rounded-md cursor-pointer hover:bg-blue-500"
        >
          Add Movie
        </button>
      </div>
      <div className="w-full m-4">
        <MovieList movies={movies} />
      </div>

      {modal ? (
        <div>
          <div
            className={`absolute inset-0 bg-black/30 backdrop-blur-[0.2rem] z-40 h-full`}
          ></div>
          <AddMovie addMovie={addMovie} setModal={setModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
