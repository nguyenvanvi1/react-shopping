import { createSlice } from "@reduxjs/toolkit"
const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems)):[] 
const initialState = { value : items} 
export const cartItemsSlice = createSlice({
    name:'cartItems',
    initialState,
    reducers : {
        addItem:(state, action)=>{
            const newItem = action.payload
            const duplicate = state.value.filter(e=>e.slug ===newItem.slug && e.color===newItem.color && e.size ===newItem.size)
            if(duplicate.length>0){
                state.value = state.value.filter(e=> e.slug !== newItem.slug|| e.color!==newItem.color&&e.size!==newItem.size)
            }
        }
    }
})