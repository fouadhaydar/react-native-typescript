import { Text, View, FlatList } from 'react-native'
import { useAppSelector } from '../app/hooks'
import { CardItem } from '../components/CardItem'
import { selectClothes } from '../dataControll/clothesSlice'
import { selectData } from '../dataControll/userSlice'
import {v4 as uuidv4} from 'uuid'


type FavoriteProps = {
  navigation:any
}
export function Favorite ({navigation}:FavoriteProps) {
  const data = useAppSelector(selectData)
  const fetchedData = useAppSelector(selectClothes)
  const favoriteArray = data.favorites

  function handleNavigate (id:string) {
    navigation.navigate('Details',{clotheId:id})
  }
    if (favoriteArray.length > 0) {
      return (
        <View className='flex items-center justify-center mx-2 my-2'>
          <FlatList data={favoriteArray} renderItem={item =>{
              const uniqueKey = uuidv4()
            return <CardItem 
                clothe={fetchedData.clothes.find(clothe => clothe.id === item.item)!} 
                handleNavigation={()=>handleNavigate(item.item)} key={uniqueKey}/>
          }} keyExtractor={item => item} numColumns={2}
          />
        </View>
      )
    } else {
      return (
        <View className='flex items-center justify-center mx-2 my-2 h-[100%]'>
          <Text style={{fontWeight:'bold'}}> You Have Note Added Any Item Yet </Text>
        </View>
      )
    }
}

export default Favorite
