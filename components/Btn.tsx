import React from 'react'
import { Button, Pressable, Text } from 'react-native'
import { blue } from './HeaderBtn'

type BtnProps = {
    handleFunc:()=>void,
    title:string
}
function Btn({handleFunc,title}:BtnProps) {
  return (
    <Pressable className="w-[100%] h-[45px] rounded-[10px] py-1 px-2 mb-5 justify-center items-center m-auto"  
    style={{backgroundColor:'rgba(33, 150, 243, 1)'}} onPress={handleFunc}>
        <Text style={{color:'white'}}> {title} </Text>
    </Pressable>
  )
}

export default Btn
