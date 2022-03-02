import React from 'react'
import Segun from '../assets/img/segun.png'
import styled from 'styled-components'

function About() {
  return (
    <AboutStyle>
      <div className="img-container">
        <img src={Segun} alt="" />
      </div>
      <div className="text-container">
      <div className='name'>
        <h2>SEGUN</h2>
        <h2>OGUNTUASE</h2>
      </div>
      <div className='role'>
        <p>LEAD DEV</p>
      </div>
      <div className="story">
        <p>
          A Computer Engineering Undergraduate that loves building stuff and learning things about technlogy and decentralized finance. I'm currently available to work on world projects and do meaningful work with anyone interested. I also collaborating with people.
          I also contribute to Open Source in my spare time and learn about Web 3.
        </p>
      </div>
      </div>
      
    </AboutStyle>
  )
}

export default About

const AboutStyle = styled.div`
    flex: 8;
    width: 100%;
    padding: 10.625em 2em 1.5em 10em;
    background-color: #E1E1E4;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30em, 1fr));
    gap: 3em;
    position: relative;
    overflow-y: auto;
    flex-direction: row;

    @media(max-width:790px){
        flex-direction: column;
        padding: 5em 2em 5em 2em;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(10em, 1fr));
    }
    .img-container{
      padding: 1em 5em 1em 3em;
      position: relative;
      display: flex;
      justify-content: center;
      background-color: #91919c;

      img{
          height: 100%;
          width: 100%;
          object-fit: cover;
      }
      
    }

    .text-container{
      padding: 1em 1.5em 3em 1.5em;
      background-color: #FEFFFF;
      position: relative;
      width: auto;
    }
    .name{
      h2{
        color: #242524;
        font-size: 2.8em;
        font-family: 'Poppins';

        @media(max-width:970px){
          font-size: 2.0em;
        }
      }
    }
    .role{

      p{
        font-weight: 500;
        color: #D62323;
        letter-spacing: 0.125em;
        font-family: 'Heebo';
        font-size: 1.8em;
          
      }
    }
    .story{
              p{
          font-size: 1.2em;
          word-wrap: initial;
        }
      }
`