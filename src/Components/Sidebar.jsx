import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarStyle>
      <ul className='menuList'>
      <Link className='listlink' to="/home"><li className='menuListItem'>Home</li></Link>
      <Link className='listlink' to="/home/about" ><li className='menuListItem'>About</li></Link>
      <Link className='listlink' to="/home/search"><li className='menuListItem'>Search</li></Link>
      <Link className='listlink' to="/home/albums"><li className='menuListItem'>Albums</li></Link>
      <Link className='listlink' to="/home/favorites"><li className='menuListItem'>Favorites</li></Link>
      <Link className='listlink' to="/home/videos"><li className='menuListItem'>Videos</li></Link>
      <Link className='listlink' to="/home/favorites"> <li className='menuListItem'>Buzz</li></Link>
      </ul>
    </SidebarStyle>
  )
}

export default Sidebar

const SidebarStyle = styled.div`
  flex:1;
  padding: 7.3em 5.2em 3.6em 3.3em;
  width: auto;
  height: 80vh;
  
  background-color: #FFFFFF;
  @media(max-width: 970px){
    display: none;
    flex: 0;
  }
  .menuList{
    padding: 0;
    list-style-type: none;
    
    .menuSubList{
      list-style-type: none;
      font-family: 'Heebo';
      font-weight: normal;
      font-size: 1.0em;
      padding-top: 1.6em;
    }
    .menuListItem{
      font-size: 1.25em;
      color: #4B4B4B;
      font-family: 'Poppins';
      font-weight: 600;
      font-style: normal;
      padding-bottom: 1.45em;
      text-decoration: none;
    }
  }

  .listlink{
    text-decoration: none;
    cursor: pointer;
  }
`