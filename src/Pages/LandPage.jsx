import React from 'react'
import styled from 'styled-components'
import Woman from '../assets/img/woman.png';
import { Link } from 'react-router-dom';
import logoImg from '../assets/img/mokrimo.png' 

const LandPage = () => {
  return (
    <LandingStyle>
        <nav className='navSection'>
            <div className="logo">
                MOKRIMO MUSIC🎧
            </div>
        </nav>
        <section className="bodySection">
            <div className="left-section">
                <div className="overlay">
                <div className="largeCircleCont">
                </div>
                <div className="womanCont">
                <img src={Woman} className="woman" alt="" />
                </div>
                </div>
                <div className="smallCircleCont">
                </div>
            </div>
            <div className="right-section">
                <div className="largeText">
                Come have some fun😛
                </div>
                <div className="smallText">
                   Listen to the few songs I've put here, I'll add more later 
                </div>
                <div className="joinButton">
                  <Link to="/home" className="myLink">Proceed</Link>
                </div>
            </div>
        </section>
    </LandingStyle>
  )
}

export default LandPage

const LandingStyle = styled.div`
    padding: 1.0em 8.06em 0em 2.8em;
    height: 100%;
    background-color: #2F303A;
    @media(max-width: 960px){
            padding: 1.0em 2em 5em 1em; 
        }
    .navSection{

        .logo{
        font-size: 4.5em;
        font-weight: 600;
        font-family: 'Heebo';
        color: #FFFFFF;
    }
    }

    
    .bodySection{
        display: flex;
        gap: 5em;

        @media(max-width: 960px){
            flex-direction: column;
    
        }


        .left-section{
            display: flex;
            .overlay{
                img{
                width: 100%;
                height: 100%;
                display: block;
            }   
                .womanCont{
                    max-width: 30em;
                    height: 90vh;
                    position: relative;
                    z-index: 2;
                    padding: 1em 0em 0em 5em;
                    img{
                width: 100%;
                height: 99%;
                display: block;
                object-fit: conver;
            }
                }
                .largeCircleCont{
                    width: 23.7em;
                    height: 23.7em;
                    background-color: #BC3CA31A;
                    border-radius: 50%;
                    position: absolute;
                    z-index: 1;
                    bottom: 0;
                }
            }

            .smallCircleCont{
                    height: 17.5em;
                    width: 17.5em;
                    position: relative;
                    border-radius: 50%;
                    background-color: #140FFD1A;

                    @media(max-width: 960px){
                        display: none;
                }

                }


        }

        .right-section{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left; 
            padding-left: 3.9em;

            @media(max-width: 960px){
                        align-items: left;
                        justify-content: flex-start;
                }

            .largeText{
                font-size: 4em;
                font-weight: 400;
                font-family: 'Poppins';
                color: #FFFFFF;
                @media(max-width: 960px){
                    font-size:2.9em;
                    font-weight: 500;
                    text-align: left;
                }
            }

            .smallText{
                font-size: 2.125em;
                font-weight: 400;
                font-style: normal;
                color: #FFFFFF;
            }

            .joinButton{
                display: flex;
                justify-content: center;
                margin-top: 1em;
                padding: 0.5em 1em;
                border: 5px;
                width: 4em;
                background-color: #1762A7;
                font-size: 2.188em;
                color: #FFFFFF;
                font-weight: 400;
                cursor: pointer;
                text-decoration: none;
                .myLink{
                    text-decoration: none;
                    color: #FFFFFF;
                }
            }
        }
    }
`
