//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
const MyHeader = props => {
  const {
    isShowBackBtn,
    isShowTranslateBtn,
    titleText,

    OnBackPress,
    OnTranslatePress,
  } = props;
  return (
    <View
      style={{
        flex: 0.75,
        backgroundColor: 'orange',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View
        style={{
          paddingLeft: 5,
          flex: 0.111,
        }}>
        {isShowBackBtn ? (
          <TouchableOpacity onPress={OnBackPress}>
            <Icon name="arrow-left" size={35} color="black" />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
      <View
        style={{
          flex: 0.888,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 24,
            color: '#000',
            textAlign: 'center',
            fontWeight: '900',
          }}>
          {titleText}
        </Text>
      </View>
      <View
        style={{
          flex: 0.111,
        }}>
        {isShowTranslateBtn ? (
          <TouchableOpacity onPress={OnTranslatePress}>
            <Icon name="language" size={35} color="white" />
          </TouchableOpacity>
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default MyHeader;
