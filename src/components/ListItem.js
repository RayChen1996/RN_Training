import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarker, faCalendar } from '@fortawesome/free-solid-svg-icons';
const ListItem = ({ item }) => {
  return (
    <View style={styles.outContainer}>
        <View style={styles.container}>
            <View style={{flex:.3,flexDirection:'column'  }}>
                <View style={{ flex:.55, marginTop:5,  justifyContent:'flex-start',flexDirection:'column',alignItems:'flex-end'}}>
                  <Image source={item.imageSource} style={styles.image} />
                </View>
                
                <View style={{flex:.05}}>
                </View>
                <View style={{flex:.45,flexDirection:'row', justifyContent:'flex-end',alignItems:'baseline'  }}>
                  <Text style={{fontSize:16,flex:.8,textAlign:'right',color:'#000'}}>{item.roomCount} </Text>
                  <Text style={{fontSize:10,color:'#000'}}>間</Text>                
                </View>

            </View>
            {/*右欄*/}
            <View style={{flex:.7,marginLeft:10,}}>
                <Text style={{fontSize:18,color:'#000'  }}>{item.hotelName}</Text>
                <View style={{marginTop:20}}>
                    <Text>
                        <FontAwesomeIcon icon={faCalendar}  color="#52cabe"   />
                          <Text> </Text>
                        <Text style={{color:'#ccc'}}> {item.dateTime} </Text>
                    </Text>
                </View>
                <View style={{marginBottom:20,marginTop:5}}>
                    <Text > 
                        <FontAwesomeIcon icon={faMapMarker}  color="#52cabe"   />
                        <Text> </Text>
                        <Text style={{color:'#ccc'}}> {item.address} </Text>
                  
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
    backgroundColor:'#fff',
    borderWidth: 1,
    color:'#fff',
    margin:5,
    borderRadius:15,
  },
  container: {
    borderWidth: .5,
    borderColor: '#52cabe',
   
    color:'#000',
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
    flexDirection:'row',
    padding:2,
    borderRadius:15,
  },
  image: {
    width: 85,
    height: 70,
    borderRadius:15,
    flex:.35,
  },
});

export default ListItem;