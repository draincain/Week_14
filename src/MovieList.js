import React, { Component } from "react";
import Movie from "./Movie";

// Class-based component named MovieList that extends the React Component class
class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "Primer",
          image:
            "https://upload.wikimedia.org/wikipedia/en/f/f7/Primer_%282004_film_poster%29.jpg",
          synopsis:
            "Four friends/fledgling entrepreneurs, knowing that there's something bigger and more innovative than the different error-checking devices they've built, wrestle over their new invention.",
          rating: 4.5,
          reviews: ["I will have to watch it again!", "Low budget, big ideas."],
        },
        {
          title: "Upstream Color",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTQzMzQ4MDAyNF5BMl5BanBnXkFtZTcwNzE0MDk3OA@@._V1_.jpg",
          synopsis:
            "A man and woman are drawn together, entangled in the life cycle of an ageless organism. Identity becomes an illusion as they struggle to assemble the loose fragments of wrecked lives.",
          rating: 3.5,
          reviews: ["Terrifying!"],
        },
        {
          title: "Mortal Kombat",
          image:
            "https://m.media-amazon.com/images/M/MV5BY2ZlNWIxODMtN2YwZi00ZjNmLWIyN2UtZTFkYmZkNDQyNTAyXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_.jpg",
          synopsis:
            "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe..",
          rating: 4,
          reviews: ["Finish Him!"],
        },
        {
          title: "Mad Max: Fury Road",
          image:
            "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10854488_p_v8_ao.jpg",
          synopsis:
            "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
          rating: 5,
          reviews: ["Non-Stop Action!"],
        },
        {
          title: "Maudie",
          image:
            "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13267188_p_v8_ac.jpg",
          synopsis:
            "An arthritic Nova Scotia woman works as a housekeeper while she hones her skills as an artist and eventually becomes a beloved figure in the community..",
          rating: 4,
          reviews: [],
        },
      ],
    };
  }

  // Method to add a review to a specific movie based on its index
  addReview = (movieIndex, reviewText) => {
    //Create a copy of the movies array to avoid changing state
    const updatedMovies = [...this.state.movies];
    // Push the new reviewText to the reviews array of the specified movie
    updatedMovies[movieIndex].reviews.push(reviewText);
    // Update the component's state with the modified movies array
    this.setState({ movies: updatedMovies });
  };

  render() {
    // Map over the movies array to create an array of Movie components
    const movieComponents = this.state.movies.map((movie, index) => (
      // Render a Movie component with props passed from the current movie object
      <Movie
        key={index}
        title={movie.title}
        image={movie.image}
        synopsis={movie.synopsis}
        rating={movie.rating}
        reviews={movie.reviews}
        addReview={(reviewText) => this.addReview(index, reviewText)}
      />
    ));

    return <div>{movieComponents}</div>;
  }
}

export default MovieList;
