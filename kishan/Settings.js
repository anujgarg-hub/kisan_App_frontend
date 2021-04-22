import React, {Component, useRef, useState} from 'react';
import {
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
  SafeAreaView,
  Button,
  View,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  Animated,
  SectionList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
// import {TextInput, List} from 'react-native-paper';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {FontFamily} from './config/FontFamily';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {LinearTextGradient} from 'react-native-text-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Row, Rows, Table} from 'react-native-table-component';
import {Rating, AirbnbRating} from 'react-native-ratings';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  // item: {
  //   backgroundColor: '#1faba4',
  //   padding: 15,
  //   marginVertical: 2,
  //   borderRadius: 10,
  // },

  item: {
    borderColor: '#d1ccc0',
    backgroundColor: '#ffffff',
    padding: 20,
    backgroundColor: 'white',
    // width: width * 0.9,
    // padding: 20,
    borderRadius: 10,
    borderColor: '#222f3e',
    elevation: 2,
    marginVertical: 8,
  },

  textContainer: {
    flexDirection: 'row',
    // marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1faba4',
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 50,
  },
  minisearch: {
    flexDirection: 'row',
    // marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFF',
    width: width * 0.4,
    // alignSelf: 'center',
    borderRadius: 50,
    marginTop: 15,
  },
  minitextStyleText: {
    // fontSize: 12,
    // fontWeight: 'bold',
    width: width * 0.3,
    // height: 32,
    // marginLeft: 1,
    color: '#1faba4',
  },
  emailIcon: {
    color: '#1faba4',
  },
  textStyleText: {
    fontSize: 14,
    // fontWeight: 'bold',
    width: width * 0.75,
    marginLeft: 1,
    color: '#FFF',
  },

  LinearGradientStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    // width: width * 0.45,
    // borderBottomRightRadius: 15,
    // borderTopLeftRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    // shadowOffset: {
    //   width: width * 0.6,
    //   height: 60,
    // },
  },
  tag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.45,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 10,

    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: width * 0.6,
      height: 60,
    },
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1ac9ff',
    backgroundColor: 'transparent',
    fontFamily: FontFamily.bold1,
  },

  title: {
    fontSize: 13,
    width: width * 0.85,
    fontFamily: FontFamily.bold1,
    color: '#1ac9ff',
    fontWeight: 'bold',
  },
  descStyle: {
    fontSize: 14,
    width: width * 0.5,
    color: '#000',
    fontFamily: FontFamily.regular1,
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    fontSize: 20,
    fontFamily: FontFamily.regular,
  },

  //   backgroundImage: {
  //     flex: 1,
  //     // justifyContent: 'center',
  //     width: width,
  //     height: height * 1.1,
  //   },
});
const DATA = [
  {
    title: [<FAIcon name="user" size={20} />, ' Kishan Info'],
    data: ['Vikram Diwakar', '+91 9039649917', 'Nehru Color, Gwalior'],
  },
  {
    title: [
      <Icon style={{top: 10}} name="app-settings-alt" size={20} />,
      ' Settings',
    ],
    data: ['Change Password'],
  },
  {
    title: [<FAIcon name="language" size={20} />, ' Language'],
    data: ['Hindi', 'English'],
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export default function Settings(props) {
  return (
    <View style={styles.Vcontainer}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#1ac9ff',
        }}>
        <LinearGradient
          colors={['#1ac9ff', '#6fe6df']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              alignItems: 'flex-end',
              padding: 15,
              marginTop: 20,
            }}>
            <View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => props.navigation.goBack()}
                style={{
                  borderRadius: 50,
                  backgroundColor: '#FFF',
                  width: 36,
                  height: 36,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <MCIcon
                  name="arrow-left"
                  size={16}
                  style={{
                    paddingLeft: 0,
                    marginTop: 0,
                    color: '#1ac9ff',
                  }}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.minisearch}>
              <Text
                style={{
                  color: '#FFF',
                  alignSelf: 'flex-start',
                  fontSize: 20,
                  padding: 5,
                }}>
                Kishan - APP
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View
        style={{
          width: width,
          height: 20,
        }}></View>
      <View
        style={{
          marginBottom: height * 0.01,
        }}>
        <Image
          source={require('../kishanimg/logo.png')}
          style={{
            width: 82,
            height: 70,
            marginLeft: 10,
          }}
          resizeMode={'contain'}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item title={item} />}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    </View>
  );
}
