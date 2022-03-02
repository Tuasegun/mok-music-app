import React from 'react'
import styled from 'styled-components'
import SearchComponent from './SearchComponent'
import logoImg from '../assets/img/mokrimo.png'


function MobileNav() {
  return (
    <NavStyle>
        <div className="logo">
        <img src={logoImg} alt="" />
        </div>
        <SearchComponent/>
    </NavStyle>
  )
}

export default MobileNav

const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row;
    align-items: center;
    padding: 1em 2.12em 1em 1.0em;

    .logo{
    width: 200px;
    padding: 0em 2em;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

    @media(max-height: 610px){
        display: flex;
        flex-flow:row;
    }
`