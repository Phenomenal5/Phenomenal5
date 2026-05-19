const Filter = ({ filteredMovies, setFilterQuery, filterQuery }) => {
  return (
    <div className="w-full p-4 rounded-md bg-white">
      <h2 className="text-lg font-bold mb-2">Filter Movies</h2>
      <div className="flex flex-row gap-2 mb-4 shadow-md p-5">
        {/* Title Filter input */}
        <input
          type="text"
          placeholder="Search by title"
          onChange={(e) =>
            setFilterQuery({ ...filterQuery, title: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-md"
        />
        {/* Rating Filter input */}
        <input
          type="number"
          placeholder="Minimum rating"
          onChange={(e) =>
            setFilterQuery({ ...filterQuery, rating: e.target.value })
          }
          className="border border-gray-300 p-2 rounded-md"
          min={0}
        />
      </div>
      {/* Filtered Movies List */}
      {filteredMovies && (
        <ul className="bg-white z-50 w-[50%] flex flex-col gap-y-2 max-h-60 overflow-y-auto shadow-md">
          {/* Filtered Movies */}
          {
            filteredMovies.map((movie, index) => (
              <li key={index} className="border-b p-4">
                <div className="flex items-center gap-x-4">
                  <img
                    src={movie.posterURL}
                    alt={movie.title}
                    className="w-10 h-10"
                  />
                  <h2 className="flex-1 text-center">{movie.title}</h2>
                </div>
                <p className="text-right">Rating: {movie.rating}</p>
              </li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default Filter;