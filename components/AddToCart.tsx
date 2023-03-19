import React, { useState } from 'react'
import { Modal, View, Pressable, Alert, Text } from 'react-native';

function AddToCart() {
  const [modalVisible,setModalVisible] = useState(false)
  return (
    <View>
        <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}
            >
                <Pressable className='flex justify-center items-center h-[100%]' onPress={() => setModalVisible(prev =>!prev)}>
                    <Text>press me</Text>
                </Pressable>
            </Modal>
    </View>
    
  )
}

export default AddToCart
