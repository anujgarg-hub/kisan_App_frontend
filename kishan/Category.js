import React, {useEffect, useState} from 'react';
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
import Strings from './constant/LocalizedStrings';
// import ActionButton from 'react-native-circular-action-menu';
import ActionButton from 'react-native-action-button';
import {selectedLanguage} from './helper/ChangeLng';
// import {SocialIcon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
// import {MyDrawer} from './MainNavigationStack'
//const BannerWidth = Dimensions.get('window').width;
//const BannerHeight = 260;
const DATAS = [
  {name: 'carousel1', pic: require('../kishanimg/1.jpg')},
  {name: 'carousel2', pic: require('../kishanimg/2.jpg')},
  {name: 'carousel3', pic: require('../kishanimg/3.jpg')},
];

function renderimage(image, index) {
  return (
    <View key={index}>
      <Image
        style={{
          // marginTop: '1%',
          width: width,
          height: height * 0.18,
          borderRadius: 20,
        }}
        resizeMode={'center'}
        source={image.pic}
      />
    </View>
  );
}

const data = [
  {
    name: 'All the profile of your Kisan can be seen here',
    name1: 'Profile',
    pic: require('../kishanimg/1.png'),
    ml: '5 KG',
    offer: '150',
    icon: (
      <Aicon
        style={{
          color: 'white',
          padding: 8,
          backgroundColor: '#fc5c65',
          borderRadius: 50,
        }}
        name="user"
        size={18}
      />
    ),
    screen: 'KProfile',
  },
  {
    name: 'All the Goverment Policy List of your Policy can be seen here',
    name1: 'All Goverment Policy List',
    pic: require('../kishanimg/1.png'),
    ml: '900 ML',
    offer: '150',
    icon: (
      <FAIcon
        style={{
          color: 'white',
          padding: 8,
          backgroundColor: '#1ac9ff',
          borderRadius: 50,
        }}
        name="users"
        size={18}
      />
    ),
    screen: 'KEmployees',
  },
  {
    name: 'All Your Policies can be seen here',
    name1: 'Show Policy List',
    pic: require('../kishanimg/1.png'),
    ml: '900 ML',
    offer: '150',
    icon: (
      <FAIcon
        style={{
          color: 'white',
          padding: 8,
          backgroundColor: '#1ac9ff',
          borderRadius: 50,
        }}
        name="users"
        size={18}
      />
    ),
    screen: 'KShowPolicy',
  },
];
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
    borderRadius: 10,
    margin: 8,
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
    height: height * 0.17,
  },
  imageStyle: {
    borderRadius: 5,
    width: 32,
    height: 32,
    // resizeMode: 'center',
    // backgroundColor: 'red',
  },
  backgroundFlat: {
    // flex: 1,
    // justifyContent: 'center',
    // width: width * 0.92,
    // height: height * 1.1,
    height: height * 0.11,
    borderRadius: 10,
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
    // flexDirection: 'row',
    // marginBottom: 5,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#FFF',
    // width: width * 0.4,
    // alignSelf: 'center',
    borderRadius: 50,
    marginTop: 15,
    height: 35,
    marginLeft: 20,
  },
  minitextStyleText: {
    // fontSize: 12,
    // fontWeight: 'bold',
    width: width * 0.3,
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

// var kisanId ='';

function Item({item, props}) {
  return (
    <View style={[styles.item]}>
      <ImageBackground
        resizeMode={'cover'}
        source={require('../kishanimg/bgbg1.png')}
        style={styles.backgroundFlat}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate(item.screen,{kisanIdd:props.route.params.kisanIddddd})}>
          <View style={{alignItems: 'flex-start', padding: 5}}>
            <View style={{flexDirection: 'row'}}>
              {item.icon}
              {/* <Image style={styles.imageStyle} source={item.icons}></Image> */}
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 8,
                  color: '#464646',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {item.name1}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'flex-start',
                // backgroundColor: '#1faba4',
                // position: 'absolute',
                // bottom: 10,
                top: 30,
                padding: 2,
                width: '100%',
              }}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
