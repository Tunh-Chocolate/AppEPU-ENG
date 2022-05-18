import React, { useState } from 'react';
import { Dimensions,Animated,TouchableOpacity,TouchableHighlight,ScrollView, Text, View,Button,StyleSheet,Image,ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

import * as Animatable from 'react-native-animatable';

export default class learnspeech extends React.Component{ 
  render(){
      
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const {navigation } = this.props;
   
    const tsp = {
        from: {
          opacity: 0,
          left:700,
        },
        to: { 
          opacity: 1,
          left:0
        },
      }; 
      const pst = {
        from: {
          opacity: 0,
          left:-700,
        },
        to: { 
          opacity: 1,
          left:0
        },
      }; 
    return (
    <ImageBackground style={styles.container} source={{uri:'https://png.pngtree.com/png-vector/20191109/ourlarge/pngtree-abc-blocks-basic-alphabet-knowledge-flat-color-icon-vector-png-image_1968303.jpg'}}>
        <LinearGradient style={styles.inContainer} colors={[ '#40d7779e' , '#40d7779e' , '#ffffff9e' , '#fff']} >
            <View style={styles.vw2}>
                <Animatable.Text animation={pst} style={{width: windowWidth,}} >
                    <View style={{width:windowWidth}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('sound')}} style={styles.btnInfo}>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#6dde9e'} size={35} name='search'/>
                            </View>
                            <View style={{height:'100%',flex:4,justifyContent:'center'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}>Search Sound</Text>
                            </View>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#88e7c6'} size={35} name='done'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.Text>
                <Animatable.Text animation={pst} style={{width: windowWidth,}} >
                    <View style={{width:windowWidth}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('speech')}} style={styles.btnInfo}>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#6dde9e'} size={35} name='book'/>
                            </View>
                            <View style={{height:'100%',flex:4,justifyContent:'center'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}> Sound /ɑː/ & /ʌ/</Text>
                            </View>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#88e7c6'} size={35} name='done'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.Text>
                <Animatable.Text animation={tsp} style={{width: windowWidth,}} >
                    <View style={{width:windowWidth}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('speechadd')}} style={styles.btnInfo}>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#6dde9e'} size={35} name='book'/>
                            </View>
                            <View style={{height:'100%',flex:4,justifyContent:'center'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}> Sound /ɪ/ và /i:/</Text>
                            </View>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#88e7c6'} size={35} name='done'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.Text>
                <Animatable.Text animation={tsp} style={{width: windowWidth,}} >
                    <View style={{width:windowWidth}}>
                        <TouchableOpacity onPress={()=>{navigation.navigate('speedda')}} style={styles.btnInfo}>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#6dde9e'} size={35} name='book'/>
                            </View>
                            <View style={{height:'100%',flex:4,justifyContent:'center'}}>
                                <Text style={{fontSize:20,fontWeight:'bold'}}> Sound  /e/ – /æ/</Text>
                            </View>
                            <View style={{height:'100%',flex:1,justifyContent:'center'}}>
                                <Icon color={'#88e7c6'} size={35} name='done'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.Text>
            </View>
        </LinearGradient>
    </ImageBackground>
)
}};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'center',
      zIndex:1,
    },
    inContainer: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent:'center',
        zIndex:2,
        padding:10,
    },
    vw1:{
        paddingLeft:'10%',
        width:'100%',
    },
    vw2:{
        alignItems: 'center',
        width:'100%',
       
    },
    txtTitle:{
        marginTop:'30%',
        fontSize:40,
        color:'#fff',
        fontWeight:'bold',
    },
    btnInfo:{
        width:'95%',
        height:80,
        borderRadius:20,
        margin: 10,
        backgroundColor:'#fff',
        elevation:2,
        flexDirection:'row',
    }
  });
