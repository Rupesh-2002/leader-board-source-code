import { createSlice } from '@reduxjs/toolkit'

export const leaderBoardSlice = createSlice({
  name: 'leaderBoard',
  initialState: {
    value: [
        { name: "Raghu", time: "01:56::23", milliSeconds: 116230},
        { name: "Sai", time: "01:23::23", milliSeconds : 83230 },
        { name: "Raj", time: "00:54::20", milliSeconds : 54200},
        { name: "Pavan", time: "01:06::56", milliSeconds : 66560, },
        { name: "Vinay", time: "01:52::23", milliSeconds: 112230 },
        { name: "Rahul", time: "00:45::23", milliSeconds : 45230 },
        { name: "Kumar", time: "00:43::54", milliSeconds : 43540 },
        { name: "Mani", time: "00:56::53", milliSeconds : 56530 },
        { name: "Karthik", time: "01:23::23", milliSeconds : 83230 },
        { name: "Sameer", time: "01:32::23", milliSeconds : 92230 },
        { name: "Revanth", time: "02:54::34", milliSeconds : 174340 },
        { name: "Basha", time: "00:23::24", milliSeconds :  23240},
        { name: "Gokul", time: "00:45::24", milliSeconds : 45240 },
        { name: "Ravi", time: "00:32::54", milliSeconds : 32540 },    
      ]
  },
  reducers: {
   
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    updateLeaderBoard : (state, action)=>{
      state.value = [...action.payload];
    }
  }
})

// Action creators are generated for each case reducer function
export const { addItem, updateLeaderBoard } = leaderBoardSlice.actions

export default leaderBoardSlice.reducer