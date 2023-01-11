/**

 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";

import { useTheme } from '@react-navigation/native';
 
 import {
   View,
   Text,
   Switch,
   StyleSheet,
   useColorScheme,
 } from 'react-native';
 import Hangman from './src/hangman/Index'
 import Splash from './src/hangman/Splash'

 import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const Stack = createNativeStackNavigator();

   



   return (

    
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name="splash" component={Splash}/>
        <Stack.Screen name="hangman" component={Hangman} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
    
    
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'white'
   },
 });
 
 export default App;
 