import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import HomeComponent from '../Components/HomeComponent'
import NowPlaying from '../Components/NowPlaying'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Search from './Search'
import About from '../Components/About'
import TopAlbums from '../Components/TopAlbums'
import Videos from '../Components/Videos'
import Buzz from '../Components/Buzz'
import Favorites from '../Components/Favorites'
import MobileNav from '../Components/MobileNav'
import BottomNavBar from '../Components/BottomNavBar'
import CurrentPlaying from '../Components/CurrentPlaying'

function getCurrPage(pathName){
  switch(pathName){
    case "/home":
      return <HomeComponent/>
    case "/home/search":
      return <Search/>
    case "/home/favorites":
      return <Favorites/>
    case "/home/albums":
      return <TopAlbums/>
    case "/home/videos":
      return <Videos/>
    case "/home/buzz":
      return <Buzz/>
    case "/home/about":
      return <About/>
    default:
      if(pathName.startsWith("/home/playlists")){
        return(
          <></>
        )
      }
      return null
  }
}

const Home = () => {
  const [currMusic, setCurrMusic] =useState(null)
  const [Page, setCurrPage] = useState(<HomeComponent/>)
  const [screenSize, setScreenSize] = useState(undefined)



  let pathname = window.location.pathname
  useEffect(()=> {  
    setCurrPage(getCurrPage(pathname))
  }, [pathname])
  
  const {playing, bannerOpen} = useSelector(state => state.musicReducer)

  useEffect(() =>{
    setCurrMusic(playing) 
  }, [playing]) 

  window.addEventListener("resize", handleResize);

  function handleResize(){
    setScreenSize(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  })
  
  
  
  return (
    
    <HomeStyle>
     

      
        
        {
          screenSize <= 970 ? <MobileNav/> :  <Navbar classname="navber"/>
        }
      <div className="bodyComponent">
      <Sidebar/>
        {
            Page
        }

      </div>      
     
     {
       bannerOpen 
        && 
        <div id="currentPlaying">
          <CurrentPlaying/>
          </div>
     }
    
     <React.Fragment/>
      {
        currMusic ? <NowPlaying music={currMusic}/> : <></>
      }
      {
        screenSize <= 970 && <BottomNavBar/>
      }

      <React.Fragment/>
     
    </HomeStyle>
  )
}

export default Home

const HomeStyle = styled.div`
position: relative;
  .bodyComponent{
    display: flex;
    max-height: 80vh;
  }

  #currentPlaying{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    z-index: 1000;
    height: 80vh;

    @media(max-width:970px){
            height: 90vh;
        }
    
  }
`