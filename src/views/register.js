import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';


function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleRegistration = ({ onRegistrationSuccess }) => {
    // 构造要发送到服务器的数据
    const data = {
      email: email,
      password: password,
      nickname: nickname,
    };

    // 设置请求头，告诉服务器我们发送 JSON 数据
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // 发送注册请求
    axios
      .post('https://todolist-api.hexschool.io/users/sign_up', data, config)
      .then((response) => {
        // 处理注册成功的响应
        console.log('Registration successful:', response.data);
        AsyncStorage.setItem('token', response.data)
        .then(() => {
          console.log('Cookie保存成功');
          onRegistrationSuccess(true);
        })
        .catch((error) => {
              console.error('Cookie保存失败:', error);

         });
        // 在这里可以进行页面导航或其他操作
      })
      .catch((error) => {
        // 处理注册失败的情况
        if(error.response.data.message=="用戶已存在"){
            ToastAndroid.showWithGravity(
              '用戶已存在',
              ToastAndroid.SHORT,
              ToastAndroid.CENTER,
            );
        }
        console.error('Error during registration:', error);
                        console.error('Error Message:', error.message);
  console.error('Error Response Data:', error.response.data);
  console.error('Error Response Status:', error.response.status);
  console.error('Error Response Headers:', error.response.headers);
        // 可以向用户显示错误消息或按需处理错误
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter your email"
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Enter your password"
      />
      <Text>Nickname:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNickname(text)}
        value={nickname}
        placeholder="Enter your nickname"
      />
      <TouchableOpacity onPress={handleRegistration} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default RegistrationPage;
