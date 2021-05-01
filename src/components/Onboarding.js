import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground, StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONTS, images, SIZES } from '../constants'
import LinearGradient from 'react-native-linear-gradient';

const Onboarding = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground
                source={images.NTTX}
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View style={styles.details}>
                    <Text style={{ color: COLORS.green, fontSize: 35, fontWeight: 'bold' }}>Discover</Text>
                    <Text style={{ color: COLORS.purple, fontSize: 35, fontWeight: 'bold' }}> Word with us</Text>
                    <Text style={{ color: COLORS.lightGray, lineHeight: 20, marginTop: 15 }}>Easy solution to buy tickets for your travel, business trips,
                    transportation, lodging and culinary</Text>
                    <TouchableOpacity style={[styles.shadow, {
                        marginTop: SIZES.padding * 2, width: 120,
                        height: 50, alignItems: 'center', justifyContent: 'center'
                    }]}
                        onPress={() => {
                            navigation.navigate('Login')
                        }}>
                        <LinearGradient style={{
                            height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15
                        }}
                            colors={['#46aeff', '#5884ff']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Get Start!</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: 40
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
export default Onboarding;