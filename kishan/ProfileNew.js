import React, {useRef, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  // Animatable,
  Dimensions,
  ImageBackground,
  Image,
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  TextInput,
  Animated,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import InputSpinner from 'react-native-input-spinner';
import Modal from 'react-native-modal';
import {List, RadioButton, Checkbox} from 'react-native-paper';
import {FontFamily} from './config/FontFamily';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Autocomplete from 'react-native-autocomplete-input';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { postData } from './FetchService';
const {width, height} = Dimensions.get('window');
import {selectedLanguage} from './helper/ChangeLng';
import Strings from './constant/LocalizedStrings';

//const BannerWidth = Dimensions.get('window').width;
//const BannerHeight = 260;
const initialLayout = {width: Dimensions.get('window').width};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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

  emailIcon: {
    color: '#FFF',
  },
  textStyleText: {
    fontSize: 14,
    // fontWeight: 'bold',
    width: width * 0.75,
    marginLeft: 1,
    color: '#FFF',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    // flex: 1,
  },
  LinearGradientStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.4,
    height: 40,
    borderRadius: 40,
    // borderBottomRightRadius: 15,
    // borderTopLeftRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: width * 0.6,
      height: 60,
    },
  },

  LinearGradientStyle1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.15,
    borderRadius: 50,
    // marginBottom: 10,
    padding: 8,
    fontFamily: FontFamily.regular,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    backgroundColor: 'transparent',
    fontFamily: FontFamily.bold1,
  },
  item: {
    // backgroundColor: '#ffffff',
    backgroundColor: 'white',
    width: width * 0.95,
    // padding: 10,
    borderRadius: 10,
    // borderColor: '#222f3e',
    borderColor: '#86dbe2',
    elevation: 5,
    marginBottom: 10,
    borderWidth: 1,
  },
  itemV: {
    backgroundColor: '#ffffff',
    // backgroundColor: 'white',
    width: width * 0.95,
    // padding: 10,
    borderRadius: 10,
    // borderColor: '#222f3e',
    borderColor: '#86dbe2',
    elevation: 2,
    marginBottom: 8,
    borderWidth: 1,
  },
  item2: {
    width: width * 0.97,
    // padding: 10,
    borderRadius: 10,
    // borderColor: '#222f3e',
    borderColor: '#86dbe2',
    elevation: 5,
    marginBottom: 5,
    borderWidth: 1,
    // height: 80,
    alignSelf: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  texStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    // letterSpacing: 1,
    padding: 3,
    margin: 2,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1ac9ff',
    letterSpacing: 1,
    padding: 3,
    margin: 2,
  },
  icon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    padding: 3,
    // letterSpacing: 1,
    margin: 2.3,
  },
  texStyleSmall: {
    fontSize: 11,
    // fontWeight: 'bold',
    color: '#999999',
  },
  title: {
    fontSize: 18,
    width: width * 0.6,
    fontFamily: FontFamily.bold1,
    color: '#fc1818',
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
  imageStyle: {
    borderRadius: 10,
    width: 78,
    height: 78,
  },
  text: {
    margin: 10,
    fontSize: 11,
    // fontWeight: 'bold',
    fontFamily: FontFamily.bold1,
  },
  tabStyle: {
    borderColor: '#e71a23',
    fontFamily: FontFamily.regular,
    height: 35,
    padding: 10,
  },
  activeTabStyle: {
    backgroundColor: '#e71a23',
    fontFamily: FontFamily.regular,
  },
  backgroundFlat: {
    flex: 1,
    // justifyContent: 'center',
    width: width * 0.92,
    height: height * 0.3,
    padding: 15,
  },
  backgroundFlatV: {
    flex: 1,
    justifyContent: 'center',
    width: width * 0.95,
    height: height * 0.11,
    padding: 10,
    alignSelf: 'center',
  },
  backgroundImage: {
    flex: 1,
    // justifyContent: 'center',
    width: width * 0.92,
    height: height * 0.3,
    padding: 15,
  },
  minisearch: {
    flexDirection: 'row',
    // marginBottom: 5,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#FFF',
    width: width * 0.5,
    // alignSelf: 'center',
    borderRadius: 50,
    marginTop: 15,
    height: 35,
  },
  minitextStyleText: {
    // fontSize: 12,
    // fontWeight: 'bold',
    width: width * 0.4,
    // height: 32,
    // marginLeft: 1,
    color: '#535353',
  },
  emailIcon: {
    color: '#535353',
  },
  loginContainer: {
    // width: width * 0.92,
    backgroundColor: '#1ac9ff',
    // justifyContent:"center",
    // alignSelf:'center',
    // alignItems: 'center',
    color: '#FFF',
    padding: 3,
  },
  minisearch1: {
    flexDirection: 'row',
    // marginBottom: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    width: width * 0.89,
    // alignSelf: 'center',
    borderRadius: 10,
    // marginTop: 15,
    height: 36,
    borderColor: '#86dbe2',
    borderWidth: 0.5,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    // paddingTop: 10,
    zIndex: 9999,
    // height: 180,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 100,
    marginBottom: 10,
    width: 100,
    marginTop: StatusBar.currentHeight,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  userAddressRow: {
    alignItems: 'center',
    // flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  headerColumn: {
    height: 160,
    // zIndex: 9999,
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },

  minitextStyleText1: {
    // fontSize: 12,
    // fontWeight: 'bold',
    width: width * 0.8,
    // height: 32,
    // marginLeft: 1,
    color: '#535353',
  },
  emailIcon1: {
    color: '#535353',
    alignSelf: 'center',
  },
  textStyleText: {
    fontSize: 14,
    // fontWeight: 'bold',
    width: width * 0.75,
    marginLeft: 1,
    color: '#FFF',
  },
  Boxes: {
    backgroundColor: '#FFF',
    width: width * 0.9,
    // height: 400,
    borderRadius: 10,
    margin: 4,
    // borderWidth: 0.5,
    // borderColor: '#1faba4',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 2,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default function ProfileNew(props) {
  const refRBSheet = useRef();
  const [getSelectedLanguage, setSelectedLanguage] = useState('');

  const [getProfileList, setProfileList] = useState([]);

  

  useEffect(() => {
    // fetchKisanId()
    selectedLanguage()
      .then(res => {
        console.log(res);
        setSelectedLanguage(res);
        console.log(Strings.Add);
        console.log(Strings.All);
      })
      .catch(() => {});
      
  }, []);


  const fetchData=async(kisanId)=>{
    var kisanId = props.route.params.kisanIdd
  console.log('kisanidOnProfilepage',kisanId);
  
    let body = {kissanid :kisanId }
    console.log('body',body)
    var result = await postData('kissan/displayProfile',body)
    console.log('resultOnProfileNew',result)
    setProfileList(result)
  }

 useEffect(()=>{
    fetchData();
 },[])

  const data = [
    {
      ec: 'K91L-001',
      en: 'Vikram Diwakar',
      doj: '25-01-2021',
      division: 'Nehru, Colony',
      location: 'Gwalior, Madhya Pradesh',
      department: 'Mobility Development',
      designation: 'Designer',
      Shift: 'Day Shift',
    },
  ];
  const [getData, setData] = useState([
    {
      name: 'Goyal Shop',
      mobile: '8770206043',
      gstin: 'UKSFS123862378951',
      address: 'Gwalior, Madhya Pradesh',
      ledger: 'General, Ledger',
      dealer: 'Registred',
    },
  ]);
  const [getTempData, setTempData] = useState([
    {
      ec: 'K91L-001',
      en: 'Vikram Diwakar',
      doj: '25-01-2021',
      location: 'Gwalior, Madhya Pradesh',
    },
  ]);

  const [getsearchtext, setsearchtext] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const dataTwo = [
    {
      cn: '458976234',
      ce: 'vikramdiwaker2@gmail.com',
      cc: 'Gwalior,Madhya Pradesh',
      ccc: 'India',
    },
  ];

  function Item({item}) {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            // borderBottomColor: '#a5a5a5',
            // borderBottomWidth: 0.3,
            // borderStyle: 'dotted',
            marginTop: 10,
          }}>
          <View style={{width: width * 0.3}}>
            <Text style={styles.texStyle}>{Strings.Kisan} {Strings.Name}</Text>
            <Text style={styles.texStyle}>{Strings.Kisan} {Strings.KRMobile}</Text>
            <Text style={styles.texStyle}>{Strings.Kisan} {Strings.Emailid}</Text>
            <Text style={styles.texStyle}>{Strings.Kisan} {Strings.Address}</Text>
          </View>
          <View style={{width: width * 0.1}}>
            <MIcon style={styles.icon} name="arrow-right" />
            <MIcon style={styles.icon} name="arrow-right" />
            <MIcon style={styles.icon} name="arrow-right" />
            <MIcon style={styles.icon} name="arrow-right" />
          </View>
          <View style={{width: width * 0.6}}>
            <Text style={styles.price}>{item.name}</Text>
            <Text style={styles.price}>{item.mobileno}</Text>
            <Text style={styles.price}>{item.emailid}</Text>
            <Text style={styles.price}>{item.address},{item.city},{item.state}</Text>
          </View>
        </View>
      </View>
    );
  }

  // For Main Data
  const [films, setFilms] = useState([]);
  // For Filtered Data
  const [filteredFilms, setFilteredFilms] = useState([]);
  // For Selected Data
  const [selectedValue, setSelectedValue] = useState({});

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{key: 'first', title: Strings.Profile}]);

  const FirstRoute = () => (
    // <Animatable.View duration={2000} animation="zoomIn">
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            // justifyContent: 'center',
            // alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            //   flex: 1,
            borderColor: '#1ac9ff',
            borderWidth: 0.5,
            width: width * 0.95,
            borderRadius: 10,
            height: height * 0.3,
            top: 20,
            backgroundColor: '#FFF',
          }}>
          <View
            style={{
              marginTop: 8,
              flex: 1,
            }}>
            <View style={styles.loginContainer}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#FFF',
                  letterSpacing: 1,
                  marginLeft: 5,
                }}>
                {Strings.Details}
              </Text>
            </View>
            <FlatList
              data={getProfileList}
              renderItem={({item}) => <Item item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            //   flex: 1,
          }}>
          <View
            style={{
              width: width * 0.95,
              height: height * 0.22,
              marginTop: 40,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
  });
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor={'transparent'} />
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

      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={0}
          source={require('../kishanimg/bgbg.png')}>
          <Animatable.View duration={1000} animation="zoomIn">
            <View style={styles.headerColumn}>
              <Image
                style={styles.userImage}
                source={require('../kishanimg/1.png')}
              />
              <Text style={styles.userNameText}>Vikram Diwakar</Text>

              <View style={styles.userAddressRow}>
                <View style={styles.userCityRow}>
                  <Text
                    style={{fontSize: 17, alignSelf: 'center', color: '#fff'}}>
                    Kishan
                  </Text>
                </View>
              </View>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>

      {/* <View style={{paddingVertical: 10}} /> */}
      <TabView
        renderTabBar={lprops => (
          <TabBar
            style={{
              backgroundColor: '#FFF',
              margin: 0,
              padding: 0,
            }}
            indicatorStyle={{backgroundColor: 'white'}}
            // style={{backgroundColor: 'pink'}}
            activeColor={'#1ac9ff'}
            inactiveColor={'#464646'}
            indicatorStyle={{backgroundColor: '#1ac9ff'}}
            // labelStyle={{fontSize: 8}}
            // tabStyle={{display: 'none'}}

            labelStyle={{
              padding: 0,
              margin: 0,
              fontSize: 14,
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
            {...lprops}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
}
