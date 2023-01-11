import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const WordCount = (props) => {
 
  const [count, setCount] = useState(0);


 
  return (
    <View style={styles.container}>
      <Text style={styles.word}>{props.winCount}</Text>   
    </View>
  )
}

export default WordCount

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'grey',
    padding:3,
    borderRadius: 10,
    width:110,
    height:50,
    justifyContent: 'center',
    alignSelf:'flex-end'
  },
  word: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
    textTransform: 'capitalize',
    color: 'white',
    textAlign: 'center'
  },
  hintContainer: {
    alignSelf: 'flex-end'
  },
})