import {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import { ref , uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import "./newProduct.css";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { createMovie } from "../../context/movieContext/apiCall";

export default function NewProduct() {
  const [movie, setMovie] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const history = useHistory();
  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  }; 

  const upload = () => {
  const storageRef = ref(storage, 'film/' + video.name);
  const uploadTask = uploadBytesResumable(storageRef, video.file);

  uploadTask.on('state_changed',
    (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      }, 
      (error) => {
        // https://firebase.google.com/docs/storage/web/handle-errors
        console.log(error);
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMovie((prev) => {
            return { ...prev, video: downloadURL };
          });
          setUploaded((prev) => prev + 1);
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  const handleUpload = (e) => {
    e.preventDefault();
    upload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, dispatch);
    history.push("/movies");
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="text" id="img" name="img" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="text" id="imgTitle" name="imgTitle" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="text" id="thumbnail" name="thumbnail" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" placeholder="Thor love and thunder" name="title" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" placeholder="description" name="description" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" placeholder="year" name="year" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" placeholder="genre" name="genre" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" placeholder="limit" name="limit" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Is Serires ?</label>
          <select name="isSeries" id="isSeries" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="text" name="trailer" onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" name="video" onChange={e => setVideo(e.target.files[0])} />
        </div>
        {uploaded === 1 ? (
            <button className="addProductButton" onClick={handleSubmit}>Create</button>
        ) : (
            <button className="productUploadButton" onClick={handleUpload}>Upload</button>
        )}
      </form>
    </div>
  );
}
