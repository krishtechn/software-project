import { View, Text,ImageBackground,Dimensions,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import data from './api/CardsItems'
import Buttons from './Buttons'

const Card = () => {
  return (
    <FlatList data={data} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} snapToAlignment={'start'} snapToInterval={Dimensions.get("window").height} decelerationRate="normal" renderItem={(items)=>{
        const {title,buttons,image,subtitle} = items.item;
        return <ImageBackground source={image} style={{width:"100%",height:Dimensions.get("window").height}}>
        <View style={styles.Container}>
        <View style={{marginTop:40}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Buttons btn={buttons}/>
        </View>
    </ImageBackground>;
    }}/>
      
  )
}

const styles = StyleSheet.create({
    Container:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:"100%"
    },
    title:{
        fontSize:40,
        fontWeight:"500",
        color:"black",
        textAlign:"center",
    },
    subtitle:{
        fontSize:13,
        textTransform:"capitalize",
        color:"#171A20",
    }
})

export default Card