

import React,{useState,useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity ,
  FlatList ,
  TextInput
} from 'react-native';

import RegisterPage from '././src/views/register'
import TodolistPage from '././src/views/TodoList'
import SettingPage from '././src/views/SettingPage'

import {NavigationContainer} from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import axios from 'axios'; // 引入axios
function App(): JSX.Element {
  const [pageIndex,setPageIndex] = useState(0);
  const [text, onChangeText] = React.useState('');
  const [data, setData] = useState([]); // 用于存储从网络获取的数据
 
  const Home = () => {
    return(
      <View>
        <Text>Home</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder='輸入待辦'
        value={text}
      />
      </View>
    )
  }

  const fetchTodolist = () =>{
     const data = {
      "email": "ray@gmail.com",
      "password": "as123df000",
      "nickname":"SOCA"
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios
      .post('https://todolist-api.hexschool.io/users/sign_up', JSON.stringify(data), config)
      
      // 替换为实际的API端点   http://raychen.co.uk/api/todo/1  
      .then((response) => { 
        console.log(response.data)
        const fetchedData = response.data;
        setData(fetchedData);
      })  
      .catch((error) => {
        
        
      if (error.response) {
          // console.error('Server responded with error status:', error.response.status);
          // console.error('Response data:', error.response.data);
          // console.error('Response headers:', error.response.headers);
        } else {
          console.error('No response received from the server');
        }


      });
  }

 


    useEffect(() => {
    // 在组件加载时调用fetchTodolist，这样数据将在页面加载时加载
    // fetchTodolist();
  }, []);


  const Setting = () => {

    return(
      <View>
        <Text>Setting</Text>
        <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text>{item.key}</Text>
                </View>
              )}
            />        
      </View>
    )
  }
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={RegisterPage} />
          <Tab.Screen name="Settings" component={SettingPage} />
          <Tab.Screen name="TodoList" component={TodolistPage} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 2,
  },
    button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
