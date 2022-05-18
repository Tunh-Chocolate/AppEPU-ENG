import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,Alert
} from 'react-native';
import { Icon } from 'react-native-elements';
import { firebaseApp } from '../../components/firebaseConfig';
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 


class gioiThieu extends React.Component{
    constructor(props) {
        super(props);
        //this.itemRef = getDatabase(firebaseApp);
        //console.log(this.itemRef);
        const { route,navigation } = this.props;
        const { loaiId, ten,id,name,uid,email} = route.params;
        console.log(uid)
        this.uid=uid;
        this.email = email;
        this.loaiId = loaiId;
        this.ten = ten;
        this.id = id;
        this.email = email;
      }
    render(){
            const { navigation } = this.props;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        showsVerticalScrollIndicator={false}>
        <Text>
       Chưa có dữ liệu
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('home')} style={styles.btnStart}>
            <Text style={styles.testy}>Về trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('menuScreen',{id:this.id,ten:this.ten,uid:this.uid,email:this.email})} style={styles.btnStart}>
            <Text style={styles.testy}>Quay lại</Text>
        </TouchableOpacity>
       

     
      </ScrollView>
    </SafeAreaView>
  );
};
}

export default gioiThieu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  
  btnStart:{
    borderRadius:15,
    backgroundColor:'#0a9737',
    margin:10,
    width:150,
    height:50,
    textAlign:'center',
    justifyContent:'center',
    elevation:5,
  },
  testy:{
    color:'#fff',
    alignSelf:'center'
  }
 
});
