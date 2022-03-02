import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const CurrentPlaying = () => {
    const {playing} = useSelector(state => state.musicReducer);
    const [{img, name, author_name}, setCurrentPlaying] = useState(playing);
    useEffect(()=>{
        setCurrentPlaying(playing);
    }, [playing])

    
  return (
    <CurrentPlayingStyle>
        <img src={require("../assets/img/"+img)} alt="" className="banner" />
        <div className="music-left">
            <div className="wrapper">
                <img src={require("../assets/img/"+img)} alt="" className="music-cover" />
                <div className="detail">
                    <h3>{name}</h3>
                    <p>{author_name}</p>
                </div>
            </div>
        </div>
    </CurrentPlayingStyle>
  )
}

export default CurrentPlaying

const CurrentPlayingStyle = styled.div`
        height: 90vh;
        display: flex;
        /* position: relative; */
       
        @media(max-width:970px){
            height: 80vh;
        }
        .music-left{
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .wrapper{
                display: flex;
                flex-direction: column;
            }
            .music-cover{
                width: 100%;
                 max-width: 25em; 
            }

            .detail{
                padding: 0.625em;
                background-color: #ffffff;
                text-align: center;
                width: auto;
                
            }
        }
    .banner{
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: 100%;
        object-position: center;
        filter: brightness(0.3);
    }
`