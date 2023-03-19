import { useState } from "react";
import {  View,StyleSheet, ScrollView, Dimensions, Text, Pressable, Button } from "react-native"
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectClothes } from "../dataControll/clothesSlice";
import { blue } from "../components/HeaderBtn";
import ImageComponent from "../components/ImageComponent";
import Select from "../components/Select";
import {v4 as uuidv4} from 'uuid'
import { addToCart, selectData, storeThecheckedColor } from "../dataControll/userSlice";
import { useSelector } from "react-redux";



export type DetailsProps = {
  route:any
}

export function Details({route}:DetailsProps) {
  const dispach = useAppDispatch()
  const data = useSelector(selectData)
  const [noElement,setNoElement] = useState(false)
  // get the size of the device
  const { width,height } = Dimensions.get('window')

  // get the data coming from redux that store the data coming from the backend
  const Clothes = useAppSelector(selectClothes)

  // get the target clothe 
  const clothe = Clothes.clothes.find((element) => element.id === route.params.clotheId)

  // add the checked element to the userSlice
  function handleButton (id:string) {
    if(data.clothes[id]) {
      setNoElement(false)
      dispach(addToCart({clotheId:id}))
    } else {
      setNoElement(true)
      console.log('there is no checked element')
    }
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <ImageComponent url={'../assets/clothes/3.jpg'} height={height} width={width}/>
        <View style={[styles.container,{width:width - 20}]}>
          <View className='w-[100%] m-5'>
          <Text style={{fontSize:18,fontWeight:'600' ,padding:2, marginBottom:4}}>Select color and size:</Text>
          <Text style={{fontSize:16,padding:2,marginBottom:4}}>Price ${clothe?.price}</Text>
          {clothe?.colors && Object.entries(clothe?.colors).map(([key,value])=>{
            const uniqueKey = uuidv4()

              return <Select 
                color={key}
                sizes={value}
                key={uniqueKey}
                targetClothe={clothe}  
                />
            })}
          </View>
          {noElement && <Text style={{ fontSize:12 ,color:'red',textAlign:'center',marginBottom:10 ,width:'50%'}}> There is no element to add please select one color. </Text>}
          <View className="w-[60%] rounded-[5px] py-1 px-2 mb-5" style={{backgroundColor:blue,}}>
            <Button title='Add To Cart'color={'white'} onPress={()=> handleButton(route.params.clotheId)} />
          </View>
        </View>
        
    </ScrollView>
  )
}

export default Details
const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignSelf:'center',
    alignItems:'center'
  },
  text: {
    fontSize:20,
    fontWeight:'bold',
    margin:'2.5%',
  }
})
