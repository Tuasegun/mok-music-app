import React from 'react'
import styled from 'styled-components'
import Chance from '../assets/img/Chance.png'
import Drake from '../assets/img/Drake.png'
import Shekpe from '../assets/img/goodtimealbum.png'
import Lion from '../assets/img/Lion.png'
import Burna from '../assets/img/Burna.png'
import Kanye from '../assets/img/kanye1.png'
import Zlatan from '../assets/img/Zlatan-1.png'
import { AiFillRightCircle } from 'react-icons/ai'

const TopAlbums = () => {
  return (
    <StyledTopAlbums>
      <div className="topAlbums">
        <div className='taText'>Top Albums</div>
        <div className='taIcons'><AiFillRightCircle/></div>
      </div>

      <div className="cards">
        <div className="card">
          <div className="imgContainer">
               <img src={Chance} alt="" className="AlbumImage" />
          </div>
          <div className="titleContainer">
            Chance 3
          </div>
          <div className="artistNameContainer">
          Chance The Rapper
          </div>
        </div>

        <div className="card">
          <div className="imgContainer">
               <img src={Drake} alt="" className="AlbumImage" />
          </div>
          <div className="titleContainer">
            Take Care
          </div>
          <div className="artistNameContainer">
          Drake
          </div>
        </div>

        <div className="card">
          <div className="imgContainer">
               <img src={Burna} alt="" className="AlbumImage" />
          </div>
          <div className="titleContainer">
            African Giant
          </div>
          <div className="artistNameContainer">
          Burna Boy
          </div>
        </div>


        <div className="card">
          <div className="imgContainer">
               <img src={Lion} alt="" className="AlbumImage" />
          </div>
          <div className="titleContainer">
            Zanku
          </div>
          <div className="artistNameContainer">
          Zlatan Ibile
          </div>
        </div>

        <div className="card">
          <div className="imgContainer">
               <img src={Zlatan} alt="" className="AlbumImage" />
          </div>
          <div className="titleContainer">
            Chance 3
          </div>
          <div className="artistNameContainer">
          Chance The Rapper
          </div>
        </div>

        <div className="card">
          <div className="imgContainer">
               <img src={Shekpe} alt="" className="AlbumImage" />
          </div>
          <div className="titleContainer">
            Chance 3
          </div>
          <div className="artistNameContainer">
          Chance The Rapper
          </div>
        </div>

        <div className="card">
          <div className="imgContainer">
               <img src={Kanye} alt="" className="AlbumImage" />
          </div>
          <div className="titleContainer">
            Chance 3
          </div>
          <div className="artistNameContainer">
          Chance The Rapper
          </div>
        
        </div>

      </div>
    </StyledTopAlbums>
  )
}

export default TopAlbums

const StyledTopAlbums = styled.div`
    flex: 8;
    padding: 3.625em 6.43em 1.5em 20.68em; 
    background-color: #F8F8F8;
    @media(max-width:970px){
      padding: 0em;
    }
   .topAlbums{
     display: flex;
     justify-content: space-between;
     align-items: center;
     .taText{
       font-size: 1.6em;
       color:#4B4B4B;
       font-style: normal;
       font-family: 'Poppins';
       font-weight: 600;
     }
     .taIcons{
       font-size: 1.6em;
       color: #37BEF1;

     }
   }
   
   .cards{
     display: grid;
     padding: 2em 0em 0em 1.12em ;
     grid-template-columns: repeat(auto-fit, minmax(10.5em, 1fr));
    
     .imgContainer{
       max-height: 10.5em;
       max-width: 10.5em;
       padding-bottom: 0.8em;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
     }
     .titleContainer{
      font-size: 1.38em;
      color: #4B4B4B;
      font-family: 'Heebo';
      font-weight: 600;
      line-height: 1.6em;
     }

     .artistNameContainer{
       font-size: 1.125em;
       color: #A4A4A4;
       font-family: 'Heebo';
       line-height: 1.43em;
     }
    }

`  