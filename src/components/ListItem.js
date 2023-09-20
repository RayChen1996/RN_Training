import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarker, faCalendar } from '@fortawesome/free-solid-svg-icons';
const ListItem = ({ item }) => {
  return (
    <View style={styles.outContainer}>
    <View style={styles.container}>
            <View style={{flex:.3}}>
                <Image source={item.imageSource} style={styles.image} />
                <Text style={{fontSize:20}}>{item.roomCount} 間</Text>
            </View>
            <View style={{flex:.7,padding:10}}>
                <Text style={{fontSize:20,fontWeight:'bold',marginBottom:18}}>{item.hotelName}</Text>
                <View>
                    <Text>
                        <FontAwesomeIcon icon={faCalendar}  color="#52cabe"   />
                          <Text> </Text>
                        <Text> {item.dateTime} </Text>
                    </Text>
                </View>
                <View>
                
                    <Text > 
                       
                        <FontAwesomeIcon icon={faMapMarker}  color="#52cabe"   />
                        <Text> </Text>
                        <Text> {item.address} </Text>
                  
                    </Text>
                </View>      
            </View>      
        
        </View>
    </View>
  );
}




const styles = StyleSheet.create({
   outContainer:{
    borderColor: '#fae2bd',
    borderWidth: 1,
    margin:5,
    borderRadius:15,
  },
  container: {
    borderWidth: .5,
    borderColor: '#52cabe',
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
    margin:.15,
    flexDirection:'row',
    padding:5,
    borderRadius:15,
  },
  image: {
    width: 75,
    height: 50,
    marginRight: 10,
    borderRadius:15
  },
});

export default ListItem;