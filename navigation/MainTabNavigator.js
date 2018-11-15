import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RequestScreen from '../screens/RequestScreen';
import SupportScreen from '../screens/SupportScreen';
import TransactionScreen from '../screens/TransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';

const RequestStack = createStackNavigator({
  Request: RequestScreen,
});

RequestStack.navigationOptions = {
  tabBarLabel: 'Request',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-person'}
      name={Platform.OS === 'android' ? `ios-person` : 'md-person'}
    />
  ),
};

const SupportStack = createStackNavigator({
  Support: SupportScreen,
});

SupportStack.navigationOptions = {
  tabBarLabel: 'Support',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-chatbubbles` : 'md-chatbubbles'}
      name={Platform.OS === 'android' ? `ios-chatbubbles` : 'md-chatbubbles'}
    />
  ),
};

const TransactionStack = createStackNavigator({
  Transaction: TransactionScreen,
});

TransactionStack.navigationOptions = {
  tabBarLabel: 'Transaction',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-refresh` : 'md-refresh'}
      name={Platform.OS === 'android' ? `ios-refresh` : 'md-refresh'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person` : 'md-person'}
      name={Platform.OS === 'android' ? `ios-person` : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  RequestStack,
  SupportStack,
  TransactionStack,
  ProfileStack,
});
