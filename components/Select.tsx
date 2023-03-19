import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { orang } from "./HeaderBtn";
import {  Clothe, } from "../dataControll/clothesSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { AntDesign } from '@expo/vector-icons';
import {v4 as uuidv4} from 'uuid'
import { checkSize, selectData, storeThecheckedColor, } from "../dataControll/userSlice";


type SelectProps = {
    color:string,
    targetClothe:Clothe,
    sizes:string[]
}

export default function Select ({color,sizes,targetClothe}:SelectProps) {
  const clotheId = targetClothe.id
    const dispatch = useAppDispatch()
    const userData = useAppSelector(selectData)

    function handleCheck (color:string) {
      dispatch(storeThecheckedColor(
            {
              clotheName:targetClothe.name,
              clotheId:clotheId,
              color:color,
              size:sizes[0],
              price:targetClothe.price
          }
      ))
    }
    
    // console.log(userData.clothes[clotheId])


    return (
      <>
      <View className='flex flex-row justify-start items-center py-3 flex-1 ml-5 mt-3'>
          <FontAwesome name="circle" size={40} color={color} onPress={()=>handleCheck(color)} style={{
            marginRight:10,
            position:"relative"
            }}/>
        { userData.clothes[clotheId]?.color === color && <AntDesign name="check" size={24} color={orang} 
        style={{ position:'absolute',top:22,left:5 }} onPress={()=> handleCheck(color)}/>}
        <View style={styles.size}>
            {sizes.map((element,index)=>{
              const uniqueKey = uuidv4()
              return (
                <View key={uniqueKey}>
                <Pressable 
                  onPress={()=> dispatch(checkSize({clotheId:clotheId ,size:element,color:color,clothe:{clotheId:clotheId,clotheName:targetClothe.name,color:color,size:element,price:targetClothe.price}}))} 
                  style={{
                    padding:10,
                    backgroundColor: userData.clothes[clotheId]?.size === element  && userData.clothes[clotheId]?.color === color ? orang : 'white',
                    width:50,
                    height:40, 
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                    borderLeftWidth: index !== 0 ? 1 : 0,
                    borderLeftColor: 'black',
                    }} 
                    >
                  <Text style={{color:'black'}}>
                      {element}
                  </Text>
                </Pressable>
              </View>
              )
            })}
        </View>
      </View>
      </>
    )
}
const styles = StyleSheet.create({
  size:{
    borderWidth:1,
    borderColor:'black',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap',
    borderRadius:10,
    overflow:'hidden'
  }

})
