import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import React from 'react';

export default function sound() {
  
  const [name, setName] = React.useState("");

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  React.useEffect(listAllVoiceOptions);

  const speakGreeting = () => {
      const greeting = ` ${name}`;
      const options = {
        voice: "en-us-x-sfg-local",
        pitch: 1.2,
        rate: 0.3
      };
      Speech.speak(greeting, options)
  };

  return (
    
    <LinearGradient start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={[ '#aef6d6a6' , '#ffffff' , '#ffffff' , '#aef6d6a6']} style={styles.container}>
    <View style={styles.container}>
      <TextInput   style={styles.searchInputContainer}placeholder="Everything you need is here......" onChangeText={setName} value={name} />
      <Button  title="speak" onPress={speakGreeting} />
    </View>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  searchInputContainer:{
    height:45,
    width:400,
    borderRadius:15,
    fontSize:16,
    backgroundColor:'#fff',
    elevation:10,
    alignItems: 'center',
    justifyContent: 'center',
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
