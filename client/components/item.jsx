import React from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
// const navigate = useNavigate();
const Item = ({ name, quantity, dateAdded, expireDate, id }) => {
  const navigate = useNavigate();

  // console.log('datestate initems:', dateState);
  const handleClick = () => {
    fetch('http://localhost:3000/produce/' + id, {
      method: 'DELETE',
    }).then(() => {
      console.log('delete success!');
      // setProduce.setProduce(setProduce.produce);
      // use to update webpage setProduce
      // navigate('/')
    });
  };

  return (
    <div className="pr-preview">
      <p>Item Name: {name}</p>
      <p>Quantity: {quantity} </p>
      <p>
        Date Added:
         {/* {dateAdded} */}
        {`${new Date(dateAdded).getFullYear()}/ ${new Date(
          dateAdded
        ).getMonth()}/ ${new Date(dateAdded).getDate()}`}
      </p>
      <p>Expire In: {expireDate} days</p>
      <Link className="card-bt" 
      style={{textDecoration: 'none'}} 
      id='edit-bt' 
      to="produce/:id" 
      state={{id, name, quantity, expireDate, dateAdded}}>
        Edit detail
      </Link>
      <Link className="card-bt" id='delete-bt' style={{textDecoration: 'none'}} onClick={handleClick} to="/">
        DELETE item
      </Link>
    </div>
  );
};

export default Item;
