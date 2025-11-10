import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeStack() {
return (
<Stack.Navigator>
<Stack.Screen name="HomeList" component={HomeScreen} options={{ title: 'Pokémon'}} />
<Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
</Stack.Navigator>
);
}


export default function MainNavigator() {
return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeStack} />
<Tab.Screen name="Profile" component={ProfileScreen} />
</Tab.Navigator>
);
}