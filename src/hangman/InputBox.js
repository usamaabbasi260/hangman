import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../common/colors'

const InputBox = () => {
  return (
    <View style={styles.inputContainer}>
      
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.inputBox,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 3,
  },
})