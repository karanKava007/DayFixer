import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SettingsScreen from '../screens/Setting';
import CategoriesScreen from '../screens/Account';
import StatisticsScreen from '../screens/Search';
import CalendarScreen from '../screens/Dashboard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
let IconSize = 18;

const AppBottomRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'

      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#d3d3d3',
        tabBarStyle: { backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
        tabBarLabelStyle: { display: 'none' },
        tabBarCentered: true,
        tabBarIconStyle: { justifyContent: 'center', alignItems: 'center' },

        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: 'orange',
        headerTitleStyle: {
          fontSize: 18,
          fontFamily: 'Quicksand-Bold',
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bar-chart" color={color} size={IconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="date-range" color={color} size={IconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={IconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="folder" color={color} size={IconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={IconSize} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomRoute;
