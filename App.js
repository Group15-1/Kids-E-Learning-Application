import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Square = ({text}) => (
  <View style={styles.square}>
    <Text style={{fontWeight: 'bold', fontSize: 20}}>{text}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.Profile}></View>
        <Text style={styles.topic}>Profile</Text>

        <View style={styles.box}>
          <Square text="Name - "/>
          <Square text="Name - "/>
          <Square text="Gmail - "/>
          <Square text="Phone Number - "/>
          <Square text="Age - "/>
          <Square text="User Name - "/>
        </View>

        

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b3e5fc',
    justifyContent: 'center',
  },
  
  topic:{
    color: '#fff',
    backgroundColor: '#1a237e',
    paddingTop: 85,
    paddingBottom: 40,
    paddingLeft: 145,
    alignItems: 'center',
    color: "#fff",
    fontSize: 40,
    borderBottomLeftRadius: 80,
  },
  
  square:{
    backgroundColor:"#808080",
    width: 370,
    height: 100,
    borderWidth: 5,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'left',
    
  }
});