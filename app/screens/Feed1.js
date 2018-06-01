import React, { Component } from 'react';
import {
  // Text,
  // View,
  ScrollView
} from 'react-native';
import { List, ListItem, Avatar, SearchBar } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { users } from '../config/data';

class Feed extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onLearnMore = this.onLearnMore.bind(this);
  // }

  onLearnMore = (user) => {
    this.props.navigation.navigate('UserDetail', { ...user });
    // this.props.navigation.navigate('UserDetail', user);
  };

  render() {
    return (
      <ScrollView>
      <SearchBar
        showLoading
        platform="android"
        cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        placeholder='Search'
      />
      <Avatar
       size="small"
       rounded
       source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
       onPress={console.log('It works!!!')}
       activeOpacity={0.7}
      />
      <Avatar
       size="medium"
       source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg' }}
       onPress={console.log('It works!!!')}
       activeOpacity={0.7}
      />
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;
