import React,{useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setSearch } from '../actions/actions'
import { Link } from 'react-router-dom'


const SearchComponent = () => {
    const [isSearchBarOpen, setSearchBarOpen] = useState(false)
    const handleSearchBarOpen = () =>{
        setSearchBarOpen(!isSearchBarOpen)
    }
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }

    const searchRef = useRef();
    useEffect(() => {
        if(isSearchBarOpen === true){
            searchRef.current.focus();
        }
    })

    const dispatch = useDispatch();
    const searchLink = useRef();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearch(searchQuery.toLocaleLowerCase()))
        if(searchQuery !== "")
            searchLink.current.click();
    }

    return (

    <StyledSearch className={`${isSearchBarOpen ? "SearchBar Open" : "SearchBar"}`}>
         
        {
            !isSearchBarOpen &&
            <div onClick={handleSearchBarOpen} className="icons">
                <AiOutlineSearch className="searchIcon" />
            <span className="hide">Search</span>
            </div>
             
        }
        <form onSubmit={handleSearch}>
        {
            isSearchBarOpen &&
            <>
        <Link exact to={"/home/search"} ref={searchLink}/>    
        <input id="search-input"
        type="text" 
        name="searchQuery"
        onChange={handleSearchQuery} 
        className='searchInput' 
        placeholder='Search'
        ref={searchRef}
        />
            </>
        }
        
         </form>
          
    </StyledSearch>
  )
}

export default SearchComponent

const StyledSearch = styled.div`
    padding: 0.62em 1.8em;
    display: flex;
    align-items: center;
    background-color: #F2F2F2;
    width: 60%;
    .searchIcon{
        font-size: 1em;
        color: #7D7D7D;
    }
    .searchInput{
      width: inherit;
      outline: 0;
      border: none;
      background-color: #F2F2F2;
    }
    .icons{
        display: flex;
        align-items: center;
        font-size: 1em;
        color: #7D7D7D;
    }
`