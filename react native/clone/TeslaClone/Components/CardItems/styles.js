import { StyleSheet,useWindowDimensions,Dimensions } from "react-native";

// const {height,width} = useWindowDimensions();
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
    cardContainer:{
        width:"100%",
        height:height,
      },
      titles:{
        width:"100%",
        alignItems:"center",
        marginTop:"10%",
      },
      title:{
        fontSize: 40,
        fontWeight: '500',
      },
      subtitle:{
        fontSize: 16,
        color: '#5c5e62',
        textDecorationLine:"underline"
      },
      btnContainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%',
        alignItems:"center",
      },
      btn:{
        width:"90%",
        borderRadius:20,
        padding:10,
        marginBottom:10,
      },
      btntext:{
        fontSize:12,
        textAlign:"center",
        fontWeight:"500",
        textTransform:"uppercase",
      },
    
})

export default styles