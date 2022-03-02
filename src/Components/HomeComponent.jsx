import React from 'react'
import Playlist from './Playlist'

import styled from 'styled-components'
import MusicCardGrid from './MusicCardGrid'
const HomeComponent = () => {
  return (
    <HomeComponentStyle>
       <MusicCardGrid/> 
        {/* <Playlist/>  */}
    </HomeComponentStyle>
  )
}

export default HomeComponent

const HomeComponentStyle = styled.div`
    flex: 8;
    /* min-width: 100vh;
    height: 80vh; */
    padding: 3.625em 6.43em 9em 3.68em;
    background-color: #F8F8F8;
    overflow-y: auto;
    @media(max-width:970px){
      padding: 0em 5em 0em 2em;
    }
`