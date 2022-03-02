import React from 'react'
import MusicCard from './MusicCard'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

const MusicCardGrid = () => {
    const {playlists} = useSelector(state => state.musicReducer);
    return (
        <GridStyle>
            <div className={"music-card-container"}>
            {
                playlists.map(item => (
                    <MusicCard key={item.id} music={item}/>
                ))
            }
        </div>
    </GridStyle>
  )
}

const GridStyle = styled.div`
     padding: 2em 0em 0em 1.12em;
.music-card-container{
    display: grid;
    width: 100%;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(10.5em, 1fr));
    grid-gap: 2.8em
} 

`

export default MusicCardGrid

export const Container = ({children}) => {
    return (
        <ContainerStyle className={"Container"}>
            {children}
        </ContainerStyle>
    )
}

const ContainerStyle = styled.div`
    height: 80vh;
  overflow-y: auto;
  >div{
    height: 100%;
  }
  @media(max-width: 970px){
    .Container{
        height: 70vh;
    }
  }
`
