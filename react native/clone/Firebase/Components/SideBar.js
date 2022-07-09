import { View, Text,StyleSheet,Dimensions,Button } from 'react-native'
import React,{useState} from 'react'

const SideBar = ({show}) => {
  return (
    <View style={[styles.container,{display:show?"flex":"none",}]}>
      <Text>SideBar</Text>
      {/* <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo optio asperiores quaerat natus non beatae ipsum reprehenderit doloribus, dolorem harum? Eligendi consectetur consequatur odio deserunt vitae blanditiis, explicabo impedit.</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        width:"50%",
        height:Dimensions.get("window").height,
        position:"absolute",
        top:0,
        right:0,
        padding:10,
    }
})

export default SideBar