
import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { faCalendar,faBullhorn, faEnvelope, faComment,faBookmark,faUser } from '@fortawesome/free-solid-svg-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import CustomTabLabel from '../components/CustomTabLabel'
const Tab = createBottomTabNavigator();

const Home = () =>{
    return(
        <View></View>
    )
}
const BottomNav = () =>{
    return(
    <NavigationContainer>
        <Tab.Navigator

        options={{
            tabBarIcon: null,
        }}
    
        >
        <Tab.Screen 
        name="接單管理"
        options={{
            tabBarLabel: ({ focused }) => (
            <CustomTabLabel
                
                label="接單管理"
                focused={focused}
                icon={faBullhorn} // 指定对应的图标
            />
            ),
            tabBarIcon: ({ focused }) => ( // 将这里的tabBarIcon设置为null
            <CustomTabLabel
                label=""
                focused={focused}
                icon={null}
            />
            ),
            
        }}
        component={Home}  />

        <Tab.Screen 
        name="問答"
        options={{
            tabBarLabel: ({ focused }) => (
            <CustomTabLabel
                label="問答"
                focused={focused}
                icon={faComment} // 指定对应的图标
            />
            ),

            tabBarIcon: ({ focused }) => ( // 将这里的tabBarIcon设置为null
            <CustomTabLabel
                label=""
                focused={focused}
                icon={null}
            />
            ),
        }}
        component={Home}  />
        <Tab.Screen 
        name="打卡"
        options={{
            tabBarLabel: ({ focused }) => (
            <CustomTabLabel
                label="打卡"
                focused={focused}
                icon={faBookmark} // 指定对应的图标
            />
            ),
            tabBarIcon: ({ focused }) => ( // 将这里的tabBarIcon设置为null
            <CustomTabLabel
                label=""
                focused={focused}
                icon={null}
            />
            ),        
        }}
        component={Home}  />


        <Tab.Screen 
        name="的行事曆"
        options={{
            tabBarLabel: ({ focused }) => (
            <CustomTabLabel
                label="的行事曆"
                focused={focused}
                icon={faCalendar} // 指定对应的图标
            />
            ),
            tabBarIcon: ({ focused }) => ( // 将这里的tabBarIcon设置为null
            <CustomTabLabel
                label=""
                focused={focused}
                icon={null}
            />
            ),        
        }}
        component={Home}  />
    
        <Tab.Screen 
        name="會員中心"
        options={{
            tabBarIcon: null,
            tabBarLabel: ({ focused }) => (
            <CustomTabLabel
                label="會員中心"
                focused={focused}
                icon={faUser} // 指定对应的图标
            />
            ),
            tabBarIcon: ({ focused }) => ( // 将这里的tabBarIcon设置为null
            <CustomTabLabel
                label=""
                focused={focused}
                icon={null}
            />
            ),        
        }}
        component={Home}  />
                    
        </Tab.Navigator>
    </NavigationContainer>
    )

}

export default BottomNav;