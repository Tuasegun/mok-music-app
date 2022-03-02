import React from 'react'
import  styled from 'styled-components'

const Name = ({className, length, name}) => {
  return (
    <StyledName>
    <>
      <p className={className}>
          {length > 12 ? name.substring(0,12)+"..." : name}
          </p>  
    </>
    </StyledName>
  )
}

export default Name

const StyledName = styled.div`
    .song-name{
        font-weight: bolder;
        font-size: 1.1rem;
        color: #4B4B4B;
    }
    .author-name{
        font-weight: lighter;
        color: #000000;
        
    }
`
