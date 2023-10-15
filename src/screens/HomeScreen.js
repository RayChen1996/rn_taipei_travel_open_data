//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
// create a component
import MyHeader from '../components/base/MyHeader';
import MySearchBar from '../components/base/SearchBar';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import axios from 'axios';

const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation}) => {
  const [lang, setLang] = useState('zh-tw');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const backHome = () => {
    navigation.pop();
  };
  const fetchData = () => {
    console.log(`https://www.travel.taipei/open-api/${lang}/Attractions/All`);

    //https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1

    axios
      .get(
        `https://www.travel.taipei/open-api/${lang}/Attractions/All?page=1`,
        {
          timeout: 10000, // 10秒超时
        },
      )
      .then(res => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('fetch err : ' + err);
        setIsLoading(false);
      });
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: index % 2 === 0 ? 'white' : '#f0f0f0', // 交错背景色
          padding: 10,
        }}>
        <Image
          source={{uri: item.images[0].src}} // 使用第一张图片
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 10}}>
          <Text>{item.name}</Text> {/* 旅游景点标题 */}
          {/* 还可以显示其他信息 */}
        </View>
      </View>
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.15,
          width: '100%',
        }}>
        <MyHeader titleText={'景點列表'} isShowTranslateBtn={true} />
      </View>
      <View
        style={{
          flex: 0.15,
          width: '100%',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 0.05,
          }}></View>
        <View
          style={{
            flex: 0.9,
          }}>
          <MySearchBar />
        </View>

        <View
          style={{
            flex: 0.05,
          }}></View>
      </View>
      <View
        style={{
          flex: 0.7,
        }}>
        {isLoading ? (
          <ActivityIndicator
            animating={true}
            color={MD2Colors.pink500}
            size="large"
          />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </View>
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
export default HomeScreen;
