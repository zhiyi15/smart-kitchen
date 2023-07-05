import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

//fetch to certain id endpoint, and load the specific card, make change and update to db
const DetailPage = (props) => {
  const navigate = useNavigate();

  const location = useLocation();

  const { id, name, quantity, expireDate, dateAdded } = location.state;
  console.log(id);

  const handleClick = (e) => {
    console.log('e in detail fetch: ->', e);
    fetch('http://localhost:3000/produce/' + id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        expireDate: e,
      }),
    }).then(() => {
      console.log('update completed');
    });
  };

  const handleChange = () => {
    navigate(-1);
  };
  return (
    <div className="detail-page">
      <div>
        <p>Item Name: {name} </p>
        <p>Date Added: {dateAdded}</p>
        <label>Current Quantity: {quantity}</label>
      </div>
      <label>Currently expire in: {expireDate} day/s</label>
      <label> To Extend the days</label>
      <select onClick={(e) => handleClick(e.target.value)}>
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
      <button id="submit-bt" onClick={handleChange}>
        submit change
      </button>
    </div>
  );
};

export default DetailPage;
