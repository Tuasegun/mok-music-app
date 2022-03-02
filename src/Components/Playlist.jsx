import React from 'react'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import {BiHeartCircle} from 'react-icons/bi'
import {IoArrowRedoCircleOutline} from 'react-icons/io5'
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi'
import styled from 'styled-components'

const Playlist = () => {
  return (
    <PlaylistStyle>
      <div className='title'>
        Playlist  
      </div>
      <div>
        <table className='musicTable'>
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>Time</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
              <th>Date</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='playIcon'><AiOutlinePlayCircle/></td>
              <td className='songTitle'>Gum body</td>
              <td>3:08</td>
              <td>Burna boy ft Jorja</td>
              <td>African Giant</td>
              <td>AfroPop</td>
              <td>11.07.2019</td>
              <td><BiHeartCircle/> <IoArrowRedoCircleOutline/> <HiOutlineDotsCircleHorizontal/></td>
            </tr>
            <tr>
              <td className='playIcon'><AiOutlinePlayCircle/></td>
              <td className='songTitle'>Gum body</td>
              <td>3:08</td>
              <td>Burna boy ft Jorja</td>
              <td>African Giant</td>
              <td>AfroPop</td>
              <td>11.07.2019</td>
              <td><BiHeartCircle/> <IoArrowRedoCircleOutline/> <HiOutlineDotsCircleHorizontal/></td>
            </tr>
            <tr>
              <td className='playIcon' ><AiOutlinePlayCircle/></td>
              <td className='songTitle'>Gum body</td>
              <td>3:08</td>
              <td>Burna boy ft Jorja</td>
              <td>African Giant</td>
              <td>AfroPop</td>
              <td>11.07.2019</td>
              <td><BiHeartCircle/> <IoArrowRedoCircleOutline/> <HiOutlineDotsCircleHorizontal/></td>
            </tr>
            <tr>
              <td className='playIcon'><AiOutlinePlayCircle/></td>
              <td className='songTitle'>Gum body</td>
              <td>3:08</td>
              <td>Burna boy ft Jorja</td>
              <td>African Giant</td>
              <td>AfroPop</td>
              <td>11.07.2019</td>
              <td><BiHeartCircle/> <IoArrowRedoCircleOutline/> <HiOutlineDotsCircleHorizontal/></td>
            </tr>
            <tr>
              <td className='playIcon'><AiOutlinePlayCircle/></td>
              <td className='songTitle'>Gum body</td>
              <td>3:08</td>
              <td>Burna boy ft Jorja</td>
              <td>African Giant</td>
              <td>AfroPop</td>
              <td>11.07.2019</td>
              <td><BiHeartCircle/> <IoArrowRedoCircleOutline/> <HiOutlineDotsCircleHorizontal/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </PlaylistStyle>
  )
}

export default Playlist

const PlaylistStyle = styled.div`
  background-color: #FFFFFF;
  margin-top: 2.25em;
  padding: 1.75em 1.438em 1.25em 1.438em;
  overflow: auto;
  .title{
       font-size: 1.6em;
       color:#4B4B4B;
       font-style: normal;
       font-family: 'Poppins';
       padding-left: 0.85em;
  }

  .musicTable{
    width: 100%;
    font-size: 1.125em;
    font-weight: 600;
    font-family: 'Heebo';
    font-style: normal;
     color: #6D6D6D; 
    
    td,th{
      padding: 1em;
    }
    
    td{
      text-align: center;
      font-size: 1.188em;
      font-weight: normal;

    }
    .playIcon{
        color: #B8B8B8;
      }
    
    .songTitle{
      font-weight: 600;
      color: #4B4B4B;
      
    }  
  }
`