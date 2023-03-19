import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CardItem } from '../components/CardItem'
import CategorieCard from '../components/CategorieCard';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addCategories, Categorie, selectCategorie } from '../dataControll/categorieSlice';
import { addClothes, Clothe, selectClothes } from '../dataControll/clothesSlice';
import {v4 as uuidv4} from 'uuid'

type HomeProps = {
    navigation:any
}
export function Home ({navigation}:HomeProps) {
    const data = useAppSelector(selectCategorie)
    const dataClothes = useAppSelector(selectClothes)
    const dispach = useAppDispatch()
    
    useEffect (()=>{
        console.log('inside useEffect')
        fetch('/Users/haidar/My project/first-react-native/AwesomeProject/data/data.json')
        .then(response => {
            return response.json()
        })
        .then((data)=> {
            data.categories.forEach((element:Categorie)=>{
                dispach(addCategories(element))
            });
            data.clothes.forEach((element:Clothe)=>{
                dispach(addClothes(element))
            })
        })
      },[])

    function handleCategorie (categorie:Categorie) {
        console.log('home b')
        navigation.navigate('Categorie',{id: categorie.id})
    }
    // get the first 4 element form clothes
    const clothes = dataClothes.clothes.slice(0,4)
    return (
        <>
    <Text className='my-4 self-center' style={{fontSize:18,fontWeight:'bold'}}> Categories </Text>
    <View className='flex flex-col justify-start ml-[10px] items-center'>
        <View> 
            <FlatList 
            data={data.categories} 
            keyExtractor={(item)=> item.id} 
            showsVerticalScrollIndicator={false} 
            numColumns={2}
            renderItem={categorie => {
                return (
                    <CategorieCard CatName={categorie.item.name} handleCategorie={()=>handleCategorie(categorie.item)}/>
                )
            }}/>
        </View>
    </View>
    </>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize:18,
        fontWeight:'bold'
    },
    container : {
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        flexWrap:'wrap',
    }
})
