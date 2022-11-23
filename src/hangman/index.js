import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import ManFigure from './ManFigure'
import WordBox from './WordBox'

import InputBox from './InputBox'
import Keyboard from './Keyboard'
import StatusPopup from './StatusPopup'

const Index = () => {

  return (
    <ImageBackground source={require('../assets/back2.jpg')} style={styles.container}>
     
      <View style= {{margin:15}}>
      <Header />
        
      <View style={styles.row}>
        <ManFigure />
        <WordBox/>
      </View>
      
      <InputBox />
      <Keyboard  />
 
      
      {/* <StatusPopup status={'win'} /> */}
      </View>
      
    </ImageBackground>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
})