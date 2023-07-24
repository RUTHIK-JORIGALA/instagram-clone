import React from 'react'
import './search.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import SearchList from '../../components/searchList/SearchList'
const Search = () => {
  return (
    <section className='search'>
      <div className="search-container">
        <div className="search-heading">
          <h1>Search</h1>
        </div>
        <div className="search-input-container">
          <input placeholder='Search' className='search-input'/>
          <AiFillCloseCircle className='search-close-icon'/>
        </div>
        <div className="search-controls">
          <h4>Recent</h4>
          <button className='search-clear-all hilight-color'>clear all</button>
        </div>
      </div>
      <div className="recentSearchList">
        <SearchList/>
        <SearchList/>
        <SearchList/>
        <SearchList/>
        <SearchList/>
      </div>
    </section>
  )
}

export default Search
