import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const TabBarIcon = ({ icon, label }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}   </Text>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,  
  },
  label: {
    fontSize: 12,
  },
});

export default TabBarIcon;
