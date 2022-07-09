import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
    // position: 'absolute',
    // top: "30%",
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical:10,
    backgroundColor:"rgb(192, 209, 225)"
    },
    logo:{
     width:100,
     height:20,
     resizeMode:"contain"
    },
    menu:{
     width:25,
     height:25,
     resizeMode:"contain"
    }
})

export default styles;