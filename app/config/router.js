import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Me from '../screens/Me';
import UserDetail from '../screens/UserDetail';
import Settings from '../screens/Settings';

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
    screen: FeedStack,
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

export const SettingStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: { //pops up screen
    screen: SettingStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none', //in header no navigation bar.
});
