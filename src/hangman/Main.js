import {ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import ManFigure from './ManFigure'
import WordBox from './WordBox'
import { WordsArray } from './data'
import InputBox from './InputBox'
import Keyboard from './Keyboard'
import StatusPopup from './StatusPopup'
import WordCount from './WordCount'

const Main = () => {
  const [correctLetters, setCorrectLetters] = useState('');
  const [wrongLetters, setWrongLetters] = useState('');
  const [status, setStatus] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const correctWord = WordsArray[currentIndex].answer;

  const storeCorrectLetters = (keyInput) => {
    const ans = correctWord.toUpperCase();
    if (ans.includes(keyInput)) {
      const cl = correctLetters + keyInput;
      setCorrectLetters(cl);
      // check win
      updateStatus(cl);
    } else {
      const wl = wrongLetters + keyInput;
      setWrongLetters(wl);
      if (wl.length > 5) {
        // lost
        setStatus('lost')
      }
    }
  }

  const updateStatus = (cl) => {
    let status = 'win';
    const correctWordArray = Array.from(correctWord.toUpperCase());
    correctWordArray.forEach(letter => {
      if (!cl.includes(letter)) {
        status = '';
      }
    })
    if (status === 'win' && currentIndex === WordsArray.length - 1) {
      setStatus('completed')
      return
    }
    setStatus(status);
  }

  const handlePopupButton = () => {
    if (status === 'win') {
      // go to next word
      setCurrentIndex(i => i + 1)
    }
    // clear all stored data
    setCorrectLetters('')
    setWrongLetters('')
    setStatus('')
    // replay
    if (status === 'completed') {
      setCurrentIndex(0);
    }
  }

  return (
    <ImageBackground source={require('./assets/back2.jpg')} style={styles.container}>
      <View style= {{margin:15}}>
        
      <Header />

      <WordCount/>
      <View style={styles.row}>
        <ManFigure wrongWord={wrongLetters.length}/>
        <WordBox wordData={WordsArray[currentIndex]}/>
      </View>
      <InputBox correctLetters={correctLetters} answer={correctWord}/>
      <Keyboard correctLetters={correctLetters} wrongLetters={wrongLetters} onPress={(input) => storeCorrectLetters(input)}/>
      <StatusPopup status={status} onPress={handlePopupButton}  />
      </View>
    </ImageBackground>
  )
}

export default Main

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