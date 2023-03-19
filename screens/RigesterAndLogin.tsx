import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import Btn from '../components/Btn'

export type RigesterAndLoginProps = {
  route:any,
  navigation:any
}
function RigesterAndLogin({route,navigation}:RigesterAndLoginProps) {
  const [userName,setUserName] = useState({
    username:'',
    valid:true,
  })
  const [email,setEmail] = useState({
    email:'',
    valid:true,

  })
  const [password,setPassord] = useState({
    password:'',
    valid:true,

  })
  const path = route.name
  const nav= useNavigation();
  function handleNavigation () {
    if (path === 'Register') {
        navigation.navigate('Log In')
    } else { 
      navigation.navigate('Register')
    }
  }
  function handelRegister () {
    const emailRegular = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (emailRegular.test(email.email)) {
      console.log('valid email')
      setEmail(prev => {return {...prev,valid:true}})
    } else {
      setEmail(prev => {return {...prev,valid:false}})
    }
    if (passwordRegular.test(password.password)) {
      console.log('valid password')
      setEmail(prev => {return {...prev,valid:true}})
    } else {
      setPassord(prev => {return {...prev,valid:false}})
    }
  }
  return (
    <View className='justify-between h-[80%] w-[90%] m-auto'>
        <View className='m-auto justify-between h-[50%] w-[80%]'>
          <View>
            <TextInput placeholder='User name' style={styles.textInput} onChangeText={(text)=> {
              console.log(userName)
              setUserName(prev => { return {...prev,username:text}} )
            }} value={userName.username}/>
            {!userName.valid && <Text style={{color:'red', fontSize:14,marginTop:5}}>invalid user Name</Text>}
          </View>
          <View>
            <TextInput placeholder='Email' style={styles.textInput} onChangeText={(text)=>{
              setEmail(prev => { return {...prev,email:text}})
            }} value={email.email}/>
            {!email.valid && <Text style={{color:'red', fontSize:14,marginTop:5}}>invalid email</Text>}
          </View>
          <View>
            <TextInput placeholder='Password' style={styles.textInput} onChangeText={(text)=>{
              setPassord(prev => { return {...prev,password:text}})
            }} value={password.password} />
            {!password.valid && <Text style={{color:'red', fontSize:14,marginTop:5}}>{'The password must conatin !@% 1-9 a-z'}</Text>}
          </View>
          
          <Text onPress={()=>console.log('text')} className='self-center'> {`${path === 'Register'? 'Suggest Strong Password' : 'Forget password'}`} </Text>
        </View>
      <View className='w-[80%] m-auto justify-between h-[50%]'>
          <Btn handleFunc={()=>console.log('pressed')} title={`Log in with google`}/>
          <Btn handleFunc={handelRegister} title={`${path === 'Register' ? 'Sign up' : 'Log In'}`}/>
          <Text onPress={()=>console.log('text')} className='self-center'> {`${path === 'Register' ? 'If you dont have an account register ' : 'If you have an account Log in'}`}  </Text>
          <Btn handleFunc={handleNavigation} title={`${path === 'Register' ? 'Log in' : 'Sign up'}`}/>
      </View>
    </View>
  )
}

export default RigesterAndLogin

const styles = StyleSheet.create({
  textInput :{
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth:1,
    borderColor:'black',
    height:45,
    borderRadius:3
  }
})
