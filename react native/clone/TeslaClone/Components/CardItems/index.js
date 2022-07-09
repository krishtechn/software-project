import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View ,TouchableOpacity,ImageBackground} from 'react-native';
import styles from './styles';

const CardItems = (props) => {
    const {btn1,btn2,title,subtitle,image} = props.items;
  return (
    <View style={styles.cardContainer}>
    {/* <ImageBackground source={require('./assets/images/logo.png')} resizeMode="cover" style={{width:"100%",height:"100%",}} /> */}
      <ImageBackground source={image} resizeMode="cover" style={{width:"100%",height:"100%",position:"absolute"}}/>
      <View style={styles.titles}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={[styles.btn,{backgroundColor:"#171A20CC"}]}>
          <Text style={[styles.btntext,{color:"#fff"}]}>{btn1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn,{backgroundColor:"#FFFFFFA6"}]}>
          <Text style={[styles.btntext,{color:"#171A20"}]}>{btn2}</Text>
        </TouchableOpacity>
      </View>
         </View>
         
  )
}

export default CardItems