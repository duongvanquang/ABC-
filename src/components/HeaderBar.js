
import React from 'react'
import {
  View, Text, TouchableOpacity,
  StyleSheet, SafeAreaView, Image
} from 'react-native'
import { SIZES, FONTS, images, icons, COLORS } from '../constants'
import { useNavigation } from '@react-navigation/native';

const HeaderBar = () => {
 // const navigation = useNavigation(); 
  return (
    <SafeAreaView style={{
      height: 150, width: '100%',
      backgroundColor: COLORS.emerald,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <View style={{ flex: 1, marginLeft: 5 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Drawer')}>
          <Image
            source={icons.menu}
            resizeMode="cover"
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
      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: SIZES.padding,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.lightpurple
      }}>
        <View style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          //...styles.styleSunny

        }}>
          <Image
            source={icons.sunny}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.yellow,

            }}
          />
        </View>
        <View style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          ...styles.styleMoon
        }}>
          <Image
            source={icons.moon}
            style={{
              width: 30,
              height: 30,
              tintColor: COLORS.white,

            }}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  styleMoon: {
    borderRadius: 20,
    backgroundColor: COLORS.black
  },
  styleSunny: {
    borderRadius: 20,
    backgroundColor: COLORS.yellow
  }
})
export default HeaderBar;