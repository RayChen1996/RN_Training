import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faQuestionCircle, faClock, faUser } from '@fortawesome/free-solid-svg-icons';

const CustomTabLabel = ({ label, focused, icon }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <FontAwesomeIcon icon={icon} size={20}     color={focused ? '#fae2bd' : '#52cabe'} />
      <Text style={{ color: focused ? '#fae2bd' : '#52cabe' , fontSize: 12 }}>
        {label}
      </Text>
    </View>
  );
};

export default CustomTabLabel;