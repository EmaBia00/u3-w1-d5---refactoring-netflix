import { Component } from "react";

class Gallery extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    const { title } = this.props;

    fetch(`http://www.omdbapi.com/?apikey=1656bbcf&Type="movie"&s=${title}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          this.setState({
            movies: data.Search.slice(0, 6)
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  render() {
    const { title } = this.props;
    const { movies } = this.state;

    return (
      <div className="container-fluid mb-4 mt-4 gx-0">
        <h2 className="mb-3 fs-4">{title}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-1">
          {movies.map((movie, index) => (
            <div className="col" key={index}>
              <img src={movie.Poster} className="card-img-top gallery-img" alt={movie.Title} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
