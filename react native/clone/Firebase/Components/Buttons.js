import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Buttons = (props) => {
    const {btn} = props;
    // console.log(props.btn[0]);

    const SetColor = (items)=>{
        let color = "";
          if(items == "CUSTOM ORDER" || items == "CUSTOM NOW" || items == "ORDER NOW" || items == "SHOP NOW"){
              color = "#171A20CC";
        }else{
              color = "#FFFFFFA6";
          }

        return color;
    }

  return (
    <View style={{position:"absolute",bottom:40,width:"100%",justifyContent:"center",flex:1,alignItems:"center"}}>
        {btn.map((items,key)=>{
            return <TouchableOpacity key={key} style={[styles.btn,{backgroundColor:SetColor(items)}]}>
            <Text style={styles.text}>{items}</Text>
        </TouchableOpacity>
        })}
    </View>
  )
}

const styles = StyleSheet.create({
btn:{
    width:"90%",
    padding:13,
    borderRadius:10,
    alignItems:"center",
    margin:10,
},
text:{
    color:"#171A20",
}
})

export default Buttons