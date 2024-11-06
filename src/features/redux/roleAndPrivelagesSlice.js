import { createSlice } from "@reduxjs/toolkit";


const initialState = {
 privelages:{
    CREATE_USER:false,
    SHOW_PRODUCT:false
 },
 userRole:''
 
};

const roleAndPrivelagesSlice = createSlice({
  name: "roleAndPrivelagesSlice",
  initialState: initialState,
  reducers: {
    
    setRoleAndPrivilage: (state ,action)=>{
        // let updatedObject = {}
        console.log(Object.keys(state.privelages))
    //   return{
    //     ...state,
        
    //   }
    },

  },
});
// export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export const { setRoleAndPrivilage } = roleAndPrivelagesSlice.actions;
export default roleAndPrivelagesSlice.reducer;
