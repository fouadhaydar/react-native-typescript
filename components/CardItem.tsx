import { Text, View,StyleSheet, Image, Pressable } from 'react-native'
import { Clothe } from '../dataControll/clothesSlice'
import { HeartIcone } from './HeartIcone'

export type CardProps = {
    handleNavigation: () => void,
    clothe:Clothe
}
export function CardItem({handleNavigation,clothe}:CardProps) {
  return (
    <>
        <Pressable onPress={handleNavigation}
            className='w-[150px] h-[170px] border flex justify-between rounded-[10px] border-solid border-black relative my-2 mx-2' 
            style={styles.container}>
            <View 
                className='flex flex-col
                justify-center items-center w-[100%] h-[80%]'>
                <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} className='w-[100%] h-[100%]'/>
                <HeartIcone clothe={clothe}/>
            </View>
            <Text className='py-2 px-2 text-black' style={styles.text}>{clothe.name}</Text>
        </Pressable>
    </>

  )
}


const styles = StyleSheet.create({
    text: {
        fontSize:16
    },
    container:{
        overflow:'hidden',
    }
})