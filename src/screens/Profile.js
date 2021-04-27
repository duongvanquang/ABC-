import React from 'react'

import { View, Text, Button, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, images, SIZES } from '../constants';

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: images.image1,
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: images.image2,
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: images.image3,
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: images.image4,
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: images.usFlag,
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessagesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={{
        marginTop: SIZES.padding * 3
      }}>
        <TouchableOpacity
          style={{
            width: '100%'
          }}
          onPress={() => {
            navigation.navigate('Chart', { userName: item.userName })
          }}
        >
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between'
          }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
              <View style={{
                paddingTop: 15,
                paddingBottom: 15
              }}>
                <Image
                  source={item.userImg}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25
                  }}
                />
              </View>
            </View>
            <View style={{
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 15,
              paddingLeft: 0,
              marginLeft: 10,
              width: 300,
              borderBottomWidth: 1,
              borderBottomColor: ' #cccccc'
            }}>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5
              }}>
                <Text style={{
                  fontSize: 14, fontWeight: 'bold',
                }}>{item.userName}</Text>
                <Text style={{
                  fontSize: 12, color: COLORS.green
                }}>{item.messageTime}</Text>

              </View>
              <Text style={{
                fontSize: 14, color: '#333333'
              }}>{item.messageText}</Text>
            </View>
          </View>

        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={{
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      backgroundColor: '#ffffff'
    }}>
      <FlatList
        data={Messages}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </View>
  )
}
export default MessagesScreen;