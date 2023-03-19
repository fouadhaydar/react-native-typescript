import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { orang } from './HeaderBtn';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../app/hooks';
import { removeFromCart } from '../dataControll/userSlice';

type ItemsCartProps = {
  title:string,
  color:string,
  price:number,
  clotheId:string
}
const red = 'rgba(255, 0, 0, 1)'
function ItemsCart({color,title,price, clotheId}:ItemsCartProps) {
  const navigation = useNavigation<any>()
  const dispatch = useAppDispatch()
  function nav ( ) { 
    navigation.navigate('Details',{clotheId:clotheId})
  }

  return (
    <Pressable onPress={nav}>
    <View style={styles.container}>
        <View className='w-[100px] h-[100%] bg-black'>
            <Image/>
        </View>
        <View className='flex flex-row flex-1 justify-between p-2 items-end'>
            <View className='flex-1'> 
              <Text className='p-1 font-bold'>{title}</Text>
              <Text className='p-1 font-bold'>{price}$</Text>
              <View className='flex flex-row'>
                <View  className='p-1'>
                  <FontAwesome name="circle" size={27} color={color} style={{position:"relative"}}/>
                  <AntDesign name="check" size={15} color={orang} style={{ position:'absolute',top:11,left:7.5}}/>
                </View>
              </View>
            </View>
            <Pressable 
            className='rounded-md px-2 m-1 py-[1px] h-[40px] w-[80px] items-center justify-center' style={{backgroundColor:`${red}`}}
            onPress={()=>{
              dispatch(removeFromCart({clotheId:clotheId}))
              console.log('deleted')
            }}
            >
              <Text style={{color:'white'}}> Delete </Text>
            </Pressable>
        </View>
    </View>
    </Pressable>
  )
}

export default ItemsCart


const styles = StyleSheet.create({
    container:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        flex:1,
        minHeight:100,
        borderWidth:1,
        borderColor:'black',
        borderRadius:8,
        marginHorizontal:20,
        overflow:'hidden'
    }
})