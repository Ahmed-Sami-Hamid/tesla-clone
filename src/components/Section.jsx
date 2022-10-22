import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title , description , backgroundImg , leftBtnText , rightBtnText}) {
  return (
    <Container bgImage={backgroundImg}>
        <Fade bottom>
            <ItmeText>
                <H1>
                    {title}
                </H1>
                <p>
                    {description}
                </p>
            </ItmeText>
        </Fade>
        <Buttons>
            <Fade top>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>

                    { rightBtnText &&
                        <RightButton>
                            {rightBtnText}
                        </RightButton>
                    }
                </ButtonGroup>
            </Fade>
            <Fade>
                <DownArrow src="/images/down-arrow.svg" />
            </Fade>
            
        </Buttons>
    </Container>
  )
}

export default Section

const H1 = styled.h1`
    font-size:2.5em;
`

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:orange;
    ${'' /* background-image:url('images/model-s.jpg'); */}
    background-size:cover;
    background-position:center;
    backgound-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-image: ${props => ` url("/images/${props.bgImage}")`};

`;
const ItmeText = styled.div`
    padding-top:15vh;
    text-align:center;
    
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom : 30px;
    @media (max-width: 768px)
    {
        flex-direction: column;
    }
`;

const LeftButton = styled.div`
    background-color:rgba(23 , 26 , 32 , 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor:pointer;
    margin:8px;


`;

const RightButton = styled(LeftButton)`
    background-color:#fff;
    opacity:0.65;
    color:black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`
const Buttons = styled.div``