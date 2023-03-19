import { Pressable, StyleSheet, Text, View } from 'react-native'
import { blue, orang } from './HeaderBtn'

type CategorieCardProps = {
    CatName: string,
    handleCategorie: () => void
}

export function CategorieCard({CatName, handleCategorie}:CategorieCardProps) {
  return (
    <>
        <Pressable className='w-[160px] h-[160px] rounded-[10px] flex items-center justify-center' onPress={handleCategorie} style={styles.boox}>
                <Text style={{fontSize:18, fontWeight:'bold'}} className='text-white'>
                    {CatName}
                </Text>
        </Pressable>
    </>
  )
}

export default CategorieCard

const styles = StyleSheet.create({
    boox : {
        marginRight:10,
        marginBottom:10,
        backgroundColor:'#6483DE'
    }
})
