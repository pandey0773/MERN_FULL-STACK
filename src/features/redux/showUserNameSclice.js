import { createSlice } from "@reduxjs/toolkit";


const initialState = {
userAllData:''
};

const showUserNameSlice = createSlice({
  name: "showUserNameSlice",
  initialState: initialState,
  reducers: {
    
    setUserName: (state ,action)=>{
        console.log(action.payload,'from reduser');
        // state.userName=action.payload;
      return{
        ...state,
        userAllData:action.payload
        
      }
    },

  },
});

export const { setUserName } = showUserNameSlice.actions;
export default showUserNameSlice.reducer;
