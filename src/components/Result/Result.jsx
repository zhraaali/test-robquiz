import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Result.css'

const Result = (props) => {
//     const [resultAnswer, setResultAnswer] = useState([]);
//   const url = 'https://robert-api.lavetro-agency.com/storage/';


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://robert-api.lavetro-agency.com/api/survey/${props.id}/answers`);
//         setResultAnswer(response.data.data);
//         console.log(response.data.data);
//       } catch (error) {
//         // console.error(error);
//       }
//     };

//     fetchData();
//   }, [id]);

  return (
    <div>
        <div className="ha-container-result" style={{width:'80%', margin:'0 auto'}}>
            <div className="ha-row-result" style={{display:'flex', justifyContent:'space-between', alignItems:'center',  padding:"5px", margin:"2px"}}>
            <ProgressBar now={60} style={{width:"25%"}} />
            <p style={{width:"70%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis minima fugit quam asperiores corrupti! Quibusdam similique iste minima necessitatibus, sunt ad est distinctio at quo reprehenderit ducimus atque iure vero.</p>
            </div>
        </div>
    </div>
  )
}

export default Result