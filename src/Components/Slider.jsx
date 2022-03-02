import React from 'react'
import styled from 'styled-components'
const Slider = ({value, onChange}) => {
  return (
    <SliderStyle>
    <input type="range" value={value} onChange={onChange}  id="" className="slider" />
    </SliderStyle>
  )

}

export default Slider

const SliderStyle = styled.form`

 input[type=range].slider {
  width: 100%;
  margin: 0.9px 0;
  background-color: transparent;
  -webkit-appearance: none;
}
input[type=range].slider:focus {
  outline: none;
}
input[type=range].slider::-webkit-slider-runnable-track {
  background: #2792a5;
  border: 0;
  width: 100%;
  height: 5.2px;
  cursor: pointer;
}
input[type=range].slider::-webkit-slider-thumb {
  margin-top: -0.9px;
  width: 11px;
  height: 7px;
  background: #3071a9;
  border: 0.9px solid rgba(0, 30, 0, 0.57);
  border-radius: 4px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type=range].slider:focus::-webkit-slider-runnable-track {
  background: #2ca4ba;
}
input[type=range].slider::-moz-range-track {
  background: #2792a5;
  border: 0;
  width: 100%;
  height: 5.2px;
  cursor: pointer;
}
input[type=range].slider::-moz-range-thumb {
  width: 11px;
  height: 7px;
  background: #3071a9;
  border: 0.9px solid rgba(0, 30, 0, 0.57);
  border-radius: 4px;
  cursor: pointer;
}
input[type=range].slider::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 1.7px 0;
  color: transparent;
  width: 100%;
  height: 5.2px;
  cursor: pointer;
}
input[type=range].slider::-ms-fill-lower {
  background: #228090;
  border: 0;
}
input[type=range].slider::-ms-fill-upper {
  background: #2792a5;
  border: 0;
}
input[type=range].slider::-ms-thumb {
  width: 11px;
  height: 7px;
  background: #3071a9;
  border: 0.9px solid rgba(0, 30, 0, 0.57);
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0px;
  /*Needed to keep the Edge thumb centred*/
}
input[type=range].slider:focus::-ms-fill-lower {
  background: #2792a5;
}
input[type=range].slider:focus::-ms-fill-upper {
  background: #2ca4ba;
}
/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
@supports (-ms-ime-align:auto) {
  /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
  input[type=range].slider {
    margin: 0;
    /*Edge starts the margin from the thumb, not the track as other browsers do*/
  }
}

`