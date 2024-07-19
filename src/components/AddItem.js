import React, { useState } from 'react'
import './AddItem.css'
import { useSelector, useDispatch } from 'react-redux'
import { addItem } from '../redux/leaderBoardSlice'
export default function AddItem() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [isActive, setIsActive] = useState(false);

  const data = useSelector(state =>state.leaderBoard.value);
  const dispatch = useDispatch();

  const handleNameChange = (e)=>{
    const v = e.target.value;
    setName(v);
  }
  const handleTimeChange = (e)=>{
    const v = e.target.value;
    setTime(v);
  }
  const calMilliseconds = (time)=>{
    let mins = +time.substring(0, 2);
    let sec = +time.substring(3, 5);
    let milli = +time.substring(6);
    return 60000*mins + 1000*sec + milli*10;
  }
  const handleSubmit = (e)=>{
     e.preventDefault();
     setIsActive(false);
     const milli = calMilliseconds(time);
     dispatch(addItem( {name, time, milliSeconds : milli}));
  }
  const handleClick = ()=>{
    setIsActive(true);
  }
  return (
    <div className="add">
        <button onClick={handleClick} className='btn'>Add Item</button>
        <form onSubmit={handleSubmit} className={`${isActive ? "": "inActiveForm"} form`}>
            <label htmlFor="name" >Name</label>
            <input type="text" id='name'  value={name} placeholder='Enter name' onChange={handleNameChange} required/>

            <label htmlFor="time">Time</label>
            <input type="text" id='name' value={time} placeholder='Enter time (MM:SS::MSS)' pattern="[0-5][0-9]:[0-5][0-9]::[0-9]{2}" onChange={handleTimeChange} required/>
            <input type="submit"  />
        </form>
    </div>
  )
}
