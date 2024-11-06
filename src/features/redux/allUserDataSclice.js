import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 userData:{},
 fetchedData:[
  {
    userName:'test@gmail.com',
    password: 123,
    useRole: 'admin'
  },
  {
    userName:'view@gmail.com',
    password: 123,
    useRole: 'user'
  }
 ]
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    
    registerUser:async(state ,action)=>{
      return{
        ...state,
        userData:action.payload
      }
    },

  },
});
// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
