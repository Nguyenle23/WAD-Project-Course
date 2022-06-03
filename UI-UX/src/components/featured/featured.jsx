import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Modal, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./featured.scss";
import { getRandomContent } from "../../actions/index";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setGenre(value);
  };

  useEffect(() => {
    try {
      getRandomContent(type).then((res) => {
        setContent(res.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  }, [type]);

  return (
    <>
      <div className="featured">
        {type && (
          <div className="categoryNetflix">
            <span style={{ zIndex: "999", fontSize: "30px", fontWeight: "bold" }}>
              {type === "movies" ? "Movies" : "Series"}
            </span>
            <select
              name="genre"
              id="genre"
              onChange={handleChange}
              className="genreSelect"
            >
              <option>Genre</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="drama">Drama</option>
              <option value="thriller">Thriller</option>
              <option value="random">Random</option>
            </select>
          </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
          <img src={content.imgTitle} alt="" />
          <span className="desc">{content.desc}</span>
          <div className="buttons">
            <Link to="/movie" state={{ content }} className="linkStyle">
              <button className="play">
                <PlayArrow />
                <span>Play</span>
              </button>
            </Link>
            <button className="more" onClick={handleShow}>
              <InfoOutlined />
              <span>Info</span>
            </button>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        variant="flat"
      >
        {/* <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <Container>
              <span>{content.title}</span>
            </Container>
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="grid">
          <Container>
            <Row>
              <video
                className="video"
                autoPlay
                progress
                controls
                src={content.trailer}
              />
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container>
            <Row>
              <Col xs={12}>
                <span className="title">{content.title}</span>
              </Col>
              <Col xs={12} className="desc">
                {content.description}
              </Col>
              <span className="line"></span>
            </Row>
            <Row>
              <Col xs={12}>
                <span className="">Info On </span>
                <span className="title">{content.title}</span>
              </Col>
              <Col xs={12}>
                <span className="list">Genres: </span>
                <span className="content">{content.genre}</span>
              </Col>
              <Col xs={12}>
                <span className="list">Release date: </span>
                <span className="content">{content.year}</span>
              </Col>
              <Col xs={12}>
                <span className="list">Times: </span>
                <span className="content">{content.duration}</span>
              </Col>
            </Row>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
}
