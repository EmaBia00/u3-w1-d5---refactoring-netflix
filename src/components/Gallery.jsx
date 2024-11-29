import { Component } from "react";
import { Spinner, Alert, Card, Container } from "react-bootstrap";
import Slider from "react-slick";

class Gallery extends Component {
  state = {
    movies: [],
    loading: true,
    error: null
  };

  componentDidMount() {
    const { title } = this.props;

    fetch(`http://www.omdbapi.com/?apikey=1656bbcf&Type="movie"&s=${title}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          this.setState({
            movies: data.Search,
            loading: false,
            error: null
          });
        } else {
          this.setState({
            loading: false,
            error: "No movies found."
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({
          loading: false,
          error: "Failed to fetch data. Please try again later."
        });
      });
  }

  render() {
    const { title } = this.props;
    const { movies, loading, error } = this.state;

    if (loading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
          <Spinner animation="border" variant="light" />
        </div>
      );
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024, //Li ho fatti approssimativi dovrei sistemarli bene
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600, //Li ho fatti approssimativi dovrei sistemarli bene
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480, //Li ho fatti approssimativi dovrei sistemarli bene
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <Container fluid className="mb-4 mt-4 gx-0">
        <h2 className="mb-3 fs-4">{title}</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Slider {...settings}>
          {movies.map((movie, index) => (
            <div key={index} className="px-2">
              <Card className="gallery-card border-0 position-relative overflow-hidden">
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="d-block w-100 gallery-img" />
                <Card.Body className="text-center">
                  <Card.Title className="text-light">{movie.Title}</Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    );
  }
}

export default Gallery;
