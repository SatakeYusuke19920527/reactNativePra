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
            <Icon name='bookmark' color={tintColor} size={24} />
          )
        })
      },
      Profile: {
        screen: Page2,
        // 追加
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='heart' color={tintColor} size={24} />
          )
        })
      },
      Message: {
        screen: Page3,
        // 追加
        navigationOptions: () => ({
          tabBarIcon: ({ tintColor }) => (
            <Icon name='lock' color={tintColor} size={24} />
          )
        })
      },
    },
    BottomTabNavigatorConfig
  )
);

export default TabNavigator;
