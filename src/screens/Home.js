import React from 'react';
import { View, Text, Image, 
  TouchableOpacity, SafeAreaView } from 'react-native'

const Home = () => {
  function renderForm() {
    return (
      <View style  ={{
        flex:1, justifyContent:'center', alignItems:'center'
      }}>
        <Text>hhh</Text>
      </View>
    )
  }
  return (
    <SafeAreaView>
      {renderForm()}
    </SafeAreaView>
  )
}
export default Home;