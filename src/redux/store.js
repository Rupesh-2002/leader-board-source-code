import { configureStore } from '@reduxjs/toolkit'
import leaderBoardReducer from './leaderBoardSlice'
export default configureStore({
  reducer: {
    leaderBoard : leaderBoardReducer
  }
})