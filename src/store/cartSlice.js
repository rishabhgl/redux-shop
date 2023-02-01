import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showCart: false,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCart(state){
            state.showCart = !state.showCart;
        },
        
        addItem(state,actions){
            const index = state.items.findIndex(item => item.id === actions.payload.id);
            let item = state.items[index];
            if (item)
            {
                item = {...item, amount: item.amount + 1};
                state.items[index] = item;
            }
            else{
                state.items.push({...actions.payload,amount: 1});
            }
        },

        removeItem(state,actions){
            const index = state.items.findIndex(book => book.id === actions.payload);
            if (state.items[index].amount == 1)
            {
                state.items.splice(index,1);
            }
            else{
                state.items[index].amount--;
            }
        }
    }
})

export const cartReducer = cartSlice.reducer;

export default cartSlice.actions;


