import React, {useState} from 'react'
import styled from 'styled-components'
import { BsHouseFill,  } from 'react-icons/bs'
import { IoSearchOutline } from 'react-icons/io5'
import { MdExplore, MdPerson } from 'react-icons/md'

import {Link} from "react-router-dom"

const BottomNavBar = () => {
  const [menuItems, setMenutItem] = useState([
    {
      id:0,
      icon: <BsHouseFill />,
      href: "/home",
      label: "Home"
    },
    {
      id:1,
      icon: <IoSearchOutline/>,
      href: "/home/search",
      label: "Search"
    },
    {
      id:2,
      icon: <MdPerson/>,
      href: "/home/about",
      label: "Profile"
    },
    {
      id:3,
      icon: <MdExplore/>,
      href: "/home/search",
      label: "Search"
    }
  ])
  let currPath = window.location.pathname

  return (
  <ButtomNavigation>
    {
      menuItems.map(({id, icon, href, label}) =>(
        <Link className="nav-link" key={id} to={href}>
          <div className={`${currPath === href ? "BottomNavAction active": "BottomNavAction"}`}
          > 

          <span className='icon'>{icon}</span>
            <span className="label">
              {
                label
              }
            </span>
          </div>
        </Link>
      ))
    }
  </ButtomNavigation>
  )
}

export default BottomNavBar

const ButtomNavigation = styled.div`
  display: flex;
  width: 99%;
    @media(max-width: 320px){
      div{
        flex-shrink: 1;
      }
    }

  .nav-link{
    position: relative;
    width: 99%;
    background-color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .BottomNavAction{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .icon{
        font-weight: bolder;
        font-size: 2rem;
        color: #4B4B4B;
  }

  .label{
    display: none;
    z-index: 1000;
    position: absolute;
    bottom: 5px;
    color: #4b4b4b;

    @media(max-height: 610px){
      display: none;
    }
  }

  .active{
    color: #4b4b4b;
  }

  .active + .label {
    display: block;
    @media(max-height: 610px){
      display: none;
    }
  }
  }

    
`