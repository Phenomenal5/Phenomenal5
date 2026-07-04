# React Movie App 🎬

This project is a simple movie app built with React. It allows you to showcase your favorite movies or TV shows, add new ones, and filter them by title or rating. The app demonstrates the use of React functional components and React Hooks.

## Features

- **Display Movies:** View a list of your favorite movies or TV shows.
- **Add Movie:** Add a new movie with a title, description, poster URL, and rating.
- **Filter Movies:** Filter the movie list by title or rating.
- **React Hooks:** Uses `useState` and other React hooks for state management.

## Components

- **MovieCard:** Displays individual movie details.
- **MovieList:** Renders a list of `MovieCard` components.
- **Filter:** Allows filtering movies by title and rating.
- **AddMovie:** Modal/form to add a new movie.

## Movie Attributes

Each movie has the following attributes:
- `title`: The name of the movie or TV show.
- `description`: A short description.
- `posterURL`: A link to the movie poster image.
- `rating`: A numeric rating.

## Getting Started

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd react-movie-app
   ```
2. **Install Dependencies:**
    `npm install`
3. **Run the app:**
    `npm start`
4. **Open `http://localhost:3000` to view it in your browser.**


## Folder Structure

```
react-hook/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AddMovie.jsx
│   │   ├── Filter.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieList.jsx
│   ├── App.js
│   ├── index.js
│   └── ...other files
├── package.json
└── README.md
```

## Usage

- Click **Add Movie** to open the form and add a new movie.
- Use the filter inputs to search movies by title or filter by rating.

## Technologies Used

- React
- JavaScript (ES6+)
- Tailwind CSS (for styling)## Folder Structure

## License
This project is for educational purposes.