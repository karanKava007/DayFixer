import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import RecipesScreen from '../screens/Home';
import CategoriesScreen from '../screens/Categories';
import FavoritesScreen from '../screens/Favorites';
import SettingsScreen from '../screens/Setting';
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
        tabBarStyle: { backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 60, elevation: 5 },
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
        name="Recipes"
        component={RecipesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="restaurant-menu" color={color} size={IconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="category" color={color} size={IconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="favorite" color={color} size={IconSize} />
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

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default AppBottomRoute;
