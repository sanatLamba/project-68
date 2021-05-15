import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer,} from 'react-navigation';
import { createBottomTabNavigator } from "react-navigation-tabs";
import InstagramScreen from './screens/InstagramScreen';
import FacebookScreen from './screens/FacebookScreen';

export default class App extends React.Component {
  render(){
  return (
    <Appcontainer />
  );
  }
}

var tabNavigator = createBottomTabNavigator({
  Instagram:InstagramScreen,
  facebook:FacebookScreen
})
const Appcontainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
