import React, { Component, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Clothe, selectClothes } from '../dataControll/clothesSlice';
import { addToFavorite, selectData, UserClothe } from '../dataControll/userSlice';

type HeartIconeProps = {
  clothe:Clothe
}
export function HeartIcone ({clothe}:HeartIconeProps) {
    const dispach = useAppDispatch()
    const data = useAppSelector(selectData)
    const found  = data.favorites.find(id => id === clothe.id)
    return (
      <View className='absolute top-2 right-2'>
        <AntDesign name={`${found ? 'heart' : 'hearto'}`} size={24} color="red" onPress={()=> {
            dispach(addToFavorite({clotehId:clothe.id}))
        }}/>
      </View>
    )
  }

export default HeartIcone