import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import colors from '../common/colors'
import loseImg from '../assets/hang.png'
import complete from '../assets/Window_Header_Label_Complete.png'

const StatusPopup = ({ status, onPress }) => {

  const src = status === 'win' || status === 'completed' ? complete : loseImg;
  const message = status === 'win' ? 'Congrats you won' :
    status === 'completed' ? 'Congratulations you completed the puzzle' : 'Oops you lost';

  const buttonText = status === 'win' ? 'Next word' : status === 'completed' ? 'Replay' : 'Retry';
  return (
    <Modal visible={status !== ''} animationType="fade" transparent={true}>
      <View style={styles.modalContainer}>
        <Animatable.View animation={'zoomIn'} delay={400} style={styles.popup}>
          <Image source={src} style={{resizeMode: 'stretch', width:200, margin:10, height:100}} />
          {/* <Image style={{ resizeMode: 'stretch', width:200}} source={require('../assets/Window_Header_Label_Complete.png')} /> */}
          <Text style={styles.text}>{message}</Text>
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={styles.btnText}>{buttonText}</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </Modal>
  )
}

export default StatusPopup

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // backgroundColor: colors.darkOverlayColor,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 60,
  },
  popup: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: colors.Modal,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white'
  },
  img: {
    width: 100,
    height: 100,
  },
  btn: {
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: colors.shapeColor,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
})