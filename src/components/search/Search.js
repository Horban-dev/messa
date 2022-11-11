import React from 'react';
import sr from './Search.module.css';

const Search = () => (
        <div >
            <input
                className={sr.search_panel}
                type="text"
                placeholder='Search or start new chat'
            />
        </div>
);

export default Search;
