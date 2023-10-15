//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';
// create a component
const MySearchBar = props => {
  const {searchQuery, onChangeSearch} = props;
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{
        backgroundColor: 'white',
        borderWidth: 1,
        borderBlockColor: '#ccc',
      }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MySearchBar;
