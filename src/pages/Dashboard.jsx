import React from "react"
import Navbar from "../components/Navbar"
import styled from "styled-components"
import DashboardDataBox from "../components/DashboardDataBox"
import DynamicDepositIcon from "../utils/DynamicDepositIcon"
import FixedDepositIcon from "../utils/FixedDepositIcon"
import WithdrawIcon from "../utils/WithdrawIcon"


const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10rem 5%;
`
const ButtonBox = styled.div`
    width: 30%;
    display: grid;
    height: 5rem;
    margin-top: 10rem;
`
export default function Dashboard() {



    return (
        <div>
            <Navbar />
            <Div>
                <DashboardDataBox />
                <ButtonBox>
                    <DynamicDepositIcon/>
                    <FixedDepositIcon/>
                    <WithdrawIcon/>
                </ButtonBox>
            </Div>


        </div>

    )
}