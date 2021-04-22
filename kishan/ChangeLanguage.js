import React, {useState} from 'react';
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
  ScrollView,
  TextInput,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import Aicon from 'react-native-vector-icons/AntDesign';
import Micon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {TextInput, List} from 'react-native-paper';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {FontFamily} from './config/FontFamily';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {LinearTextGradient} from 'react-native-text-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Row, Rows, Table} from 'react-native-table-component';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Carousel from 'react-native-banner-carousel';
// import ActionButton from 'react-native-circular-action-menu';
import ActionButton from 'react-native-action-button';
// import {SocialIcon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
//const BannerWidth = Dimensions.get('window').width;
//const BannerHeight = 260;
import strings from './constant/LocalizedStrings';
import {getLng, setLng} from './helper/ChangeLng';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  item: {
    flex: 1,
    overflow: 'hidden',
    // marginBottom: 0,
    // borderRadius: 10,
    margin: 2,
    // width: width * 0.8,
    // flexDirection: 'row',
    backgroundColor: '#FFF',
    // elevation: 2,
    // padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    // borderWidth: 0.5,
    // borderRadius: 10,
    // borderColor: '#666',
    elevation: 5,
    // height: height * 0.17,
  },
  imageStyle: {
    borderRadius: 5,
    width: 32,
    height: 32,
    // resizeMode: 'center',
    // backgroundColor: 'red',
  },

  headStyle: {
    marginBottom: 5,
    flex: 1,
  },

  questionv: {
    // width: width,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFF',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
    // height: height * 0.9,
  },

  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 16,
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
    width: width * 0.8,
    // alignSelf: 'center',
    borderRadius: 50,
    marginTop: 15,
    height: 35,
    // marginLeft: 20,
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
    color: '#1faba4',
    backgroundColor: 'transparent',
    fontFamily: FontFamily.bold1,
  },

  title: {
    fontSize: 13,
    fontFamily: FontFamily.regular1,
    color: '#666',
    textAlign: 'left',
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

  backgroundImage: {
    flex: 1,
    // justifyContent: 'center',
    width: width,
    height: height * 1.1,
  },
});

export default function ChangeLanguage(props) {
  const changeLanguage = lang => {
    if (lang === 'Hindi') {
      setLng('Hindi');
      props.navigation.replace('KLogin');
      return;
    }
    if (lang === 'English') {
      setLng('English');
      props.navigation.replace('KLogin');
      return;
    }
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../kishanimg/bgbg1.png')}
        style={styles.backgroundImage}>
        <View style={[styles.container]}>
          <StatusBar translucent backgroundColor="transparent" />

          <View
            style={{
              width: '100%',
              height: 100,
              // backgroundColor: '#1faba4',
            }}>
            <LinearGradient
              colors={['#1ac9ff', '#3f7ddf']}
              start={{x: 1, y: 1}}
              end={{x: 0, y: 0}}>
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
                    onPress={() => props.navigation.openDrawer()}
                    style={{
                      borderRadius: 50,
                      //   backgroundColor: '#FFF',
                      width: 36,
                      height: 36,
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Animatable.View
                      // delay={(index + 1) * 1000}
                      duration={3000}
                      animation="rotate">
                      <Icon
                        name="close"
                        size={22}
                        style={{
                          paddingLeft: 0,
                          marginTop: 0,
                          color: '#FFF',
                        }}
                        resizeMode={'contain'}
                      />
                    </Animatable.View>
                  </TouchableOpacity>
                </View>
                <View style={styles.minisearch}>
                  {/* <Icon style={{...styles.emailIcon}} name="search" size={15} /> */}
                  {/* <TextInput
                  style={{
                    ...styles.minitextStyleText,
                    fontFamily: FontFamily.regular,
                    fontSize: 12,
                  }}
                  placeholderTextColor="#1faba4"
                  placeholder="Search"></TextInput> */}
                  <Text
                    style={{
                      color: '#FFF',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      // fontFamily: FontFamily.regular,
                    }}>
                    Change Language
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>

        <View
          style={{
            width: width,
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              //   width: width * 0.99,
              //   borderColor: 'grey',
              //   borderWidth: 0.5,
              paddingTop: 0,
            }}>
            <TouchableOpacity
              // onPress={() => props.navigation.navigate('KLogin')}
              onPress={() => changeLanguage('English')}>
              <View
                style={{
                  width: width,
                  backgroundColor: '#666',
                  borderWidth: 0.1,
                }}>
                <View style={{backgroundColor: '#FFF'}}>
                  <Text
                    style={{
                      marginLeft: 5,
                      marginTop: 8,
                      color: '#000',
                      padding: 15,
                    }}>
                    English
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeLanguage('Hindi')}>
              <View
                style={{
                  width: width,
                  backgroundColor: '#FFF',
                  borderWidth: 0.2,
                }}>
                <View style={{backgroundColor: '#FFF'}}>
                  <Text
                    style={{
                      marginLeft: 5,
                      marginTop: 8,
                      color: '#000',
                      padding: 15,
                    }}>
                    हिन्दी
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={{borderColor: '#666', borderWidth: 0.2}} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
