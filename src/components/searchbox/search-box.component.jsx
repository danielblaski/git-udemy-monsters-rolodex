import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className = 'search'  
        type='search' 
        placeholder={placeholder}
        onChange={handleChange} 
        />
    /*this is responsible for the search field input - this is a native event*/

)