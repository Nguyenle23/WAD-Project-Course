import Home from './pages/home/home';
import Login from './pages/login/login';
import Forgot from './pages/forgot/forgot';
import Register from './pages/register/register';
import Watch from './pages/watch/watch';
import Movie from './pages/movie/movie';
import New from './pages/new/new';
import User from './pages/user/User';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from './authContext/AuthContext';
import './app.scss';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/register" exact element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" exact element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/forgot/:id/:token" element={<Forgot />} />
        {user && (
          <>
            <Route path="/movies"  element={<Home type="movies"/>} />
            <Route path="/series" element={<Home type="series"/>} />
            <Route path="/watch" element={<Watch/>} />
            <Route path="/movie" element={<Movie/>} />
            <Route path="/newandtrending" element={<New/>} />
            <Route path="/user/:userId" element={<User/>} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
