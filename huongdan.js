import React, { useState } from 'react';
import { Dimensions,Animated,TouchableOpacity,TouchableHighlight,ScrollView, Text, View,Button,StyleSheet,Image,ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { doc, setDoc } from "firebase/firestore"; 
import { collection, getDocs } from "firebase/firestore"; 
import { firebaseApp } from '../../components/firebaseConfig';
import { getFirestore } from "firebase/firestore";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'expo-ads-admob'

import * as Animatable from 'react-native-animatable';

export default class huongdan extends React.Component{ 
    constructor(props) {
        super(props);
        //this.itemRef = getDatabase(firebaseApp);
        //console.log(this.itemRef);
        const { route,navigation } = this.props;
        this.nvt = navigation;
        const { baitap,name,n,ten,uid,email,socau,tg} = route.params;
        const { loaiId,id} = route.params;
        console.log('baitap:',socau);
        //console.log('uid form test:',uid)


        this.uid=uid;
        this.email=email;
        this.i = id;
        this.detai= ten;
        this.num = n;
        this.diems = 0;
        this.state = {
            socau:socau,
            tg:tg,
            isLoading:true,
            hideBack:'flex',
            hideNext:'flex',
            timer:500,
            keys:[],
            item:[],
            itemQ:1,
            opt0:[],
            opt1:[],
            opt2:[],
            opt3:[],
            itemK:[],
            nameqs:[],
            leng:0,
            trueAns:[],
            //test
            q:'',
            a1:'',
            a2:'',
            a3:'',
            a4:'',
            //
            selectedOption:'',
            optList:[],
            o:[],
            ans:'',
            answ:[0,0,0,0,0,0,0,0,0,0],
        };

        
        this.opt = this.state.options;
      }



    async listenForItemsQS(inum){
        const db = getFirestore(firebaseApp);
        const querySnapshotQS = await getDocs(collection(db, "Question"));
        
        querySnapshotQS.forEach((doc) => {
            //console.log(`name qs : ${doc.data().Id_cate_mtct}`);
            
            [...Array(this.i.length)].map((o,n) => {
                if(this.i[n] == `${doc.data().Id_cate_mtct}`){
                    //console.log('ok');
                    this.setState({
                        
                        itemK:[...this.state.itemK,`${doc.id}`],
                        nameqs:[...this.state.nameqs,`${doc.data().name_Question}`], 
                    })
                    //console.log('length item k: ',this.state.itemK.length);
                }
                else if(this.i[n] == 1){
                    this.setState({
                        itemK:[...this.state.itemK,`${doc.id}`],
                        nameqs:[...this.state.nameqs,`${doc.data().name_Question}`], 
                    })
                }
            })
            
        })
        //random itemK va nameqs
        
        this.shuffle(this.state.itemK,this.state.nameqs)
    }

    //lay item tu option 
    async listenForItems(inum){
        
        const db = getFirestore(firebaseApp);
        //console.log(db);
        //const docRef = doc(db, "Quiz", "03ZnOo7bgWhJvJU9Th9G");
        //const docSnap = await getDoc(docRef);
        const querySnapshot = await getDocs(collection(db, "Option"));
        

        querySnapshot.forEach((doc) => {
          //console.log(`${doc.id} => ${doc.data().id_Question}`);
          //console.log('data:',`${doc.data().True_ans}`);
          //console.log(`length: ${doc.id.length}`);
         //console.log(this.i);
         //show length
         //console.log(this.state.item.length);
         //console.log('idqs: ',`${doc.data().id_Question}`);
         //console.log(this.state.itemK.length);
         [...Array(this.state.itemK.length)].map((o,n) => {
            if(this.state.itemK[n] == `${doc.data().id_Question}`){
               //console.log('ok:',this.state.opt0);
                this.setState({
                    //item:this.state.item.push(data)
                    //item:Object.keys(`${doc.data().Title}`)
                    item:[...this.state.item,`${doc.data().id_Question}`],
                    //nameqs:[...this.state.nameqs,1],
                    opt0:[...this.state.opt0,`${doc.data().Option_ans[0]}`],
                    opt1:[...this.state.opt1,`${doc.data().Option_ans[1]}`],
                    opt2:[...this.state.opt2,`${doc.data().Option_ans[2]}`],
                    opt3:[...this.state.opt3,`${doc.data().Option_ans[3]}`],
                    trueAns:[...this.state.trueAns,`${doc.data().True_ans}`],
                    isLoading:false,
                });
                //console.log('length item k: ',this.state.itemK);
            }
        })
         
        //console.log(`${doc.data().id_Question}`);
        //console.log(this.state.itemK[this.num])
        //console.log('state itemk:' ,this.state.itemK[inum-1]);
        //console.log('state item:' ,this.state.item.length-1);
        

        }); 
        //console.log('item:'+this.state.item);
        //console.log('length:'+this.state.leng);
    }

    componentDidMount(){
        this.listenForItemsQS();
        this.listenForItems();
    }

    // random cau hoi/ tra loi
    shuffle(arraya,arrayb) {
        let currentIndex = arraya.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
        //itemK:
        [arraya[currentIndex], arraya[randomIndex]] = [
            arraya[randomIndex], arraya[currentIndex]];
        //nameqs
        [arrayb[currentIndex], arrayb[randomIndex]] = [
            arrayb[randomIndex], arrayb[currentIndex]];
        
        }
      
        return arraya,arrayb;
      }

  render(){
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const { navigation,route } = this.props;
    const { loaiId, ten,id,name,uid,email} = route.params;
    
    
    this.uid=uid;
    this.email=email;
    //console.log('itemK :',this.state.itemK)
    
    //console.log('item :',this.state.item)

    const tsp = {
        from: {
          opacity: 0,
          //left:700,
        },
        to: { 
          opacity: 1,
          //left:0
        },
      }; 
      const pst = {
        from: {
          opacity: 0,
          //left:-700,
        },
        to: { 
          opacity: 1,
          //left:0
        },
      }; 

    return (
    <View style={styles.container}>
        <View style={styles.vw1}>
            <Text style={styles.txtTitle}>Quy ?????nh l??m b??i</Text>
        </View>
        <View style={styles.vw2}>
            <Animatable.Text animation={pst} style={styles.yellowView} >
                <View style={{flex:1,
                        height:'60%',
                        margin:10,
                        borderRadius:20,
                        flexDirection:'row',
                        padding: 10,}}>
                    <View style={styles.iconA}>
                        <Icon name = {'lock-clock'} size={40} color={'orange'} />
                    </View>
                    <View style={styles.contentA}> 
                        <Text style={styles.txtA}>Th???i gian</Text>
                        <Text style={styles.txtB}>{this.state.tg} Ph??t</Text>
                    </View>
                </View>
            </Animatable.Text>
            <Animatable.Text animation={tsp} style={styles.blueView} >
            <View style={{flex:1,
                    height:'60%',
                    borderColor:'#4c93f9',
                    margin:10,
                    borderRadius:20,
                    flexDirection:'row',
                    padding: 10,}}>
                <View style={styles.iconA}>
                    <Icon name = {'contact-support'} size={40} color={'#4c93f9'} />
                </View>
                <View style={styles.contentA}>
                    <Text style={styles.txtA}>S??? c??u</Text>
                    <Text style={styles.txtB}>{this.state.socau}</Text>
                </View>
            </View>
            </Animatable.Text>
        </View>
        <View style={styles.vw3}>
            <View style={styles.contentView}>
                <View style={styles.viewTxtC}>
                    <Icon name = {'content-paste'} size={40} color={'#656565'} style={{margin:5,}} />
                    <Text style={styles.txtC}>H?????ng d???n</Text>
                </View>
                <View>
                    <Text style={styles.txtD}>1. Tr??? l???i ????ng c??u h???i ????? ???????c ??i???m</Text>
                    <Text style={styles.txtD}>2. Tr??? l???i sai kh??ng b??? tr??? ??i???m</Text>
                    <Text style={styles.txtD}>3. N???p b??i ????? nh???n k???t qu???</Text>
                </View>
            </View>
            <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-6851800445634158/6549335557" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds ={false}
       />
        </View>

        <View style={styles.vw4}>
            <TouchableOpacity onPress={()=>navigation.navigate('testScreen',{baitap: id,n:1,ten:ten,uid:uid,email:email,itemK:this.state.itemK,nameqs:this.state.nameqs,item:this.state.item,opt0:this.state.opt0,opt1:this.state.opt1,opt2:this.state.opt2,opt3:this.state.opt3,trueAns:this.state.trueAns,socau:this.state.socau,tg:this.state.tg})} style={styles.btnStart}>
                <Text style={styles.txtStart}>L??m b??i</Text>
            </TouchableOpacity>
        </View>
    </View>
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
    txtTitle:{
        top:40,
        margin:10,
        fontSize:24,
    },
    vw1:{
        justifyContent:'center',
        width:'100%',
        flex:2,
        
    },
    vw2:{
        width:'100%',
        flex:2,
        flexDirection:'row',
        alignItems:'center'
    },
    vw3:{
        width:'100%',
        flex:5,
        padding:10,
    },
    vw4:{
        width:'100%',
        flex:2,
        alignItems:'center',
    },
    yellowView:{
        flex:1,
        borderWidth:2,
        height:'60%',
        borderColor:'#e97430',
        margin:10,
        borderRadius:20,
        flexDirection:'row',
        padding: 10,
    },
    blueView:{
        flex:1,
        borderWidth:2,
        height:'60%',
        borderColor:'#4c93f9',
        margin:10,
        borderRadius:20,
        flexDirection:'row',
        padding: 10,
    },
    iconA:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    contentA:{
        flex:2,
        justifyContent:'center',
    },
    txtA:{
        fontSize:17,
        color:'#7e7e7e',
    },
    txtB:{
        fontSize:18,
        fontWeight:'bold'
    },
    viewTxtC:{
        flexDirection:'row',
    },
    txtC:{
        fontSize:25,
        top:8,
        color:'#656565',
    },
    txtD:{
        fontSize:19,
        marginTop:5,
        marginBottom:5,
        color:'#656565',
    },
    contentView:{
        borderWidth:3,
        borderColor:'#f0f0f0',
        borderRadius:20,
        padding:20,
    },
    btnStart:{
        width: '50%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        backgroundColor:'#6ee0a0',
        elevation:2,
    },
    txtStart:{
        color:'#fff',
        fontSize:18,
        textShadowColor: '#ffffffb3',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    }   
    
  });
