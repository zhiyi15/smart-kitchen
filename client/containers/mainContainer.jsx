import React, { useState, useEffect } from 'react';
import ProduceList from './produceList.jsx';
import Create from './create.jsx';


function Main(props) {
  //  display poduce cards
  const [produce, setProduce] = useState(null);
  const [date, setDate] = useState('');

  // const handleChange = (id) => {
  //   //handl changes, extend the expire date on produce cards; once 'edit detail' buttom is clicked
  //   setDate()
  // };
  
  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    console.log('use effect');
    fetch('http://localhost:3000/produce')
      .then((res) => {
        console.log('res', res);
        return res.json();
      })
      .then((data) => {
        console.log('data in main', data);
        data.map((el) => {
         let been = Math.floor(Date.now() - el.dateAdded)
         if(been === el.expireDate){
          el.expireDate = 0
         } else if (been > el.expireDate){
          el.expireDate = been;
         }
        })
        setProduce(data);
      });
  }, []);

  return (
    // <Router>
      <div className="mainContainer">
        <Create
          produceState={{ produce, setProduce }}
          refreshPage={refreshPage}
        />
        {produce && <ProduceList produce={produce} setProduce={setProduce} dateState = {{date, setDate}}/>}
      </div>
    // </Router>
  );
}

export default Main;
