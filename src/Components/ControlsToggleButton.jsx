import React from "react";
import styled from "styled-components";

function ControlsToggleButton(props){
    let ButtonOne = props.defaultIcon;
    let ButtonTwo =props.changeIcon;
    const [buttonType, setButton] = React.useState(false);

    function handleChange(){
        if(props.type === "prev" || props.type === "next"){
            setButton(true);
            props.onClicked(props.type, true);
        }else{
            setButton(!buttonType);
            props.onClicked(props.type, !buttonType);
        }
    }

    return(
        <Button
            onClick={handleChange}
            className={props.type}
        >
            {
            
            !buttonType ?
                ButtonOne : 
                ButtonTwo
            }
        </Button>
    );
}

export default ControlsToggleButton;

const Button = styled.button`
    border: none;
    background-color: transparent;
`