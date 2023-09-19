import React,{useState,useEffect} from 'react';
// import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Switch,
  Image ,
  Alert
} from 'react-native';

import axios from 'axios'; // 引入axios
function App(): JSX.Element {
  const [isEnabled, setIsEnabled] = useState(false);
  const showConfirmationDialog = () => {
    const message = isEnabled
      ? '確定要關閉飛航模式嗎？'
      : '確定要開啟飛航模式嗎？';

    Alert.alert(
      '',
      message,
      [
        {
          text: '取消',
          style: 'cancel',
          onPress: () => {
          
          },
        },
        {
          text: '確定',
          onPress: () => {
             setIsEnabled((previousState) => !previousState);
          },
        },
      ],
      { cancelable: false }
    );
  };  
  const toggleSwitch = () => { 
    showConfirmationDialog();
  };

  return (
    <View style={styles.container} >
      <View style={styles.dialog} >
        <View style={styles.formText}>
          <View style={{flex:.7 }}>
              <Image
                source={require('./assets/airplane_mode_icon.png')}
                style={styles.airplaneIcon}
              />
          </View>
          <View style={{flex:1.5, }}>
             <Text style={{fontSize:20}}>飛航模式</Text>
          </View>
          <View style={{flex:1, }}>
             <Switch
             
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>            
        </View>
        <View style={styles.separator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  airplaneIcon: {
    width: 50, 
    height: 50, 
    resizeMode: 'contain', 
  },
  container: {
    flex: 1, 
    backgroundColor:"#ccc"
  },
  formText:{
    flexDirection:"row",
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  separator: {
    width: '100%', 
    height: 1,   
    backgroundColor: '#ccc',
    marginVertical: 20, 
  },
  dialog: {
    flex: 1,
    padding: 10,
    flexDirection:"column",
    margin:15,
    borderRadius:10, 
    backgroundColor:"#fff",
  },
});
export default App;