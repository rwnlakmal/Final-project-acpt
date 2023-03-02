import { Image, StyleSheet, View, } from 'react-native'
import React from 'react'
import { Text, TextInput, Button, } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login() {
  return (
    <View style={styles.container}>

      <View style={styles.headerArea}>
        <Image style={{ width: '40%', height: '40%', marginLeft: '30%', marginTop: '25%' }} source={require('./assets/exchange.png')} />
        <Text style={{ marginStart: '40%', marginTop: '5%', color: '#5D3891', fontWeight: 'bold' }} variant="headlineLarge">ACPT</Text>
        <Text style={{ marginStart: '25%', fontWeight: 'normal', color: '#5D3891' }} variant="labelMedium">Student Management System</Text>
      </View>

      <View style={styles.txtArea}>
        <TextInput
          style={styles.txtInput}
          label="User Name"
          textColor='#5D3891'
          mode='outlined'
          outlineColor='#5D3891'
          onChangeText={text => setText(text)}
        />

        <TextInput
          style={styles.txtInput}
          label="Password"
          textColor='#5D3891'
          mode='outlined'
          outlineColor='#5D3891'
          onChangeText={text => setText(text)}
        />

        <Button style={styles.btn} icon="login" mode="contained">
          Login
        </Button>

        <Text style={{ marginStart: '35%', marginTop: '5%', color: '#5D3891' }} variant="labelLarge">Forgot Password?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'column' },

  headerArea: { flex: 1,},

  txtArea: { flex: 1, flexDirection: 'column', justifyContent: 'center',marginTop:'-15%' },

  txtInput: { marginTop: '5%', width: '90%', marginStart: '5%', backgroundColor: '#F7F7F7', borderRadius: 20 },

  btn: { marginTop: '5%', width: '80%', marginStart: '10%', padding: 5, backgroundColor: '#5D3891' }


})