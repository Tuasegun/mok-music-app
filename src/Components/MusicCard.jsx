import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {increaseTimesPlayed, setCurrentPlaying} from "../actions/actions";
import { BsPlayCircleFill } from 'react-icons/bs';
import Name from './Name'


const MusicCard = (props) => {
    const {name, img, author_name} = props.music;

    const dispatch = useDispatch()

    const [isHovered, setHovered] = React.useState(false);

    function handleResponse(){
        setHovered(!isHovered)
    }

    function handlePlay() {
        dispatch(setCurrentPlaying(props.music))
        dispatch(increaseTimesPlayed(props.music.id))
    }



  return (
    <MusicCardStyle>
        {
            <>
            <div className="music-card-cover" onMouseOver={handleResponse} onClick={handlePlay}>
                <img src={require("../assets/img/" + img)} alt={name}/>
                <div className="play-circle">
                    <BsPlayCircleFill />
                </div>
            </div>
            
            <React.Fragment>
                <Name name={name} className={"song-name"} length={name.length} />
                <Name name={author_name} className={"author-name"} length={author_name.length} />
            </React.Fragment>
            </>
        }
    </MusicCardStyle>
  )
}

export default MusicCard

const MusicCardStyle = styled.div`
    padding: 10px;
    .music-card-cover{
      position: relative;
      display: flex;
      max-width: 10.5em;
        min-height: 10.5em;
        object-fit: cover;
      img{
          width: 13em;
          height: 13em;
      }
      .play-circle{
          position: relative;
          visibility: hidden;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
      }

    }

    .music-card-cover:hover{
        cursor: pointer;
        
        img{
            filter: brightness(0.34);
        }

        .play-circle{
            color: #fff;
            visibility: visible;
        }
    }
`