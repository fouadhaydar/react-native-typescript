
import { Pressable, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useRoute } from '@react-navigation/native';


export const orang = 'rgba(255, 167, 38, 1)'
export const blue = 'rgba(0, 117, 255, 1)'

function HeaderBtn() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute()
    type route = 'Cart' | 'Bell'

    function handlePress (route:route) {
        navigation.navigate(route)
    }
    if (route.name === 'Cart') {
        return (
        <View className='flex flex-row justify-between'>
            <Pressable className='px-2'>
                <FontAwesome name={'shopping-cart'} size={25} color={orang}/>
            </Pressable>
            <Pressable className='px-2' onPress={()=>handlePress('Bell')}>
                <FontAwesome name={'bell'} size={25} color={'white'}/>
            </Pressable>
        </View>

        )
    } else if (route.name === 'Bell'){
            return (
                <View className='flex flex-row justify-between'>
                    <Pressable className='px-2' onPress={()=>handlePress('Cart')}>
                        <FontAwesome name={'shopping-cart'} size={25} color={'white'}/>
                    </Pressable>
                    <Pressable className='px-2'>
                        <FontAwesome name={'bell'} size={25} color={orang}/>
                    </Pressable>
                </View>
            )
    } else {
        return (
            <View className='flex flex-row justify-between'>
                <Pressable onPress={()=>handlePress('Cart')} className='px-2'>
                    <FontAwesome name={'shopping-cart'} size={25} color={'white'}/>
                </Pressable>
                <Pressable onPress={()=>handlePress('Bell')} className='px-2'>
                    <FontAwesome name={'bell'} size={25} color={'white'}/>
                </Pressable>
            </View>
        )
    }
    
}

export default HeaderBtn
