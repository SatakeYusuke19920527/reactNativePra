import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const BottomTabNavigatorConfig = {
  initialRouteName: 'Profile',
  tabBarOptions: { showLabel: false }
};

const TabNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Home: {
        screen: Page1,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='user' color={tintColor} size={24} />
          )
        })
      },
      Profile: {
        screen: Page2,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='thumbs-o-up' color={tintColor} size={24} />
          )
        })
      },
      Message: {
        screen: Page3,
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='send-o' color={tintColor} size={24} />
          )
        })
      },
    },
    BottomTabNavigatorConfig
  )
);

export default TabNavigator;
