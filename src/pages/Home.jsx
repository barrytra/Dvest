import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import FixedDepositIcon from "../utils/FixedDepositIcon"
import DynamicDepositIcon from "../utils/DynamicDepositIcon"

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10rem 5%;
    /* position: relative; */
`
const Fixed = styled.div`
    border: 2px solid;
    width: 40%;
    height: 30rem;
    position: relative;
    :hover{
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
`
const Dynamic = styled.div`
    border: 2px solid;
    width: 40%;
    position: relative;
    height: 30rem;
    :hover{
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }
`
const Desc1 = styled.p`
    text-align: center;
    text-decoration: blueviolet;
    font-family: "McLaren", cursive;
    position: absolute;
    top: 20%;
    padding: 10px;
`
const Desc2 = styled.p`
    text-align: center;
    text-decoration: blueviolet;
    font-family: "McLaren", cursive;
    position: absolute;
    top: 20%;    
    padding: 10px;
`
const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20rem;
`

export default function Home() {
    return (
        <div>
            <Header />
            <Div>
                <Fixed>
                    <Desc1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores molestias ullam corrupti! Ducimus nobis laboriosam, numquam blanditiis a sunt.</Desc1>
                    <Button><FixedDepositIcon/></Button>
                </Fixed>
                <Dynamic>
                    <Desc2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta itaque iste tempore ad assumenda voluptates, quidem fuga optio laboriosam repudiandae harum omnis? Doloremque nobis dolorem sint, perspiciatis obcaecati illum.</Desc2>
                    <Button><DynamicDepositIcon/></Button>
                </Dynamic>
            </Div>
        </div>

    )
}
