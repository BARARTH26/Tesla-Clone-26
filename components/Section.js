import React from 'react';
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({Title,image,description,leftButtonText,rightButtonText}) {
    return (
        <Wrap bgImage={image}>
            <Fade bottom>
                <ItemText >
                    <h1>{Title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {leftButtonText}
                        </LeftButton>
                        {rightButtonText && <RightButton >
                            {rightButtonText}
                        </RightButton>}
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height : 100vh;
    width : 100vw;
    background-size : cover;
    background-position : center;
    background-repeat : no-repeat;
    display : flex;
    flex-direction : column;
    justify-content : space-between;  //vertical align
    align-items : center; //horizontal align
    background-image :${props => `url("/images/${props.bgImage}")`} ;
`

const ItemText = styled.div`
    padding-top : 15vh;
    text-align:center;

`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom : 30px;
    @media(max-width:768px){
        flex-direction: column;
    }
    
`
const LeftButton = styled.div`
    background-color : rgba(23,26,32,0.8);
    height : 40px;
    width : 256px;
    color : #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:8px;

`
const RightButton = styled(LeftButton)`
    background-color : #fff;
    opacity : 0.65;
    color: #111;
`

const DownArrow = styled.img`
    margin-top:20px;
    height : 40px;
    animation : animateDown infinite 1.5s;
`

const Buttons = styled.div`
    display:flex;
    flex-direction:column;   
`

