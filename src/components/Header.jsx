import React from "react";
import styled from "styled-components";
import Background from "../images/840843081452.jpg"
import { Link } from "react-router-dom"
import ConnectWallet from "../utils/ConnectWallet";

const Div = styled.div`
    background-image: url(${Background});
    height: 85vh;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    
`
const Title = styled.div`
    margin-top: 20vh;
    margin-left: 10%;
    font-size: xx-large;
    color: aqua;
    font-family: "Euclid Circular A", "Poppins";
    font-weight: 600;
    position: absolute;
`
const Description = styled.div`
    font-size: large;
    color: aqua;
    font-family: "Euclid Circular A", "Poppins";
    font-weight: 600;
    position: absolute;
    margin-top: 40vh;
    margin-left: 10%;
    margin-right: 40%;
`
const Wallet = styled(Link)`
margin-top: 70vh;
    margin-left:10%;
font-weight: bold;
text-decoration-line: none;
color: green;
font-family: "McLaren", cursive;
background-color: white;
border: 2px solid #4CAF50;
border-radius: 5px;
transition-duration: 0.4s;
text-align: center;
display: inline-block;
font-size: 16px;
cursor: pointer;
:hover{
    color: white;
    background-color: #080025;
}
`
const Dashboard = styled(Link)`
    margin: 3vh 10% auto 90% ;
    font-size: large;
    color: aqua;
    font-weight: bold;
    text-decoration-line: none;
    font-family: "Euclid Circular A", "Poppins";
    font-weight: 600;
    position: absolute;
    justify-self: end;
    cursor: pointer;
`
export default function Header() {
    return(
        <Div>
            <Dashboard to="/Dashboard"> Dashboard </Dashboard>
            <Title>
                project Name
            </Title>
            <Description>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dolorum accusamus alias culpa? Dolore iusto ipsam blanditiis autem magnam harum repudiandae expedita magni soluta omnis. Quam eos quae cumque velit?
            </Description>
            <Wallet><ConnectWallet/></Wallet>
        </Div>
    )
}