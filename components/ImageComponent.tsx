import { View, Image, StyleSheet,Dimensions, ScrollView, FlatList } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { orang } from "./HeaderBtn";
import { useEffect, useRef, useState } from "react";

type ImageComponentProps = {
  url:string,
  height:number,
  width:number
}
function ImageComponent({url,height,width}:ImageComponentProps) {
  const imageContainer = {
    zIndex:0,
    height: 0.6* height,
    width:width
  }
  const images = [require('../assets/clothes/1.jpg'),
                  require('../assets/clothes/2.jpg'),
                  require('../assets/clothes/3.jpg')]
                  
  return (
    <View className="flex flex-row relative" style={imageContainer}>
      <FlatList horizontal decelerationRate={'fast'}
      showsHorizontalScrollIndicator={false} 
      pagingEnabled={true} snapToInterval={width} data={images} renderItem={({item,index}) => {
        return (
          <View style={imageContainer} key={item}>
            <Image source={item} style={styles.image} />
          </View>
        )
      }}/>
      {/* <View className="flex flex-row justify-between items-center w-[15%]" style={styles.circles}>
        {images.map((ele,index) => {
          return (
            <FontAwesome name={index === imgIndex ? `circle`: 'circle-o'} size={12} color={ index === imgIndex ? orang : 'white'} key={index}/>
          )
        })}
      </View> */}
    </View>
  )
}

export default ImageComponent

const styles = StyleSheet.create({
  arrowLeft:{
    position:"absolute",
    left:0,
    zIndex:10,
    top:'50%',
  },
  arrwoRight :{
    position:'absolute',
    right:0,
    zIndex:10,
    top:'50%'
  }, 
  circles:{
    position:'absolute',
    bottom:'2%',
    right:'42.5%',
    zIndex:10
  },
  image :{
    width:'100%',
    height:'100%',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  }
})
