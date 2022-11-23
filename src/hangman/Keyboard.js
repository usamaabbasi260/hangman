import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../common/colors'

const Key = ({ text }) => {
  return (
    <TouchableOpacity
      style={[styles.keyContainer]}>
      <Text style={styles.key}>{text}</Text>
    </TouchableOpacity>
  )
}

const Keyboard = ({ onPress, correctLetters, wrongLetters }) => {
  const keys = 'QWERTYUIOPASDFGHJKL;ZXCVBNM'
  return (
    <View style={styles.container}>
      {keys.split('').map((alphabet, index) => {
        return (
          <Key key={index} text={alphabet} />)
      })}
    </View>
  )
}

export default Keyboard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    flexWrap: 'wrap',
  },
  keyContainer: {
    width: 23,
    height: 38,
    backgroundColor: colors.key,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  key: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
})