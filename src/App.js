/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import {Animated, Easing} from 'react-native';

import start from './screen/Start';
import index from './screen/Index';
import rank from './screen/Rank';
import throws from './screen/Throws';
import select from './screen/SelectThrowInfo';
import me from './screen/Me';
import starGift from './screen/StarGift';



const StackNavigator = createStackNavigator({
  Start: {
    screen: start,
    navigationOptions:{
    }
  },
  Index: {
    screen: index
  },
  Select: {
    screen: select
  },
  Me: {
    screen: me,
  },
  StarGift: {
    screen: starGift
  }
},{
  initialRouteName: 'Start',
  headerMode: 'screen',
  defaultNavigationOptions: {
    headerStyle: {
      // backgroundColor: '#006cff',
    },
    // headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const WIDTH = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [WIDTH, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }, { translateY: 0 }] };
    },
  }),
})


const AppContainer = createAppContainer(StackNavigator)

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}