import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../common/colors'

const WordBox = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.color}>Opposite word of</Text>
      <Text style={[styles.word, styles.color]}>Today</Text>
      <View style={styles.hintContainer}>
        <TouchableOpacity >
          <Text style={styles.color}>{'Hint'}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default WordBox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.wordBox,
    padding: 10,
    borderRadius: 10,
  },
  word: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
    textTransform: 'capitalize',
    
  },
  color:{
    color:"black"
  },
  hintContainer: {
    alignSelf: 'flex-end'
  },
})