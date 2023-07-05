import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Item from '../components/item.jsx';



const ProduceList = (props) => {
  // const { _id } = useParams;
  const { produce, setProduce } = props;
  const { date, setDate, dateState } = props;
  console.log('produce in props:', produce);
  // produce._id is undefined but produce returns an array/object
  // const navigate = useNavigate();
  // console.log('produce in PL', produce);

  return (
    <div>
      <h3>Freshness Tracker</h3>
      <div className="produceList-container">
        {produce.map((pr, i) => (
          <Item
            key = {i}
            name={pr.name}
            quantity={pr.quantity}
            dateAdded={pr.dateAdded}
            expireDate={pr.expireDate}
            id={pr._id}
            // setProduce={{produce, setProduce}}
            // dateState= {{date, setDate}}
          />
        ))}
      </div>

    </div>
  );
};
export default ProduceList;
