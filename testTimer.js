import React, { useState } from 'react';
import { CheckBox, Icon } from 'react-native-elements';
import { Animated,TouchableOpacity,TouchableHighlight,ScrollView, Text, View,Button,StyleSheet,Image,ImageBackground,ActivityIndicator,Easing } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'expo-ads-admob'
import * as Animatable from 'react-native-animatable';

class testTimer extends React.Component {
  constructor(props){
    super(props)
    this.state={
      checked:false,
      n:[false,false,false]
    }
  }

  thaydoi(i){
    var arr = [...this.state.n];
    arr[i] = !this.state.n[i]
    this.setState({n:arr})
    console.log(arr)
  }


  render(){
    let id = 0;
    const fadeIn = {
      from: {
        opacity: 0,
        top:10,
        left:0,
      },
      to: { 
        opacity: 1,
        top:50,
        left:100
      },
    }; 
    const zoomOut = {
      0: {
        top:10,
        opacity: 0,
        scale: 0,
      },
      0.5: {
        top:15,
        opacity: 1,
        scale: 0.3, 
      }, 
      1: {
        top:20,
        opacity: 1,
        scale: 1,
      },
    };
  return ( 
    <>
    <View style={styles.container}> 
       <Animatable.Text animation={fadeIn} >Fade me in</Animatable.Text>  
       <Animatable.Text animation={zoomOut} >Zoom me out</Animatable.Text>
    </View>
    </>
  );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnNopbai:{
    backgroundColor:'#4fad68',
    borderRadius:5,
    width: 100,
    height:35,
    alignItems:'center',
    justifyContent:'center',
    elevation:2,
  },
  timer:{
    alignSelf:'center',
    width: 150,
  },
});


export default testTimer;