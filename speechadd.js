import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput ,TouchableOpacity,Text,ImageBackground,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import React from 'react';

export default function speechadd() {
  const [name, setName] = React.useState("");

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    console.log(voices);
  };

  React.useEffect(listAllVoiceOptions);

   speakGreeting=(a)=>{
      const greeting = ` `+a;
      const options = {
        voice: "en-us-x-sfg-local",
        pitch: 1.2,
        rate: 0.5
      };
      Speech.speak(greeting, options)
  };

  return (
    <ImageBackground style = {styles.vw1a} source={{uri:'https://w0.peakpx.com/wallpaper/194/510/HD-wallpaper-just-study-saying.jpg'}}>
        <LinearGradient colors={[ '#6bdb919e' , '#6bdb919e' , '#73e9bb9e' , '#b9f5dc9e']} style={styles.container}> 
        <View style={{ backgroundColor:'#e2e9e5',width:'100%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{justifyContent:'center',}}>
          <Text style={{fontSize:40}}>
          Sound /ɪ/ và /i:/
          </Text>
        </View>
        </View>
     <ScrollView  showsVerticalScrollIndicator={false}>
       <View style={styles.container}>
   
        <View style={{flexWrap:'wrap',
        flexDirection:'row',}}>
        <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Bin (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/bin/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('bin')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>thùng rác
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Fish (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/fiʃ/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('fish')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>cá 
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Him (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/him/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('him')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>anh ấy
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Gym (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/dʒim/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('gym')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>phòng tập thể dục
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Six (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/siks/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('six')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>số sáu
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Begin (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/biˈɡin/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('begin')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>bắt đầu
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Minute (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/ˈminit/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('minute')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>phút (thời gian)
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Dinner (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/ˈdinə/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('dinner')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>bữa tối
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Sheep (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/ʃiːp/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('sheep')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>con cừu
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>See (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/siː/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('see')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>nhìn thấy
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Bean (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/biːn/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('bean')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>đậu
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Eat (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/iːt/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('eat')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>ăn
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Key (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/kiː/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('key')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>chìa khóa
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Agree (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/əˈɡriː/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('agree')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>đồng tình, đồng ý
                    </Text>
                </View>
            </View><View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Complete (adj)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/kəmˈpliːt/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('complete')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>hoàn thành
                    </Text>
                </View>
            </View><View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Receive (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/rəˈsiːv/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('receive')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>nhận được
                    </Text>
                </View>
            </View>
            
       
</View>
</View>
</ScrollView>
    
    </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vw1a:{
    height:'100%',
    width:'100%',
    zIndex:100,
    flexDirection:'column',
    borderRadius:20,
},
  input: {
    alignSelf: 'stretch',
    height: 20,
    borderBottomWidth: 2,
    borderBottomColor: "red",
    margin: 8
  }
});