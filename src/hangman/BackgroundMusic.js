import Sound from 'react-native-sound';
import React, {  useEffect } from 'react'

let backgroundMusic = null;
const audioFile = require('../assets/backMusic1.mp3');

const setupBackgroundMusic = () => {
    backgroundMusic = new Sound('../assets/backMusic.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            //alert("usama");
            return;
        }
        // Play the music on loop
       
        backgroundMusic.setNumberOfLoops(-1);
        backgroundMusic.play();
        
    });
}
const releaseBackgroundMusic = () => {
    backgroundMusic.stop();
    backgroundMusic.release();
    backgroundMusic = null;
}

const BackgroundMusic = () => {
    useEffect(() => {
        setupBackgroundMusic();
        return () => {
            releaseBackgroundMusic();
        };
    }, []);

    return null;
};

export default BackgroundMusic;
