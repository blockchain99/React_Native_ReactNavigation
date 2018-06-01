import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import UserDetail from '../screens/UserDetail';

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  UserDetail: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`
    }),
  },
});

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      TabBarlabel: 'Feed',
      TabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      TabBarlabel: 'Me',
      TabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});
