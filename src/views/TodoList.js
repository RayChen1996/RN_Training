import {View,TextInput,Text,  TouchableOpacity,StyleSheet,FlatList} from 'react-native'
import React, { useState,useEffect } from 'react';

const Todolist = () =>{
  const [task, setTask] = useState(''); // 用于存储输入的待办事项
  const [todoList, setTodoList] = useState([]); // 用于存储待办事项列表
  const apiUrl = ''; // 将YOUR_API_ENDPOINT替换为你的API地址

  const handleTaskChange = (text) => {
    setTask(text);
  };

  useEffect(()=>{

    console.log("fetch data ")
    for(let i = 0 ;i<90;i++){
        todoList.push({
            id:i+1,
            task:`Todo ${i}`
        })        
    }



  },todoList)

 const handleDelete = (id) => {
    // 发送DELETE请求将待办事项从API中删除
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // 删除成功后从待办事项列表中移除该项
        const updatedList = todoList.filter((item) => item.id !== id);
        setTodoList(updatedList);
      })
      .catch((error) => {
        console.error('删除待办事项时出错', error);
      });
  };
  const handleSubmit = () => {
    // 创建一个待办事项对象
    const todoItem = {
      task: task,
      completed: false, // 可以根据需要设置默认值
    };

    // 发送POST请求将待办事项发送到API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoItem),
    })
      .then((response) => response.json())
      .then((data) => {
        // 请求成功后可以执行其他操作，例如刷新待办事项列表
        console.log('待办事项已添加到API', data);
      })
      .catch((error) => {
        console.error('添加待办事项时出错', error);
      });

    // 清空输入框
    setTask('');
  };



    return(
        <View>

        <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()} // 假定每个待办事项都有一个唯一的id属性
        renderItem={({ item }) => (
            <View style={styles.todoItem}>
          <Text>{item.task}</Text>
           <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteButton}>删除</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // 在这里导航到详细页面，传递待办事项数据或ID以供编辑
                console.log('进入详情页', item.id);
              }}
            >
              <Text style={styles.detailsButton}>详情</Text>
            </TouchableOpacity>
           </View>
        )}
      />


         <TextInput
        placeholder="输入待办事项"
        value={task}
        onChangeText={handleTaskChange}
      />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>完成</Text>
      </TouchableOpacity>
   
        </View>
    )
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

    todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  detailsButton: {
    color: 'blue',
    fontWeight: 'bold',
  },


});
export default Todolist;