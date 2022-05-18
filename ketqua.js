import { RadioButtons,SegmentedControls } from 'react-native-radio-buttons';
import { Dimensions,TouchableOpacity,ScrollView, Text, View,Button,StyleSheet,Alert,BackHandler,TouchableWithoutFeedback,ImageBackground } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

import React from 'react';

const Stack = createNativeStackNavigator();
export default class ketqua extends React.Component{
  
  constructor(props) {
    super(props);
    const { navigation,route } = this.props;
    const {diem,item,itemK,ds,bailam,cauhoi,d0,d1,d2,d3,dapan,socau,uid,email} = route.params;
    //this.itemRef = getDatabase(firebaseApp);
    //console.log(this.itemRef);
    //console.log(baitap)
    this.diems=diem;
  }
  
render() {
    const { navigation,route } = this.props;
    const {diem,item,itemK,ds,bailam,cauhoi,d0,d1,d2,d3,dapan,socau,uid,email} = route.params;
    console.log("baiiiii tappppp da lam:",diem);
  return (
    <ImageBackground style={styles.container} source={{uri:'https://st.quantrimang.com/photos/image/2021/03/09/Hinh-nen-bo-sua-3.jpg'}}>
      <LinearGradient colors={[ '#ffffff00' , '#ffffff00' , '#ffffff00' , '#ffffff00']} style={styles.container}>
      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
        
        <Text style={styles.wh}>Điểm số của bạn là :{this.diems}/10</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('xemLaiTestScreen',{diem:diem,item:item,itemK:itemK,ds:ds,bailam:bailam,cauhoi:cauhoi,d0:d0,d1:d1,d2:d2,d3:d3,dapan:dapan,socau:socau,uid:uid,email:email,})} style={styles.btnStart}>
                  <Text style={styles.testy}>               
                   Xem lại bài Test</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('home',{uid:uid,email:email})} style={styles.btnStart}>
                  <Text style={styles.testy}>             
                   Về trang chủ</Text>
          </TouchableOpacity>
      </View>
      </LinearGradient>
    </ImageBackground>
    );
}

}
const styles = StyleSheet.create({
    container: {
      flex: 4,
      alignItems: 'center',
      justifyContent:'center',
      fontWeight:'bold',
      
    },
    wh: {
      width:'100%',
      height:300,
      fontSize:20,
      alignItems: 'center',
      justifyContent:'center',
      fontWeight:'bold',
    },
    testy: {
    fontWeight:'bold',

      color:'#fff',
      fontSize:20,
    },
    btnStart:{
      borderRadius:15,
      backgroundColor:'#0a9737',
      margin:10,
      width:200,
      height:70,
      alignItems:'center',
      justifyContent:'center',
      elevation:5,
    }
   


    
  });