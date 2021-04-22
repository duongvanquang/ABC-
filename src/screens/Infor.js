import React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text,TouchableOpacity } from 'react-native';


const Infor = ({navigation}) => {
  return (
    <SafeAreaView style  ={{ flex:1}}>
      <View style  ={{ flex:1, backgroundColor: 'green', marginTop:100}}>
      <TouchableOpacity
      onPress ={()=>{
        navigation.navigate('Drawer')
      }}>
        <Text>xxxxxx</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}
export default Infor;