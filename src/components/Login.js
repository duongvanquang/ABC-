import React from 'react';
import {
  Text, View, TouchableOpacity, Image,
  KeyboardAvoidingView, Platform, ScrollView, TextInput
} from 'react-native';
import { FONTS, COLORS, icons, images, SIZES } from '../constants'
import LinearGradient from 'react-native-linear-gradient'

const Login = ({ navigation }) => {
  const [showPassword, setPassword] = React.useState(false)
  function renderLogo() {
    return (
      <View style={{
        marginTop: SIZES.padding * 5,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image
          source={images.wallieLogo}
          resizeMode="contain"
          style={{
            width: '60%'
          }}
        />
      </View>
    )
  }
  function renderForm() {
    return (
      <View style={{
        marginTop: SIZES.padding * 3,
        marginHorizontal: SIZES.padding * 3
      }}>
        <View style={{
          marginTop: SIZES.padding * 3
        }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Full Name</Text>
          <TextInput style={{
            marginVertical: SIZES.padding * 3,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height: 40,
            color: COLORS.white
          }}
            placeholder="Enter Name"
            placeholderTextColor={COLORS.purple}
            selectionColor={COLORS.white}
          />
        </View>
        <View style={{ marginTop: SIZES.padding * 2 }}>
          <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Password</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height: 40,
              color: COLORS.white
            }}
            placeholder='Enter Password'
            placeholderTextColor={COLORS.purple}
            selectionColor={COLORS.white}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              bottom: 10,
              height: 30,
              width: 30
            }}
            onPress={() => {
              setPassword(!showPassword)
            }}>
            <Image
              source={showPassword ? icons.disable_eye : icons.eye}
              resizeMode='contain'
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.black
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  function renderButtom() {
    return (
      <View style={{
        margin: SIZES.padding * 3
      }}>
        <View style={{ margin: SIZES.padding }}>
          <TouchableOpacity style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onPress={() => {
              navigation.navigate('Home')
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          margin: SIZES.padding
        }}>
          <TouchableOpacity style={{
            height: 60,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.radius / 1.5,
            alignItems: 'center',
            justifyContent: 'center'
          }}
            onPress={() => {
              console.log('SignUp')
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 20 }}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? "padding" : null}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[COLORS.primary, COLORS.gray]}
        style={{
          flex: 1
        }}>
        <ScrollView>
          {renderLogo()}
          {renderForm()}
          {renderButtom()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}
export default Login;