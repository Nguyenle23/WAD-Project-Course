import React, {useState, useEffect} from 'react';

import NavBar from '../../components/navbar/navbar';
import Featured from '../../components/featured/featured';
import List from '../../components/list/list';
import './new.scss';
import {getRandomList} from '../../actions/index';

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState('');

  useEffect(() => {
      try {
        getRandomList(type, genre)
        .then(res => {
          setLists(res.data);
        });
      } catch (error) {
        console.log(error);
      }  
  }, [type, genre]);

  return (
    <div className="home">
      <NavBar />
      <Featured type={type} setGenre={setGenre}/>
      {lists.length === 0 ?
        <div className="notice">No {type} for this genre <strong>{genre}</strong></div>
      :
      lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};

export default Home;
