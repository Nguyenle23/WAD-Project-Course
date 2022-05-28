import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./listitem.scss";
import { getMovie } from "../../actions/index";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    try {
      getMovie(item).then((res) => {
        setMovie(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [item]);

  return (
    <Link to="/watch" state={{ movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.thumbnail} alt={movie.title} />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="title">{movie.title}</div>
              <span className="limit">+{movie.limit}</span>

              <div className="movie-header">
                <div className="icons">
                  <PlayArrow className="icon" />
                  <Add className="icon" />
                  <ThumbUpAltOutlined className="icon" />
                  <ThumbDownOutlined className="icon" />
                </div>
                <div className="itemInfoTop">
                  <span className="duration">{movie.duration} || </span>
                  <span>{movie.year}</span>
                </div>
              </div>

              {/* <div className="genre">{movie.title}</div> */}

              <div className="genre">{movie.genre}</div>
              <div className="desc">{movie.description}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
