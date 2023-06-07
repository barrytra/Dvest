import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: auto;
    height: auto;
    position: relative;
    border-radius: 10px;
    flex: 0 0 auto;        
    display: flex;          
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
`

const WholeDiv = styled.div`
    width: auto;
    height: auto;
    min-width: 300px;
    min-height: 300px;
    max-width: 100%;
    max-height: 450px;
    margin: 0.5rem;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    
`
const Title = styled.h1`
margin: 0.5rem;
margin-bottom: 1rem;
font-size: 1.1rem;
font-weight: 500;
color: #0c0c0c;
text-decoration: none;
    
`
const Address =styled.p`
color: #0c0c0c;
text-decoration: none;
margin: 0.5rem;
`
const Food =styled.p`
color: #0c0c0c;
text-decoration: none;
margin: 0.5rem;
`

export default function Card(props) {
    // const data = props.data
    // const Cards = data.map((props) => {
    //     return (
    //         <div>

    //         </div>
    //     )
    // })
    return (
        <Div>
            <WholeDiv>
               
                <Title>{props._id}</Title>
                <Address>{props.depositAmount}</Address>
                <Food>Deposit Time {props.depositTime}</Food>
                <Food>Current Amount {props.currentAmount}</Food>
               
                {(props.canWithdrawAnyTime) ? <Food> Maturity period {props.maturityPeriod} </Food> : null}
            
            </WholeDiv>

        </Div>
    )
}