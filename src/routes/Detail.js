import React from "react";
import "./Detail.css";
import "../components/Movie.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state: movie },
    } = this.props;
    if (movie) {
      return (
        <div className="detail-container">
          <div className="movie movie-detail">
            <img src={movie.poster} alt={movie.title} title={movie.title} />
            <div className="movie__data">
              <h3 className="movie__title">{movie.title}</h3>
              <h5 className="movie__year">{movie.year}</h5>
              <ul className="movie__genres">
                {movie.genres.map((genre, index) =>
                  index === movie.genres.length - 1 ? (
                    <li key={index} className="movie__genre">
                      {genre}
                    </li>
                  ) : (
                    <li key={index} className="movie__genre">
                      {genre},
                    </li>
                  )
                )}
              </ul>
              <p className="movie__summary">{movie.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
