
import { Button, FlatList, Text, View } from 'react-native'
import { useAppSelector } from '../app/hooks'
import ItemsCart from '../components/ItemsCart'
import { selectData } from '../dataControll/userSlice'
import { blue } from '../components/HeaderBtn';



function Cart() {
  const data = useAppSelector(selectData)
  const clotheIds = data.cart
  const userClothe:{
    clotheName: string,
    clotheId: string,
    [color: string]: string }[] = []
  // get the total price of items in cart
  const prices = data.cart.map(ele => data.clothes[ele].price)
  const totalPrice = prices.reduce((initial,digit)=> initial + digit,0)
  if  ( clotheIds.length > 0 ) {
    return (
      <View>
        <FlatList data = {clotheIds} 
        renderItem={item =>
              <ItemsCart
              color={data.clothes[item.item]?.color} 
              title={data.clothes[item.item]?.clotheName} 
              price={data.clothes[item.item]?.price} clotheId={data.clothes[item.item]?.clotheId} />} />
              <View className='w-[90%] m-auto h-[1px] bg-slate-500 mt-5'/> 
              <View className='flex flex-row justify-between mt-4 mb-4 w-[90%] mx-auto'>
                <Text>Total Price</Text>
                <Text>${totalPrice}</Text>
              </View>
        <View className="w-[60%] rounded-[5px] py-1 px-2 mb-5 mt-3 self-center" style={{backgroundColor:blue,position:'relative'}}>
          <Button title='checkout' onPress={()=> console.log('send data')} color={'white'}/>
        </View>
      </View>
    )
  } else {
    return (
      <View className='flex justify-center items-center h-[100%]'>
        <Text style={{fontSize:18,fontWeight:'bold'}}> There Is No Item Yet </Text>
      </View>
    )
  }
  
}

export default Cart
