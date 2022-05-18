import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, TextInput ,TouchableOpacity,Text,ImageBackground,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';
import React from 'react';

export default function speech() {
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
          Sound /ɑː/ & /ʌ/
          </Text>
        </View>
        </View>
     <ScrollView  showsVerticalScrollIndicator={false}>
       <View style={styles.container}>
   
        <View style={{flexWrap:'wrap',
        flexDirection:'row',}}>
        <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Bar (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/baː/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('BAR')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>thanh; chấn song 
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Carp (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/kaːp/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('carp')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>cá chép
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Cart (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/kaːt/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('cart')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>xe ngựa
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Charge (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/tʃaːdʒ/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('charge')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>sạc
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Chart (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/tʃaːt/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('chart')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>biểu đồ
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Guard (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/ɡaːd/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('guard')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>canh gác
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Laugh (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/laːf/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('laugh')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>cười
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Draught (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/draːft/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('draught')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>gió lùa; luồng hơi
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Dove (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/dʌv/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('Dove')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>bồ câu
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Other (adverb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>ˈ/ʌðə/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('other')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>cái khác
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Among (pre)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/əˈmʌŋ(st)/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('Among')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>ở giữa
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>monkey (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/ˈmʌŋki/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('monkey')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>con khỉ
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Cult (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/kʌlt/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('cult')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>giáo phái
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Dust (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/dʌst/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('dust')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>bụi 
                    </Text>
                </View>
            </View>
            <View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Skull (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/skʌl/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('skull')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>sọ, đầu lâu
                    </Text>
                </View>
            </View><View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Blood (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/blʌd/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('blood')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>máu
                    </Text>
                </View>
            </View><View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Trouble (noun)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/ˈtrʌbl/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('trouble')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>điều rắc rối
                    </Text>
                </View>
            </View><View style={{borderWidth:1, backgroundColor:'#ffffffc7',width:'50%',height:150,alignItems:'center',justifyContent:'center'}}>    
        <View style={{flex:1,justifyContent:'center',}}>
                    <Text style={{fontSize:25}}>Nourish (verb)
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    
                    <View style={{flex:1,borderRightWidth:1,width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
                    <Text>/ˈnʌriʃ/
                    </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>speakGreeting('nourish')}>
              <Text style={{fontSize:25}}>🔈
                  </Text>                          
        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'center'}}>
                    <Text>nuôi dưỡng
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