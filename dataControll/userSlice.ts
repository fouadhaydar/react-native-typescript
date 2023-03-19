import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

// type of the clothe that the user will add
export interface UserClothe {
    [clotheId: string] : {
        clotheName: string,
        clotheId: string,
        color: string ,
        size:string,
        price:number
    }
}
// data of the authenticated user & all the clothes they will by
export interface UserData {
    userName: string,
    userId: string,
    clothes: UserClothe // all the clothes add by the user 
    favorites:string[]
}
// cart of the user 
export interface UserCart extends UserData {
    cart: string[]
}
export const initialState: UserCart  = {
    userName: "",
    userId: "",
    clothes: {},
    favorites: [],
    cart: []
}

// type of the data of the user for store auth
type User = {
    userName: string,
    userId: string
}
type ClotheOfUser = {
    clotheName: string,
    clotheId: string,
    color: string ,
    size:string,
    price:number

}
export const UserSlice = createSlice({
    name:'userData',
    initialState,
    reducers:{
        // store the data of the authenticated user
        storeAuthData: (state,action:PayloadAction<User>) => {
            state.userName = action.payload.userName
            state.userId = action.payload.userId
        },
        // store the checked element 
        storeThecheckedColor:(state,action:PayloadAction<ClotheOfUser>)=>{
            // if the target element don't exist
            if (!state.clothes[`${action.payload.clotheId}`]) {
                
                // add the first element
                state.clothes[`${action.payload.clotheId}`] = action.payload
            }
            // if the target color exist   
            else {
                // loop throught all the key
                for (let key in state.clothes[`${action.payload.clotheId}`]) {

                    // compaire the key to the color targeted
                    if (state.clothes[`${action.payload.clotheId}`]) {

                        // delete the clothe object
                        if (state.clothes[`${action.payload.clotheId}`].color === action.payload.color) {
                            delete state.clothes[`${action.payload.clotheId}`]
                            return  
                        }
                        else {
                            // add the clothe targeted 
                            state.clothes[`${action.payload.clotheId}`] = action.payload
                            return
                        }
                        
                    } 
                    
                }
            }   
        },
        checkSize:(state,action:PayloadAction<{clotheId:string,size:string,color:string,clothe:ClotheOfUser}>) => {

            // change the value of the target size if any color is checked
            if ( state.clothes[`${action.payload.clotheId}`] ) {
                for (let key in state.clothes[`${action.payload.clotheId}`]) {

                    // if i change the size of the checked color
                    if ( key === 'size' && state.clothes[`${action.payload.clotheId}`].color === action.payload.color ) {
                        state.clothes[`${action.payload.clotheId}`].size = action.payload.size
                        return
                    } 

                    // if i target the size of different color checked
                    else if ( key === 'size' && state.clothes[`${action.payload.clotheId}`].color !== action.payload.color ) {
                        state.clothes[action.payload.clotheId].color = action.payload.clothe.color
                        state.clothes[action.payload.clotheId].size = action.payload.clothe.size
                        return
                    }
                }
            // change the value of the target size if any color was unchecked
            } else {
                state.clothes[action.payload.clotheId] = action.payload.clothe
            }
        }, 
        // add and delete from favorite array 
        addToFavorite:(state,action:PayloadAction<{clotehId:string}>)=>{
            const id = state.favorites.findIndex(id => id === action.payload.clotehId)
            if (id !== -1){
                state.favorites.splice(id,1)
            } else {
                state.favorites.push(action.payload.clotehId)
            }
        },
        addToCart:(state,action:PayloadAction<{clotheId:string}>)=>{
            if (!state.cart.find(ele => ele === action.payload.clotheId)) {
                state.cart.push(action.payload.clotheId)
            } 
        },
        removeFromCart:(state,action:PayloadAction<{clotheId:string}>)=>{
            // filter the cart array
            state.cart = state.cart.filter(id => id !== action.payload.clotheId)
            // unchecked the filtered element
            delete state.clothes[action.payload.clotheId]
        }
    }
})
// export the reducers functions
export const { storeAuthData, storeThecheckedColor, checkSize, addToFavorite, addToCart, removeFromCart  } = UserSlice.actions
// export the gloable state
export const selectData = (state:RootState) => state.userData
export default UserSlice.reducer