//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import WebViewScreen from '../screens/WebView';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();
// create a component
const HomeMain = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              title: '讀卡機',
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen
            options={{
              title: '詳細頁',
              headerShown: false,
            }}
            name="Detail"
            component={DetailsScreen}
          />

          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="WebView"
            component={WebViewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default HomeMain;
