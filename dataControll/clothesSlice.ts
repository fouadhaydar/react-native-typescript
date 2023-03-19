import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface Color {
    [color:string]: string[]// key of the color coming from the colors object and its value is the sizes
}
export interface Clothe  {
    name: string,
    catId: string,
    id: string,
    url: string[],
    colors: Color,
    price:number
}
export interface Clothes {
    clothes: Clothe[] // array that contain clothe object
}

export const initialState :Clothes = {
    clothes: [] 
}
export const ClothesSlice = createSlice({
    name:'clothes',
    initialState,
    reducers:{
        // add the clothes coming from the backend
        addClothes:(state,action: PayloadAction<Clothe>)=>{
            state.clothes.push(action.payload)
        },
    }
})
// export the reducers functions
export const { addClothes } = ClothesSlice.actions
// export the gloable state
export const selectClothes = (state:RootState) => state.clothes
export default ClothesSlice.reducer

