
import React,{useState,useEffect} from 'react';
// import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity ,
  FlatList ,
  TextInput,
  Image,
   
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar,faBullhorn, faEnvelope, faComment,faBookmark,faUser } from '@fortawesome/free-solid-svg-icons';
import TabBarIcon from '../components/TabBarIcon'; // 导入自定义组件
import { Picker } from '@react-native-picker/picker';
import { NavigationContainer } from '@react-navigation/native';
 
import CustomTabLabel from '../components/CustomTabLabel'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListItem from '../components/ListItem'; // 导入自定义的 ListItem 组件
const Tab = createBottomTabNavigator();
import RegisterPage from './SettingPage'
  
import axios from 'axios'; // 引入axios
import hotelImage from '../../assets/hotel.jpg';
import BottomNav from '../components/BottomNav'
import { faker } from '@faker-js/faker';

const data = [];
// const data = [
//   {
//     id: '1',
//     roomCount: '2500',
//     imageSource: require('../../assets/hotel.jpg'),
//     hotelName:"台中大毅老爺行旅",
//     dateTime:'2021/10/01-10/16',
//     address:'台中市西區英才路601號'
//   },
//   {
//     id: '2',
//     roomCount: '2500',
//     imageSource: require('../../assets/hotel.jpg'),
//      hotelName:"台中大毅老爺行旅",
//     dateTime:'2021/10/01-10/16',
//     address:'台中市西區英才路601號'
//   },
//   // 添加更多数据项
// ];


const generateFakeHotel = (id) => {
    const DT = faker.date.between;
    const hotelName = "台中大毅老爺行旅";
  return {
    id: id.toString(),
    roomCount: 2500,
    imageSource: hotelImage,
    hotelName: hotelName,
    dateTime: "2021/10/01-10/16",
    address: "台中市西區英才路601號"
  };
}

for (let i = 1; i <= 20; i++) { 
  data.push(generateFakeHotel(i));
}


const  houseKeeper = () => {
 
 const [selectedCity, setSelectedCity] = useState(''); // 初始值为空

  const Home = () => {
    return(
      <View>
        <Text>Home</Text>
       
      </View>
    )
  }

 
  return (
    <View style={styles.container}>

       <View style={styles.headerContainer}>

          <Text style={{color:'white',fontWeight:'bold'}}>houseKeeper</Text>
          <Text style={{color:'white'}}>潔易管理顧問有限公司</Text>

       </View>
       <View style={styles.filterContainer}>
      
            
           <View style={[styles.pickerContainer]}>
                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
                >
                    <Picker.Item label="縣市" value="縣市" />
                    <Picker.Item label="新北市" value="新北市" />
                    <Picker.Item label="桃園市" value="桃園市" />
               
                </Picker>           
           </View>

            <View style={{flex:.01}}>
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCity}
                    onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
                >
                    <Picker.Item label="地區" value="地區" />
                    <Picker.Item label="新北市" value="新北市" />
                    <Picker.Item label="桃園市" value="桃園市" />
                   
                </Picker>           
           
            </View>



            <View style={{flex:.01}}>
            </View>
     
            <View style={{flex:.2,justifyContent:'center',alignItems:'center'}}>

                <TouchableOpacity
                style={{backgroundColor:'#fbdf58',padding:5,borderRadius:5}}
                >
                <Text
                style={{fontSize:18,fontWeight:'bold'}}
                >刊登</Text>
                </TouchableOpacity>
            
            
            
            </View>
       </View>    
       <View style={styles.ListViewContainer}>


 <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListItem item={item} />}
    />



       </View>    
       <View style={styles.BottomNavgationContainer}>
         <BottomNav />
       </View>
       
       
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: .5, // 添加边框
    borderColor: '#ccc', // 边框颜色
    borderRadius: 4, // 边框圆角
    flex:.4,
  },    
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  headerContainer:{
    paddingLeft:10,
    backgroundColor:"#52cabe",
    flex: 1,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  filterContainer:{
        backgroundColor:"white",
        flex: .8,
        flexDirection:'row',
        padding:2
  },
  ListViewContainer:{
        // backgroundColor:"green",
        flex: 7.2,
  },
  BottomNavgationContainer:{
        backgroundColor:"yellow",
        flexDirection:'column',
        flex: 1,
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
  airplaneIcon: {
    width: 50, 
    height: 50, 
    resizeMode: 'contain', 
  },
});

export default houseKeeper;