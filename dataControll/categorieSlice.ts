import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"


export interface Categorie {
    name:string,
    id:string,
    image:string
}

export interface CategoriesState  {
    categories: Categorie[]
}

export const initialState: CategoriesState =  {
    categories:[]
}

export const categorieSlice = createSlice({
    name: 'categorie',
    initialState,
    reducers:{
        addCategories:(state, action: PayloadAction<Categorie>)=>{
            state.categories.push(action.payload)
        }
    }
})

export const { addCategories } = categorieSlice.actions
export const selectCategorie = (state: RootState) =>  state.categorie
export default categorieSlice.reducer