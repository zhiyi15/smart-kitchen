import React, { useEffect } from 'react';
import { useState } from 'react';

function Create(props) {
  //destructure name, qt, expD to usestate
  const [name, setName] = useState('');
  const [quantity, setQt] = useState('');
  const [expireDate, setDate] = useState('-');

  const handleSubmit = (e) => {
    e.preventDefault();
    const produce = { name, quantity, expireDate };

    // console.log('produce in Create', produce);
    fetch('http://localhost:3000/produce', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(produce),
    }).then(() => {
      console.log('produce in create', produce);
      console.log('new card added!');
      console.log('setProduce in create:', props.produceState);
      props.produceState.setProduce(
        props.produceState.produce.concat([
          {
            id: produce._id,
            name,
            quantity: quantity,
            expireDate: expireDate,
            dateAdded: Date.now(),
          },
        ])
      );
    });
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Quantity</label>
        <input
          type="text"
          value={quantity}
          required
          onChange={(e) => setQt(e.target.value)}
        ></input>
        <label> Expire in </label>
        <select value={expireDate} onChange={(e) => setDate(e.target.value)}>
          <option value="-">-</option>
          <option value="1">1 days</option>
          <option value="3">3 days</option>
          <option value="5">5 days</option>
          <option value="7">1 week</option>
          <option value="14">2 weeks</option>
          <option value="21">3 weeks</option>
          <option value="28">4 weeks</option>
          <option value="60">2 months</option>
          <option value="90">3 months</option>
          <option value="120">4 months</option>
        </select>
        <button id='new-bt' onClick={() => props.refreshPage()}>Add New Tracking</button>
      </form>
    </div>
  );
}

export default Create;

//useEffect to fetch data
