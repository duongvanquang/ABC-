import React from 'react'

import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import {
  Container,
  Card,
  UserInfo,
  UserImgWrapper,
  UserImg,
  UserInfoText,
  UserName,
  PostTime,
  MessageText,
  TextSection,
} from '../constants/styleMessages'

const Messages = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: {uri:'https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-5.jpg'},
    messageTime: '4 mins ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: {uri:'https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-7.jpg'},
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: {uri:'https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-9.jpg'},
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: {uri:'https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-16.jpg'},
    messageTime: '1 day ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: {uri:'https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-19.jpg'},
    messageTime: '2 days ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const MessagesScreen = ({ navigation }) => {
  return (
    <Container>
      <FlatList
        data={Messages}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Vew>
            <Text>{item.userImg}</Text>
          </Vew>
        )}
      />
    </Container>
  )
}