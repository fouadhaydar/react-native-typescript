// import React, { useState } from 'react'
// import { Alert, Button, Modal, Pressable, Text, View } from 'react-native';
// import { useAppDispatch, useAppSelector } from '../app/hooks';
// import {  selectClothes } from '../dataControll/clothesSlice';
// import { addToModal, color, selectData } from '../dataControll/userSlice';
// type PopapProps = {
//   clotheIndex:number
// }
// function Popap({clotheIndex,}:PopapProps) {
//   const [modalVisible,setModalVisible] = useState(false)
//   const data = useAppSelector(selectClothes)
//   const userData = useAppSelector(selectData)
//   const dispatch = useAppDispatch()

//   // get the cheked color and sizes
//   const colors:color[] = []
//   data.clothes[clotheIndex].options.forEach(option => {
//     if (option.colorChecked) {
//       colors.push({color:option.color, size:option.sizes.find(size => size.chekeed === true)?.currentSize!})
//     }
//   })

//   function handleButton () {
//     if(data.clothes[clotheIndex].options.find(option => option.colorChecked === true)) {
//       setModalVisible(prev => !prev)
//       dispatch(addToModal({
//         clothe:data.clothes[clotheIndex].name,
//         colors:colors,
//       }))
//       console.log(userData)
//     }
//     else {
//       console.log('select element')
//     }
//   }
//   return (
//     <>
//     <Button title='Add To Cart'color={'white'} onPress={handleButton} />
//     <Modal
//         animationType="slide"
//         visible={modalVisible}
//         onRequestClose={() => {
//             Alert.alert('Modal has been closed.');
//             setModalVisible(!modalVisible);
//         }}
//         presentationStyle={'pageSheet'}
//         >
//             {userData.userClothes.length > 0 && <Pressable className='flex justify-center items-center h-[100%]' onPress={() => setModalVisible(prev =>!prev)}>
//                   <Text className='text-black'>
//                   {userData.userClothes.map(clothe => clothe.clothe)}
//                   </Text>
//             </Pressable>}
//     </Modal>

//     </>

//   )
// }

// export default Popap
