import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity,ImageBackground,ScrollView,Dimensions} from 'react-native';

export default function App() {
  return (
         <View style={styles.container}>
           <StatusBar style='auto'/>
         </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:"100%",
    position:"relative",
  },
});
