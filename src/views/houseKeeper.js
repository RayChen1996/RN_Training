
import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity ,
  FlatList ,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListItem from '../components/ListItem'; // 导入自定义的 ListItem 组件
import axios from 'axios'; // 引入axios
import hotelImage from '../../assets/hotel.jpg';
import hotelImage1 from '../../assets/hotel1.jpg';
import hotelImage2 from '../../assets/hotel2.jpg';
import hotelImage3 from '../../assets/hotel3.jpg';

const hotelImages = [hotelImage,hotelImage1, hotelImage2, hotelImage3];


import BottomNav from '../components/BottomNav'
import { faker } from '@faker-js/faker';

const data = [];
const generateFakeHotel = (id) => {

  const hotelName = faker.name.firstName() + ' ' + faker.name.lastName() + ' Hotel';
  const address = faker.address.streetAddress() + ', ' + faker.address.city();
  const dateTime = `${faker.date.between('2023-09-01', '2023-10-30').toLocaleDateString()} - ${faker.date.between('09-01', '10-30').toLocaleDateString()}` ;
  // 隨機選擇一張圖片
  const randomImage = hotelImages[Math.floor(Math.random() * hotelImages.length)];

  return {
    id: id.toString(),
    roomCount: faker.number.int({ min: 10, max: 2500 }),
    imageSource: randomImage, // 替換為您的圖片URL
    hotelName: hotelName,
    dateTime: dateTime,
    address: address,
  };
}

for (let i = 1; i <= 10; i++) { 
  data.push(generateFakeHotel(i));
}

const  houseKeeper = () => {
 const [selectedCity, setSelectedCity] = useState(''); // 初始值为空

  return (
    <View style={styles.container}>
       <View style={styles.headerContainer}>
          <Text style={{color:'white',fontWeight:'bold', paddingLeft:10,}}>houseKeeper</Text>
          <Text style={{color:'white' ,paddingLeft:10}}>潔易管理顧問有限公司</Text>
       </View>
       <View style={styles.filterContainer}>
           <View style={{flex:.5}}>
           </View>
           <View style={[styles.pickerContainer,{color:'#fff'}]}>
                <Picker
                    selectedValue={selectedCity}
                    style={{color:'black'}}
                    onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
                >
                    <Picker.Item label="縣市" value="縣市" />
                    <Picker.Item label="新北市" value="新北市" />
                    <Picker.Item label="桃園市" value="桃園市" />
                </Picker>           
           </View>

          <View style={{flex:.1}}>
           </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCity}
                    style={{color:'black',padding:2}}
                    onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
                >
                    <Picker.Item label="地區" value="地區" />
                    <Picker.Item label="新北市" value="新北市" />
                    <Picker.Item label="桃園市" value="桃園市" />                   
                </Picker>           
            </View>

           <View style={{flex:.1}}>
           </View>
           <View style={{flex:1.5,padding:5, }}>
                <TouchableOpacity
                style={{
                  backgroundColor:'#fbdf58',
                  flex: 1,
                  borderRadius:5,
                  alignItems: 'center', // 垂直居中
                  justifyContent: 'center', // 水平居中
                  
                }}
                >
                <Text
                style={{fontSize:18,fontWeight:'bold',color:'black',}}
                >刊登</Text>
                </TouchableOpacity>
          </View>

          <View style={{flex:.2}}>
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
    borderWidth: .5,  
    borderColor: '#ccc', 
    borderRadius: 4,  
    flex:3.5,
    color:'black'
  },    
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },
  headerContainer:{
    backgroundColor:"#52cabe",
    flex: 1,
    justifyContent:'center',
  },
  filterContainer:{
    backgroundColor:'#fff',
    flex: .8,
    flexDirection:'row',
    marginTop:5,
    marginRight:10
  },
  ListViewContainer:{
    flex: 7.2,
    backgroundColor:'#fff',
    marginLeft:6,
    marginRight:6
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