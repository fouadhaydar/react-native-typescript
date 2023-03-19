import { FlatList, View } from 'react-native'
import { useAppSelector } from '../app/hooks'
import { selectCategorie } from '../dataControll/categorieSlice'
import { selectClothes } from '../dataControll/clothesSlice'
import { CardItem } from '../components/CardItem'


type CategorieParams = {
  route:any,
  navigation:any
}
function Categorie({route,navigation}:CategorieParams) {
  // get the initial state from redux
  const categories = useAppSelector(selectCategorie)
  const clothes = useAppSelector(selectClothes)

  const targetCat = categories.categories.find(element => element.id === route.params.id)
  const clothesOfCat = clothes.clothes.filter(clothe => clothe.catId === targetCat?.id)

  // console.log(clothesOfCat)
  function handleNavigation (id:string) {
    navigation.navigate('Details',{clotheId:id})
  }
  return (
    <View className='flex flex-1 justify-center items-center my-3'>
        <FlatList data={clothesOfCat} renderItem={({item,index}) => {
          return <CardItem handleNavigation={() => handleNavigation(item.id)} clothe={item}/>
        }} numColumns={2} keyExtractor={item => item.id} />
    </View>
  )
}

export default Categorie
