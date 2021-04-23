
import React from 'react'
import { View, Text, TouchableOpacity, 
  StyleSheet, SafeAreaView, Image } from 'react-native'
import { SIZES, FONTS, images, icons, COLORS } from '../constants'

const HeaderBar = ({ navigation }) => {
  return (
    <SafeAreaView style={{
      height: 150, width: '100%',
      backgroundColor: COLORS.emerald,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <View style={{ flex: 1, marginLeft: 5 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Drawer')
          }}>
          <Image
            source={icons.menu}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', color: COLORS.black, ...FONTS.body2 }}>Trang chủ</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  )
}
export default HeaderBar;