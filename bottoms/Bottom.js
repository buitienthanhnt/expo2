import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs @react-navigation/drawer
import { Ionicons } from '@expo/vector-icons';                            // chạy được cả trên web và android. xem icon: https://icons.expo.fyi || install: npm i @expo/vector-icons

import AccountScreen from "./tabs/AccountScreen";
import HomeScreen from "./tabs/HomeScreen";
import ProductScreen from "./tabs/ProductScreen";

const Tab = createBottomTabNavigator();
const BottomTabs = ({props, route})=>{
    return(
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarActiveTintColor: 'tomato', // màu icon mặc định là xanh, dùng như này sẽ là màu cà chua.
                tabBarInactiveTintColor: 'gray', // gray cũng là màu mặc định luôn.
                headerShown: false               // ẩn phần tiêu đề bên trên của: Tab.Navigator
            })}
            // tabBarOptions={{ showLabel: false }} // ẩn bottom_tab title(tiêu đề của thanh dưới trang)
        >
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarShowLabel: false,     // ẩn bottom_tab title(tiêu đề của thanh dưới trang)
                    tabBarIcon: ({ focused, color, size }) => {
                        return (<Ionicons name={"home"} size={26} color={color} />);
                    }
                }}
            />

            <Tab.Screen name="ProductScreen" component={ProductScreen}
                options={{
                    tabBarLabel: 'Products',
                    tabBarIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'bug' : 'list'} size={26} color={color} />
                }}
            />

            <Tab.Screen name="AccountScreen" component={AccountScreen} tabBarOptions={{ showLabel: false }}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ focused, color, size }) => (<Ionicons name={"people"} size={26} color={color} />)
                }} />              

        </Tab.Navigator>
    );
}

export default BottomTabs;