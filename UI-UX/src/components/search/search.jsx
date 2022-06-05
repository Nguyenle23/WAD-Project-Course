import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';

import './search.scss';

const SearchNav = (props) => {
  const { onSubmit } = props;
  const [keyword, setKeyword] = useState('');
  const typingRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (!onSubmit) return;

    if (typingRef.current) {
      clearTimeout(typingRef.current);
    };

    typingRef.current = setTimeout(() => {
      // const formValue = {
      //   value,
      // }
      onSubmit(value);
    }, 300);
  }

  return (
      <div className="right">
          <div className="search">
              <input 
                type="text" 
                placeholder="Search" 
                className="searchInput" 
                value={keyword}  
                onChange={handleInputChange}
              />
        </div>
      </div>
  );
};

export default SearchNav;

// SearchNav.propTypes = {
//   onSubmit: PropTypes.func,
// }

// SearchNav.defaultProps = {
//   onsubmit: null,
// }
