import {StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Splash = ({navigation}) => {
    setTimeout(()=>{
        navigation.replace('hangman')
      },3000)
  return (
    <View >
      <Image style={styles.size} source={require('../assets/splash.png')}/> 
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    size: {
        resizeMode: 'cover', width:500, height:800, alignSelf:'center'
    },
  })
