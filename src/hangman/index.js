import { StyleSheet, View,Text, Switch, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import ManFigure from './ManFigure'
import WordBox from './WordBox'
import { WordsArray } from './data'
import InputBox from './InputBox'
import Keyboard from './Keyboard'
import StatusPopup from './StatusPopup'
import WordCount from './WordCount'
import BackgroundMusic from './BackgroundMusic'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Index = ({route}) => {
  const [correctLetters, setCorrectLetters] = useState('');
  const [wrongLetters, setWrongLetters] = useState('');
  const [status, setStatus] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const [winCount, setWinCount] = useState(0);

  const correctWord = WordsArray[currentIndex].answer;

  React.useEffect(() => {
    loadScore();
  }, []);

  const loadScore = () => {
    AsyncStorage.getItem('@COUNT1')
      .then((resp) => {
        if (resp == null) {
          console.log(resp);
        }
        else {
          setWinCount(resp);
          console.log(resp);
        }
      })
      .catch((e) => {
        console.log(e);
      })
  }

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

  const storeWinCount = async () => {
    try {
      await AsyncStorage.setItem('@COUNT1', `${Number.parseInt(winCount)+1}`)
      console.log("Count Stored");
      loadScore();
    } catch (e) {
      console.log("Error: " + e);
      // saving error
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
    
      storeWinCount();

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

  const [currentBackground, setCurrentBackground] = useState(1);


  


  return (
    <View>
      <BackgroundMusic/>
      <View style={{flexDirection:'row', backgroundColor: 'black', alignSelf:'flex-end', marginVertical:3}}>
        <Text style={{color:'white', fontWeight:'bold'}}>Change Background</Text>
        <Switch
        trackColor={{ false: "#81b0ff", true: "#767577" }}
          value={currentBackground === 1}
          onValueChange={(value) => setCurrentBackground(value ? 1 : 2)}
        />
      </View>

      <ImageBackground source={currentBackground === 1 ? require('../assets/back2.jpg') : require('../assets/back1.jpg')} style={{height:800}}>
        <View style={styles.container1}>
      
      <Header setTheme={route.params?.setTheme}/>
      
      <WordCount winCount={winCount}/>

      <View style={styles.row}>
        <ManFigure wrongWord={wrongLetters.length} />
        <WordBox wordData={WordsArray[currentIndex]} />
      </View>
      <InputBox correctLetters={correctLetters} answer={correctWord} />
      <Keyboard correctLetters={correctLetters} wrongLetters={wrongLetters} onPress={(input) => storeCorrectLetters(input)} />
      <StatusPopup status={status} onPress={handlePopupButton} />
      </View>

        </ImageBackground>

      
      
   
    </View>
    
    
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginVertical: 20,
  },
  container1: {
    marginHorizontal:10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})