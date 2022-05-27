import React from "react";
import { useState } from "react";
import Table from "./Table";

export default function Invoice() {
  const [data, setData] = useState({
    nameText: "",
    amount: ""
  });

  
  const [dataBank, setDataBank] = useState([]); //This is the databank
  //console.log(dataBank);

  const tableElements = dataBank.map((data) => {
    return <Table name={data.nameText} amount={data.amount} />;
  });

  let totalAmount = dataBank.reduce(
    (acc, curr) => acc + Number(curr.amount),
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function updateData(event) {
    event.preventDefault();

    setDataBank((oldData) => {
      return [...oldData, data];
    });
  }

  return (
    <div className="invoice">

      <h2>Welcome to SavingsGroup</h2>
      <p>A system to help you save and earn interest</p>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          name="nameText"
          value={data.nameText}
          onChange={handleChange}
        />
        <select  name="tier">
            <option value="choose">Choose Tier</option>
            <option value="tierOne">Tier 1 - 10,000 Naira</option>
            <option value="tierTwo">Tier 2 - 20,000 Naira</option>
            <option value="tierThree">Tier 3 - 30,000 Naira</option>
          </select>
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          value={data.amount}
          onChange={handleChange}
        />

        <button onClick={updateData}>Save</button>
      </form>

      
      <div className="invoice--table">
        <h3>Summary of investment for 1 week</h3>
        <div className="header"><p>Amount</p><p>Interest</p><p>Total Amount</p></div>

        {tableElements}
        
      </div>

      <div className="invoice--total">
        <p>Total amount contributed by participants: {totalAmount}</p>
      </div>
    </div>
  );
}
