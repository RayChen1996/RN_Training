import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';

const Settings = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 用于表示用户是否已登录
  const [username, setUsername] = useState(''); // 用户名
  const [password, setPassword] = useState(''); // 密码
  const [nickname, setNickname] = useState(''); // 昵称

  const handleLogin = () => {
    // 在这里执行登录逻辑，例如发送登录请求到服务器
    // 成功登录后，设置isLoggedIn为true，并更新用户信息
    setIsLoggedIn(true);
    setUsername('用户示例');
    setNickname('示例昵称');
  };

  const handleLogout = () => {
    // 在这里执行注销逻辑，例如发送注销请求到服务器
    // 成功注销后，设置isLoggedIn为false，并清空用户信息
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setNickname('');
  };

  const handleSaveChanges = () => {
    // 在这里执行保存修改逻辑，例如发送修改请求到服务器
    // 成功保存后，更新用户信息
    setUsername(username); // 这里的逻辑可以根据你的需求来实现
    setNickname(nickname);
    // 清空密码字段，以便用户重新输入密码
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>用户设置</Text>
      {isLoggedIn ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="用户名"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="密码"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="昵称"
            value={nickname}
            onChangeText={(text) => setNickname(text)}
          />
          <Button title="保存修改" onPress={handleSaveChanges} />
          <Button title="注销" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Button title="登录" onPress={handleLogin} />
          <Button title="注册" onPress={() => {}} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 250,
  },
});

export default Settings;
