import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface cardsState {
    cards:{id:number,title:string,age:number,name?:string,poster?:string,}[];
    allCards:{id:number,title:string,age:number,name?:string,poster?:string,}[];
}

const initialState: cardsState = {
    cards:[],
    allCards:[]
}

const cardSlice = createSlice({
    name:'cards',
    initialState,
    reducers:{
        updateCards(state, action) {
            state.allCards= action.payload;
          },
        updateBasketCards(state, action) {
            state.cards= action.payload;
          },
        addCard(state,action){
            state.cards.unshift(action.payload);
        },
        deleteCurrentCard(state, action: PayloadAction<number>) {
            const index = action.payload;
            state.cards = state.cards.filter((_, i) => i !== index);
          },
    }
});

export default cardSlice.reducer;
export const {addCard,deleteCurrentCard,updateCards,updateBasketCards} = cardSlice.actions;