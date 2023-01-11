import { StyleSheet,Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from "react";

import { useTheme } from '@react-navigation/native';

const Header = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  

  const { colors } = useTheme();
  return (
    <View>
      <View style={styles.container}  >
      <View>
        <Text style={styles.text}>Hangman Game</Text>
      </View>

      

      
      
    </View>
    
    </View>
    
  )
}

export default Header

const styles = StyleSheet.create({
  container: {

    margin: 20,
    alignItems: 'center', 
    justifyContent: 'center',
    alignContent:'center',
    marginBottom: 50,
  },
  text:{
    fontSize:35, 
    color:'black', 
    alignSelf:'center', 
    fontWeight:'bold'
}
  
})