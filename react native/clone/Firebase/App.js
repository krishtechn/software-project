import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground,ScrollView,Dimensions,SafeAreaView,Image} from 'react-native';
import Cards from './Components/Cards';
import SideBar from './Components/SideBar';
import React,{useState} from 'react'
import Header from './Components/Header';

export default function App() {
  const [isclick,setisclick] = useState(false);

  return (
    <SafeAreaView>
         {/* <View style={styles.container}>
           <StatusBar hidden={true}/>
           <Header />
           <TouchableOpacity onPress={()=>{isclick?setisclick(false):setisclick(true)}}><Image source={require('./assets/menu.png')} resizeMode="contain" style={{width:50,height:40}}/></TouchableOpacity>
           <Cards isclick={isclick} setisclick={setisclick}/>   
           <SideBar show={isclick} setisclick={setisclick}/>   
         </View> */}
         <Text>Hello world</Text>
         </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    position:"relative",
  },
});
