import React, { useState, useEffect } from "react"
import { ethers } from "ethers"
import ContractABI from "../ABI.json"
import Card from "../utils/Card"
import styled from "styled-components"

const Div = styled.div`
    margin-top: 10rem;
    width: 60%;
`

export default function DashboardData() {

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [amt, setAmt] = useState(0)
    // const [temp, setTemp] = useState(1)
    const fetchData = []
    var element = {};
    let abc;
    let Cards;
    const contractAddress = "0x11d266bcB781472a4c2fc1884280dD8CaBb9f539";
    let modifiedData;
    const func = async () => {
        // e.preventDefault()
        // console.log(inputs)

        const { ethereum } = window;
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, ContractABI, signer);

            //   console.log(await typeof(contract.getIDs()));
            //   console.log(await contract.getIDs());
            let temp = await contract.getIDs();

              console.log("temp", temp);


            // console.log(savings)
            // console.log(await contract.interestRate());
            // await contract.deposit(inputs.amount, inputs.period * 30 * 86400, false);
            // console.log("IDs", JSON.parse(JSON.stringify(await contract.getIDs())));
            // console.log(ethers.BigNumber.from(await contract.getIDs()))
            for (let i = 0; i < Object.keys(await contract.getIDs()).length; i++) {
                let temp2;
                
                    temp2 = await contract.getDeposit(temp[i]);
                
                console.log(temp2)

                // Object.assign(data, {"ID": temp[0]._hex, "DepositAmount": temp2[0]._hex, "CurrentAmount": temp2[1]._hex, "DepositTime": temp2[2]._hex, "MaturityPeriod": temp2[3]._hex, "canWithdrawAnyTime": temp2[4]})
                // data.push({ "_id": temp[0]._hex, "depositAmount": temp2[0]._hex, "currentAmount": temp2[1]._hex, "depositTime": temp2[2]._hex, "maturityPeriod": temp2[3]._hex, "canWithdrawAnyTime": temp2[4] })
                let obj = {
                    "_id": Number(temp[i]._hex),
                    "depositAmount": Number(temp2[0]._hex),
                    "currentAmount": Number(temp2[1]._hex),
                    "withdrawAmount": Number(temp2[2]._hex),
                    "depositTime": Number(temp2[3]._hex),
                    "maturityPeriod": Number(temp2[4]._hex),
                    "canWithdrawAnyTime": temp2[5]
                }

                if(obj._id > Number("0"))
                {

                    // console.log(typeof obj._id);
                    // fetchData.push(obj);
                    setData2(prev => [...prev, obj]);

                }

                setAmt(temp2[0]._hex);
                console.log("OBJ", obj)
                setData([...data, obj])
                // setData(prev => ({...prev,  "_id": temp[0]._hex, "depositAmount": temp2[0]._hex, "currentAmount": temp2[1]._hex, "depositTime": temp2[2]._hex, "maturityPeriod": temp2[3]._hex, "canWithdrawAnyTime": temp2[4] }));

                // setTemp(i)
                // element._id = temp[i]._hex;
                // element.depositAmount = temp2[0]._hex;
                // element.currentAmount = temp2[1]._hex;
                // element.depositTime = temp2[2]._hex;
                // element.maturityPeriod = temp2[3]._hex;
                // element.canWithdrawAnyTime = temp2[4];
                // data.push(element);
            }

            console.log("data", data);

            // for(var i = 0; i < fetchData.length; i++)
            // {
            //     fetchData[i].depositAmount = fetchData[i]._hex;
            // }
            // console.log("updatedFetch", fetchData);

            // abc = data;
            // console.log("abc",  abc[1].depositTime)
            //  modifiedData = JSON.parse(data);

            // console.log("Savings", await contract.getDeposit(1));
            //let staked = await ludoContract.startGame(currentAccount, gameStartData.coins);

        }
        else console.log("HEERE")
        return data;
    }
    console.log("fetched", fetchData);
    console.log("Data")
    console.log("AMT", amt)
    // console.log("HERY", temp)

    function func2() {
        console.log("DATA", data);
        console.log("FUNC2", fetchData);
        console.log("AMT", amt)
        // console.log("temp", temp);
    }

    useEffect(() => {
        func();
        // console.log("data", (data));
        // console.log("abc", )
        // console.log("modifiedData", modifiedData)
    }, [])
    // console.log("YO", fetchData);
    // let abc = data;
    // console.log("abc", abc[0])


    // const Cards = data.map(item => {
    //     return (
    //         <div>
    //             {item._id}
    //             <Card
    //                 _id={item._id}
    //                 depositAmount={item.depositAmount}
    //                 depositTime={item.depositTime}
    //                 currentAmount={item.currentAmount}
    //                 maturityPeriod={item.maturityPeriod}
    //                 canWithdrawAnyTime={item.canWithdrawAnyTime}
    //             />
    //         </div>
    //     )
    // })


    /* //     <h1>ID {item._id}</h1>
                      //     <h1>Deposit Amount {item.depositAmount}</h1>
                      //     <h1>Deposit Time {item.depositTime}</h1>
                      //     <h1>Current Amount {item.currentAmount}</h1>
                      //     <h1>Maturity period {item.maturityPeriod}</h1>
                      </div>) */
    return (
        <Div>
            
            {
                data2.map(item => {
                    return (
                        <div>
                            <Card
                                _id={item._id}
                                depositAmount={item.depositAmount}
                                depositTime={item.depositTime}
                                currentAmount={item.currentAmount}
                                maturityPeriod={item.maturityPeriod}
                                canWithdrawAnyTime={item.canWithdrawAnyTime}
                            />
                        </div>)

                })
            }

            
        </Div>

    )
}