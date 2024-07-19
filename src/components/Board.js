import React, {useEffect} from "react";
import { GiTargetPrize } from "react-icons/gi";
import { IoTime } from "react-icons/io5";
import "./Board.css";
import { useSelector, useDispatch } from 'react-redux'
import { updateLeaderBoard } from '../redux/leaderBoardSlice'

export default function Board() {
  const data = useSelector(state =>state.leaderBoard.value);
  const dispatch = useDispatch();

  useEffect(()=>{
    const temp = [...data];
    temp.sort((a, b)=>{
        if(a.milliSeconds >= b.milliSeconds){
         return 1;
        }
        return -1;
    }) 
    dispatch(updateLeaderBoard(temp));
    
 }, [data.length]);
  const prize = [50000, 5000, 500];
  const getClass = (index)=>{
    if(index === 0){
      return "first-position-item"; 
    }
    else if(index === 1){
      return "second-position-item";
    }
    else if(index === 2){
      return "third-position-item";
    }
    else{
      return "board-item";
    }
  }
  const getPositionClass = (index)=>{
      if(index === 0){
        return "first-position-number";
      }
      else if(index === 1){
        return "second-position-number";
      }
      else if(index === 2){
        return "third-position-number";
      }
      else{
        return "position-number";
      }
  }
  return (
    <div className="leader-board">
      <table className="table">
        <thead >
          <tr className="board-header">
            <th><div style={{padding: '0 0.2rem'}}><GiTargetPrize /></div></th>
            <th>Name</th>
            <th></th>
            <th><IoTime />Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((player, index, data) => {
            return (
              <tr key={index} className={getClass(index, data.length)}>
                <td>
                  <div className={getPositionClass(index)}>
                    {index + 1}
                    </div>
                </td>
                <td className="name">
                  {player.name}
                </td>
                {prize[index] ? 
                <td className="prize-money">   
                 {prize[index] ? `₹${prize[index]}` :'' } 
                  </td> : <td></td>
                }
                <td className="time">{player.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
