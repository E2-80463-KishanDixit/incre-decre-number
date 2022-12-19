import React,{ useState } from 'react';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Clock from 'react-digital-clock';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  var[numVal,setnumVal]= useState(0);

  const incre=()=>{
    setnumVal(++numVal);
  }

  const decre=()=>{
    if(numVal<=0){
      alert('Value below  Zero not found');
      return 0;
    }
    setnumVal(--numVal);
  }
  return (
     <>
     <div className='main_div'>
      <p>Clock</p> 
      <Clock className='clock' id='#clk'/>
       <div className='functional_div'>
        <h1   className='designing'>My Incredrement app</h1>
        <p >{numVal}</p>
        <div className='button_div,designing' >
        <Tooltip title="Add"><Button  onClick={incre} className='btn_green'><AddIcon/></Button></Tooltip>
        <Tooltip title="Delete"><Button onClick={decre} className='btn_red'><RemoveIcon/></Button></Tooltip>
        </div>
       </div>
     </div>
     </>
  );
}
export default App;
