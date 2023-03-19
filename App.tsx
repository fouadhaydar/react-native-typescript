import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from './screens/Favorite';
import { Home } from './screens/Home';
import Details from './screens/Details';
import Categorie from './screens/Categorie';
import { Provider } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { store } from './app/store';
import Cart from './screens/Cart';
import { Ionicons } from '@expo/vector-icons';
import HeaderBtn from './components/HeaderBtn';
import Bell from './components/Bell';
import { View } from 'react-native';
// Add this line to your `index.js`
import 'react-native-get-random-values'
import RigesterAndLogin from './screens/RigesterAndLogin';

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Categorie: undefined;
  Details:undefined
  Bell:undefined,
  'Log In':undefined,
  Register:undefined
}
const orang = 'rgba(255, 167, 38, 1)'
const blue = 'rgba(33, 150, 243, 1)'


export default function App() {
  const Tab = createBottomTabNavigator()
  const Stack = createNativeStackNavigator<RootStackParamList>()

  function HomeTab () {
    
    return (
      <Tab.Navigator screenOptions={()=>({
        tabBarStyle:{
          backgroundColor:blue,
        },
        headerShown:false ,
        tabBarLabelStyle:{fontWeight:'bold'},
      })} >
        <Tab.Screen name="home" component={Home} options={{
          tabBarIcon:({focused})=>{
            return  <Entypo name={'home'} color={`${focused ? orang : 'white'}`} size={25}/>
          },
          tabBarInactiveTintColor:'white',
          tabBarActiveTintColor:orang
        }}/>
        <Tab.Screen name='Favorite' component={Favorite} options={{
          tabBarIcon:({focused})=>{
            return  <AntDesign name={`${focused ? 'heart': 'hearto'}`} color={`${focused ? orang : 'white' }`} size={25} />
          },
          headerTitle:'Favorite',
          tabBarInactiveTintColor:'white',
          tabBarActiveTintColor:orang
        }} />
        <Tab.Screen name='Register' component={RigesterAndLogin} options={{
          tabBarIcon:({focused})=>{
            return <Ionicons name="person" size={24} color={focused ? orang : 'white'} />
          },
          tabBarInactiveTintColor:'white',
          tabBarActiveTintColor:orang,
          headerTitle:'Register'
        }}/>
      </Tab.Navigator>
    )
  }
  console.log('app a')
  return (
    <Provider store={store}>
      <NavigationContainer >        
      <Stack.Navigator screenOptions={({route})=>({ 
            headerStyle:{
              backgroundColor:blue,
            },
            headerTintColor:'white',
            headerTitle:route.name,
            headerRight:()=>{
              return (
                <View className='flex flex-row justify-between'>
                    <HeaderBtn />
                </View>
              )
            }
          })}>
          <Stack.Screen name={'Home'} component={HomeTab}/>
          <Stack.Screen name='Details' component={Details} 
          options={{
            headerBackTitleVisible:false
          }}
          />
          <Stack.Screen name='Categorie' component={Categorie} 
          options={{
            headerBackTitleVisible:false
          }}
          />
          <Stack.Screen name='Cart' component={Cart} options={{
            headerBackTitleVisible:false
          }}/>
          <Stack.Screen name='Bell' component={Bell} options={{
            headerBackTitleVisible:false
          }}/>
          <Stack.Screen name='Log In' component={RigesterAndLogin} options={{
            headerBackTitleVisible:false
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}
