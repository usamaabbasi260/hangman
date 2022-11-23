/**

 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import {
   SafeAreaView,
   StatusBar,
   StyleSheet,
   useColorScheme,
 } from 'react-native';
 import Hangman from './src/hangman/Index'
 import Splash from './src/hangman/splash.js'

 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const Stack = createNativeStackNavigator();
   return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash}/>
        <Stack.Screen name="hangman" component={Hangman}/>
        
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
 