export default function Category(props) {
  const [getSelectedLanguage, setSelectedLanguage] = useState('');
  const [getkisanid, setkisanid] = useState('')

  var kisanId = props.route.params.kisanIddddd ;
  // setkisanid(kisanId)

  useEffect(() => {
    // console.log('kisanIdonCategoryPage',props);

    console.log('kisanIdonCategoryPage',kisanId);
    // fetchKisanId()
    selectedLanguage()
      .then(res => {
        setSelectedLanguage(res);
      })
      .catch(() => {});
      
  }, []);

  // const fetchKisanId=()=>{
  //   console.log('kisanIdonCategoryPage',(props.route.params.kisanId));

  // }
  return (
    <View style={{flex: 1, backgroundColor: '#FFF'}}>
      <ImageBackground
        source={require('../kishanimg/bgbg1.png')}
        style={styles.backgroundImage}>
        <View style={[styles.container]}>
          <StatusBar translucent backgroundColor="transparent" />

          <View
            style={{
              width: '100%',
              height: 100,
              backgroundColor: '#1ac9ff',
            }}>
            <LinearGradient
              colors={['#1ac9ff', '#6fe6df']}
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
                    // onPress={() => props.navigation.openDrawer()}
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
                    <Animatable.View
                      // delay={(index + 1) * 1000}
                      duration={500}
                      animation="bounce">
                      <MCIcon
                        name="arrow-left"
                        size={18}
                        style={{
                          paddingLeft: 0,
                          marginTop: 0,
                          color: '#1ac9ff',
                        }}
                        resizeMode={'contain'}
                      />
                    </Animatable.View>
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
                    Kisan - APP {Strings.Add}
                  </Text>
                </View>
                <View>
                  <View
                    style={
                      {
                        // borderRadius: 50,
                        // backgroundColor: '#FFF',
                        // width: 36,
                        // height: 36,
                        // justifyContent: 'center',
                        // alignContent: 'center',
                        // alignItems: 'center',
                      }
                    }>
                    {/* <FAIcon
                    name="user"
                    size={15}
                    style={{
                      paddingLeft: 0,
                      marginTop: 0,
                      color: '#1faba4',
                    }}
                    resizeMode={'contain'}
                  /> */}
                  </View>
                </View>
                <View>
                  <View
                    style={
                      {
                        // borderRadius: 50,
                        // backgroundColor: '#FFF',
                        // width: 36,
                        // height: 36,
                        // justifyContent: 'center',
                        // alignContent: 'center',
                        // alignItems: 'center',
                      }
                    }>
                    {/* <Animatable.View
                      duration={500}
                      animation="shake">
                       <FAIcon
                      name="bell"
                      size={15}
                      style={{
                        paddingLeft: 0,
                        marginTop: 0,
                        color: '#1faba4',
                      }}
                      resizeMode={'contain'}
                    /> 
                    </Animatable.View>*/}
                  </View>
                </View>
              
                <View
                  style={
                    {
                      // padding: 2,
                      // justifyContent: 'center',
                      // alignItems: 'center',
                      // alignSelf: 'center',
                      // borderRadius: 100,
                      // elevation: 8,
                    }
                  }>
                  <View style={{padding: 0}}>
                    {/* <TouchableOpacity>
                    <LinearGradient
                      // colors={['#e71a23', '#b5005d']}
                      colors={['#FFF', '#FFF']}
                      start={{x: 1, y: 1}}
                      end={{x: 0, y: 0}}
                      style={{
                        ...styles.LinearGradientStyle,
                        height: 36,
                        width: 36,
                      }}>
                      <FAIcon name="shopping-cart" size={15} color="#1faba4" />
                      <Text style={styles.buttonText}> 0</Text>
                    </LinearGradient>
                  </TouchableOpacity> */}
                  </View>
                </View>
              </View>
            </LinearGradient>
          
          </View>

      
          <View
            style={{
              // flex: 1,
              // backgroundColor: '#fff',
              justifyContent: 'center',
              alignContent: 'center',
              // alignSelf: 'center',
              // display: 'flex',
            }}>
            <Carousel
              autoplay
              autoplayTimeout={3000}
              loop
              index={0}
              pageSize={(width, height)}>
              {DATAS.map((image, index) => renderimage(image, index))}
            </Carousel>
          </View>
        </View>
        {/* <View style={{marginVertical: 1}} /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginVertical: 10}} />
          <Animatable.View duration={500} animation="zoomIn">
            <FlatList
              data={data}
              contentContainerStyle={{justifyContent: 'space-between'}}
              horizontal={false}
              scrollEnabled={true}
              // numColumns={2}
              renderItem={({item}) => <Item item={item} props={props} />}
              keyExtractor={item => item.id}
            />
          </Animatable.View>
        </ScrollView>
      </ImageBackground>
      {/* <MyDrawer drawerContent /> */}
      {/* {MyDrawer(props)} */}
    </View>
  );
}
