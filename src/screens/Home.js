import React from 'react';
import {
  View, Text, Image,
  TouchableOpacity, SafeAreaView, StyleSheet, ScrollView
} from 'react-native'
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import { HeaderBar } from '../components'
import { TouchableHighlightBase } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <HeaderBar />
      <ScrollView style  ={{
        flex:1,
        marginTop:-25,
        borderTopLeftRadius:SIZES.radius ,
        borderTopRightRadius:SIZES.radius,
        backgroundColor:COLORS.black
      }}>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Home;