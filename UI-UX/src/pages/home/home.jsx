import React, {useState, useEffect} from 'react';

import NavBar from '../../components/navbar/navbar';
import Featured from '../../components/featured/featured';
import List from '../../components/list/list';
import './home.scss';
import { getRandomList } from '../../actions/index';

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState('');
  const [filter, setFilter] = useState([]);

  const childToParent = (data) => {
    if (data.length === 0 || data === []) {
      alert('No results found');
    } else {
      setFilter(data);
    }
  }

  useEffect(() => {
      try {
        getRandomList(type, genre)
        .then(res => {
          var render
          const listData = res.data
          for (var i of listData) {
              if (i.isDestroy === true) {
                  render = listData.filter(list => list.isDestroy === false)
              }
              render = listData.filter(list => list.isDestroy === false)
          }
          setLists(render);
        });
      } catch (error) {
        console.log(error);
      }  
  }, [type, genre]);

  return (
    <div className="homeContainer">
      <NavBar childToParent={childToParent}/>
      <Featured type={type} setGenre={setGenre}/>
      {filter.map((filter) => (
        <h1>{filter.title}</h1>
      ))}
      {!lists ?
        <div className="notice">No {type} for this genre <strong>{genre}</strong></div>
      :
        lists.map((list, index) => (
          <List key={index} list={list} />
        ))
      }
    </div>
  );
};

export default Home;
