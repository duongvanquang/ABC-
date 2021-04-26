import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, Image, SafeAreaView, StatusBar, Button } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';



const Boarding = ({ navigation }) => {
    const Skip = ({ ...props }) => {
        return (
            <Button
                title='Skip'
                color='#000000'
            />
        )
    }
    const Next = ({ ...props }) => {
        return (
            <Button
                title='Skip'
                color='#000000'
                {...props}
            />
        )
    }
    const Done = ({ ...props }) => {
        return (
            <Button
                title='Skip'
                color='#000000'
                {...props}
            />
        )
    }
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponen={Done}
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            style={{ flex: 1 }}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' }}
                        style={{
                            height: 420,
                            width: '100%',
                            borderBottomLeftRadius: 100
                        }}
                    />,
                    title: 'Connect to the Word',
                    subtitle: 'A new way to connect with the word'

                },
                {
                    backgroundColor: '#66CCCC',
                    image: <Image source={{ uri: 'https://img.thuthuatphanmem.vn/uploads/2018/10/09/hinh-anh-thien-nhien-dep-va-dac-biet-nhat_041755603.jpg' }}
                        style={{
                            width: '100%',
                            height: 420,
                            borderBottomLeftRadius: 100
                        }} />,
                    title: 'Share your Favorites',
                    subtitle: 'Share your connect with similar kind of poeple',
                },
                {
                    backgroundColor: '#CC6666',
                    image: <Image source={{ uri: 'https://img.thuthuatphanmem.vn/uploads/2018/10/09/anh-thien-nhien-dep-nhat_041753931.jpg' }}
                        style={{
                            width: '100%',
                            height: 420,
                            borderBottomLeftRadius: 100
                        }} />,
                    title: 'Become Star',
                    subtitle: 'let the spot light capture you',
                },
            ]}
        />
    )
}
export default Boarding;