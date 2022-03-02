import React from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiArrowDownSLine} from 'react-icons/ri'
import SearchComponent from './SearchComponent'
import logoImg from '../assets/img/mokrimo.png'

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="logo">
      <img src={logoImg} alt="" />
      </div>
      <SearchComponent/>
      <div className="profile">
        <div className="imgContainer">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="profileImg" />
        </div>
        <div className="profileDetails">
          <div className="profileName">Name <span><RiArrowDownSLine/></span> </div>
          <div className="profileEmail">Email</div>
        </div>
      </div>
      </NavbarStyle>
  )
}

export default Navbar

const NavbarStyle = styled.div`
  padding: 1em 2.12em 1em 3.3em;
  display: flex;
  width: 95%;
  position: fixed;
  z-index: 1000;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;

  .logo{
    width: 200px;
    padding: 0em 2em;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .profile{
    display: flex;
    align-items: center;
      .imgContainer{
        height: 2.688em;
        width: 2.688em;
        

        img{
          height: 100%;
          width: 100%;
          object-fit: contain;
          border-radius: 1.5em;
        }
      }

      .profileDetails{
        padding-left: 0.5em;
        .profileName{
          font-family: 'Heebo';
          font-size: 1.25em;
          font-style: normal;
          color: #747F88;
          font-weight: medium;
          line-height: 1.3em;
          align-items: center ;
        }

        .profileEmail{
          font-size: 1em;
          color: #747F88;
          font-family: 'Heebo';

        }
      }
  }
`