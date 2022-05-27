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
      <form>
        <input
          type="text"
          placeholder="Name"
          name="nameText"
          value={data.nameText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Amount"
          name="amount"
          value={data.amount}
          onChange={handleChange}
        />

        <button onClick={updateData}>Save</button>
      </form>
      <div className="invoice--table">{tableElements}</div>

      <div className="invoice--total">
        <p>Total amount contributed by participants {totalAmount}</p>
      </div>
    </div>
  );
}
