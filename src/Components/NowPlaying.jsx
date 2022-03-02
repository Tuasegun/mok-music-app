import React,{useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import {AiOutlineForward, AiFillBackward, }  from 'react-icons/ai';
import {MdOutlineRepeatOne} from 'react-icons/md' 
import {BsPauseCircleFill, BsPlayCircleFill, BsVolumeOffFill, BsVolumeUpFill} from 'react-icons/bs'
import {IoRepeat} from 'react-icons/io5'
import {IoIosShuffle} from 'react-icons/io'
import Name from './Name';
import ControlsToggleButton from './ControlsToggleButton';
// import Slider from './Slider';
import { useDispatch, useSelector } from 'react-redux';
import {setBannerOpen, setCurrentPlaying} from '../actions/actions'
 import Slider from '@mui/material/Slider'

const NowPlaying = ({music}) => {

    const [{id, name, author_name, img, musicName}, setCurrTrack] = useState(music);
    const [isRepeatClicked, setRepeatClick] = useState(false);
    const [isPrevClicked, setPrevClicked] = useState(false);
    const [isNextClicked, setNextClicked] = useState(false);
    const [isPlaying, setPlayPauseClicked] = useState(false);
    const [isVolumeClicked, setVolumeClicked] = useState(false)
    
    const [volume, setVolume] =useState(50)
    const [seekTime, setSeekTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currTime, setCurrTime] = useState(0);
    const [bannerToggle, setBannerToggle] = useState(false);

    const audioElement = useRef();
    const dispatch = useDispatch();
    const {playlists} = useSelector(state => state.musicReducer)

    const handleToggle = (type, val) =>{
        switch(type){
            case "repeat":
                setRepeatClick(val);
                break;
            case "prev":
                setPrevClicked(val);
                break;
            case "play-pause":
                setPlayPauseClicked(val);
                break;
            case "next":
                setNextClicked(val);
                break    
            case "volume":
                setVolumeClicked(val);
                break;
            default:
                break;
        }
    };

    const handleSeekChange = (event, newValue) =>{
        audioElement.current.currentTime = (newValue*duration)/100;
        setSeekTime(newValue)
    };

    
    const handleVolumeChange = (event, newValue) => {
        setVolume(parseFloat(newValue));
    };
    
    const handleBannerToggle = () =>{
        setBannerToggle(!bannerToggle);
    }

    useEffect(() =>{
        dispatch(setBannerOpen(bannerToggle));
    },[dispatch, bannerToggle])

    useEffect(() => {
        isPlaying
            ? audioElement.current.play().then(()=>{}).catch((e)=>{audioElement.current.pause(); audioElement.current.currentTime=0;})
            : audioElement.current.pause();
        audioElement.current.loop = isRepeatClicked;
        audioElement.current.volume = volume / 100;
        audioElement.current.muted = isVolumeClicked;
        audioElement.current.onloadeddata = () => {
            if (audioElement.current != null)
                setDuration(audioElement.current.duration)
        };
        setInterval(() => {
            if (audioElement.current !== null)
                setCurrTime(audioElement.current.currentTime);
        })
    });



   useEffect(() => {
       setCurrTrack(music)
   },[music])

   useEffect(() =>{
       setSeekTime((currTime)/ (duration/100))
   }, [currTime, duration])

   useEffect(()=>{
       audioElement.current.onended = () => {
           setNextClicked(true);
       }
   })

   useEffect(()=>{
       if(isNextClicked){
           let currTrackId = (id+1) % playlists.length;
           dispatch(setCurrentPlaying(playlists[currTrackId]))
           setNextClicked(false)
       }
       if(isPrevClicked){
           let currTrackId = (id-1) % playlists.length;
           if((id-1)<0){
               currTrackId = playlists.length - 1;
           }
           dispatch(setCurrentPlaying(playlists[currTrackId]))
           setPrevClicked(false)
       }
   },[dispatch, id, isNextClicked, isPrevClicked, playlists])

   function formatTime(secs){
       const t = new Date(1970, 0, 1);
       t.setSeconds(secs);
       let s = t.toTimeString().substr(0, 8)
       if(secs > 86399)
            s = Math.floor((t- Date.parse("1/1/70"))/ 360000) + s.substr(2);
        return s.substring(3)
   }
  return (
    <PlayingStyle> 
        <div className="playback">
        <p><span>{formatTime(currTime)}</span></p>
               {
                 !isNaN(seekTime) &&   <Slider size="small" value={seekTime} onChange={handleSeekChange}/>
               }
         <p><span>{formatTime(duration)}</span></p>
        </div>

        <div className='bottom-container'>
        <div className="playSection">
           <ControlsToggleButton  type={"repeat"} defaultIcon={<IoRepeat className='playIcons'/>} changeIcon={<MdOutlineRepeatOne className='playIcons' />} onClicked={handleToggle}/>
           
           <ControlsToggleButton type={"prev"} defaultIcon={<AiFillBackward className="playIcons" />} changeIcon={<AiFillBackward className="playIcons"/>} onClicked={handleToggle}/>

            <audio ref={audioElement} src={require("../assets/Music/" + musicName)} preload={"metadata"} />
            
            <ControlsToggleButton  type={"play-pause"} defaultIcon={<BsPauseCircleFill className="pause playIcons"/>} changeIcon={<BsPlayCircleFill className="pause playIcons"/>} onClicked={handleToggle} />
            
            <ControlsToggleButton type={"next"} onClicked={handleToggle} defaultIcon={<AiOutlineForward className="playIcons"/>} changeIcon={<AiOutlineForward className="playIcons"/>} />
        </div>

        
        <div onClick={handleBannerToggle} className="curr-music-container">
            <div className="imgContainer">
                <img src={require("../assets/img/" + img)} alt={name} className="icon"/>
            </div>
            <div className="curr-music-details">
                <Name name={name} className={"song-name"} length={name.length}/
                >
                <Name name={author_name} className={"author-name"} length={author_name.length}/
                >
            </div>
        </div>
      
        <div className="playback-widgets">
            <div className="slider">
            <Slider size="small" value={(volume) || ""} onChange={handleVolumeChange}/>
            </div>
            <ControlsToggleButton type={"volume"} defaultIcon={<BsVolumeUpFill className='playIcons'/>} changeIcon={<BsVolumeOffFill className='playIcons'/>} onClicked={handleToggle}/>

            
        </div>
        </div>
    </PlayingStyle>
  )
}

export default NowPlaying

const PlayingStyle = styled.div`
    position: relative;
    padding: 0.5em 0.5em 0.5em 0.75em;
    background: #FFFFFF;
    width: 95%;
    box-shadow: 0px -3px 6px #0000000D;
    align-items: center;

    
    .bottom-container{
        display: flex;
        justify-content: space-between;

        @media(max-width:970px){
        padding: 0em 0em;
        justify-content: center;
    }   
    }

    .playSection{
        display: flex;
        align-items: center;
        column-gap: 1em;
        @media(max-width: 970px){
            justify-content: flex-end;
            flex-grow: 0;
            padding: 0 1em;
            column-gap: 0.1em;
        }
        .playIcons{
            font-size: 1.5em;
            color: #4B4B4B;
        }
        .pause{
            font-size: 3em;
            color: #37BEF1;
        }
    }
    .curr-music-container{
        display: flex;
        align-items: center;
        column-gap: 1em;
        @media(max-width: 970px){
         column-gap: 0.1em;
        }
    }
    .imgContainer{
        width: 5em;
        height: 5em;
        object-fit: cover;
        img{
            width: 100%;
            height: 100%;
        }
        @media(max-width: 970px){
         width: 3em;
         height: 3em;
        }
    
    }
    .playIcons{
            font-size: 1.5em;
            color: #4B4B4B;
        }

    .slider{
        width: 100%;
    }    
    .playback{
        display: flex;
        align-items: center;
        column-gap: 1em;
      
    }

    .playback-widgets{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 20%;
        
        @media(max-width: 970px){
            display: none;
        }
    }
`