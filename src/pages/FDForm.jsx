import React from "react";
import { useState } from 'react';
import styled from "styled-components";
import Background from "../images/840843081452.jpg"
import ContractABI from "../ABI.json"
import { ethers } from "ethers";
const Div = styled.div`
    background-image: url(${Background});
    height:100vh;
    background-size: cover;
    background-repeat: no-repeat;

`
const Heading = styled.div`
    font-size: 5rem;
    font-family: "McLaren", cursive;
    color: aqua;
    font-weight: bold;
    text-decoration-line: none;
    margin: 10rem 10%;
    position: absolute;
`
const FormDiv = styled.div`
    width: 350px;
    margin: 20rem 15%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #000b24;
    position: absolute;
`
const Label = styled.label`
    color: aliceblue;
    font-family: "McLaren", cursive;
`
const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
`
const Submit = styled.input`
    background-color: blueviolet;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    :hover{
    color: #000000;
    background-color: #c7f4ff;
}
`
export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  // const [id, setId] = useState('')
  // const [depositAmount, setDepositAmount] = useState('')
  // const [currentAmount, setCurrentAmount] = useState('')
  // const [depositTime, setDepositTime] = useState('')
  // const [maturityPeriod, setmaturityPeriod] = useState('')
  // const [canWithdrawAnyTime, setCanWithdrawAnyTime] = useState(Boolean)

  let referenceID, depositAmount, currentAmount, depositTime, maturityPeriod, canWithdrawAnyTime, account 
  // const [savings, setSavings] = useState([])
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert(inputs);
  //   console.log(inputs)
  // }
  const contractAddress = "0x11d266bcB781472a4c2fc1884280dD8CaBb9f539";

  const func = async (e) => {
    e.preventDefault()
    // console.log(inputs)

    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, ContractABI, signer);

      // console.log(await typeof(contract.getIDs()));
      // console.log(await contract.getIDs());
      // let temp = await contract.getIDs();
      // console.log("temp", temp[0]._hex);

      // console.log(savings)
      // console.log(await contract.interestRate());
      await contract.deposit(inputs.amount, 0, inputs.period * 30 * 86400, false);
      // console.log("IDs", JSON.parse(JSON.stringify(await contract.getIDs())));const
      // console.log(ethers.BigNumber.from(await contract.getIDs()))
      // for (let i = 0; i < Object.keys(await contract.getIDs()).length; i++) {
      //   let temp1 = await contract.getDeposit(i);
      //   referenceID = temp[i]._hex
      //   depositAmount = temp1[0]._hex
      //   currentAmount = temp1[1]._hex
      //   depositTime = temp1[2]._hex
      //   maturityPeriod = temp1[3]._hex
      //   canWithdrawAnyTime = temp1[4]
        

      //  const data = { referenceID, depositAmount, currentAmount, depositTime, maturityPeriod, canWithdrawAnyTime };
      //   console.log(data.referenceID)

      //   fetch('http://localhost:8000/clientData', {
      //     method: 'POST',
      //     headers: { "content-type": "aplication/json"},
      //     body: JSON.stringify(data)
      //   }).then(() => {
      //     console.log("data added")
      //   })
      // }


      // console.log("Savings", await contract.getDeposit(1));
      //let staked = await ludoContract.startGame(currentAccount, gameStartData.coins);
    }
  
    else console.log("HEERE")
  }

  // const hello = async (e) => {
  // console.log(await contract.getIDs());
  // }
  return (
    <Div>
      <Heading>Fixed Deposit</Heading>
      <FormDiv>
        <form >
          <Label>enter the Amount($):
            <Input
              type="number"
              name="amount"
              value={inputs.amount || ""}
              onChange={handleChange}
            />
          </Label>
          <Label>Maturity period (Months):
            <Input
              type="number"
              name="period"
              value={inputs.period || ""}
              onChange={handleChange}
            />
          </Label>
          <Submit type="submit" onClick={func} />
          {/* <input type="submit" onClick={hello}/> */}
        </form>
      </FormDiv>
    </Div>

  )
}