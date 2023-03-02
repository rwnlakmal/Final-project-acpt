import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import React from 'react'
import Login from './Login'
import UserData from './UserData'
import { NavigationContainer } from '@react-navigation/native';


export default function app() {
  return (
    <NavigationContainer>
    <View style={{ flex: 1 }}>
     <UserData/>
      
    </View>
    </NavigationContainer >
  )
}