import React, {useState,useEffect} from 'react';
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
  Linking
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
import { getData, ServerURL } from './FetchService';
// import {SocialIcon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
//const BannerWidth = Dimensions.get('window').width;
//const BannerHeight = 260;
import {selectedLanguage} from './helper/ChangeLng';
import Strings from './constant/LocalizedStrings';


const Horidata = [
  {
    hname: 'Kisan Farmer Policy',
    pic: require('../kishanimg/policy1.png'),
    kd: 'Policy',
    //   dwa: 'DWA:0',
    screen: 'KApply',
  },
  {
    hname: 'Kisan Farmer Policy',
    pic: require('../kishanimg/policy1.png'),
    kd: 'Policy',
    //   dwa: 'DWA:0',
    screen: 'KApply',
  },
  {
    hname: 'Kisan Farmer Policy',
    pic: require('../kishanimg/policy1.png'),
    kd: 'Policy',
    //   dwa: 'DWA:0',
  },
  {
    hname: 'Kisan Farmer Policy',
    pic: require('../kishanimg/policy1.png'),
    kd: 'Policy',
    //   dwa: 'DWA:0',
    screen: 'KApply',
  },
];

function HorizontalList({item, props}) {


  // const handleWebLink=async(item)=>{
  //     await Linking.openURL(item.policiesweblink)
  //     .catch((err)=>console.log('an error occured',err));
      
  // }

  // var URl = item.policiesweblink

  return (
    <View style={styles.item2}>
      <ImageBackground
        resizeMode={'cover'}
        source={require('../kishanimg/bgbg1.png')}
        style={{
          flex: 1,
          width: width * 0.97,
          // height: 80,
          padding: 0,
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              // justifyContent: 'space-between',
              // alignItems: 'center',
              // alignSelf: 'center',

              marginTop: 0,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignSelf: 'center',
              }}>
              <View>
                <Image
                  // source={item.policiesicon}
                  source={
                    {
                      uri : ServerURL + '/images/'+item.policiesicon
                    }
                  }
                  style={{
                    width: 60,
                    height: 60,
                    // marginLeft: 20,
                    // marginTop: 10,
                  }}
                  resizeMode={'contain'}
                />
              </View>

              <View
                style={{
                  width: width * 0.4,
                  justifyContent: 'center',
                  // alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <View >
                  <View style={{flexDirection: 'row'}}>
                <Text
                    style={{
                      color: 'black',
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}>
                  {Strings.Policy} {Strings.Name} :

                  </Text>
                  <Text
                    style={{
                      width: width * 0.4,
                      color: '#1ac9ff',
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginLeft:28
                    }}>
                    {item.policiesname},

                  </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                  {Strings.Organization} :

                  </Text>
               
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginLeft: 17,
                      fontWeight: 'bold',
                    }}>
                     {item.policiesbyorg}

                  </Text>
                  </View>
                  
                  <View style={{flexDirection: 'row'}}>
                <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      // marginLeft: 17,
                      fontWeight: 'bold',
                    }}>
                  {Strings.Description} :

                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                      marginLeft: 23,
                      fontWeight: 'bold',
                    }}>
                   
                    {item.policiesdescription}

                  </Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                
                      fontWeight: 'bold',
                    }}>
                  {Strings.WebLink} :

                  </Text>

                  <TouchableOpacity
                    onPress={()=>Linking.openURL(item.policiesweblink)}                   
                    >
                    <Text
                   style={{
                    color: 'blue',
                    fontSize: 12,
                     marginLeft: 35,
                    fontWeight: 'bold',
                  }}
                  >
                   
                    {item.policiesweblink}
                    </Text>
                  </TouchableOpacity>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,
                
                      fontWeight: 'bold',
                    }}>
                  {Strings.VideoLink} :

                  </Text>
                  <TouchableOpacity
                    onPress={()=>Linking.openURL(item.policiesvideolink)}                   
                    >
                    <Text
                   style={{
                    color: 'orange',
                    fontSize: 12,
                    fontWeight: 'bold',
                    marginLeft:27
                  }}
                  >
                   
                    {item.policiesvideolink}
                    </Text>
                  </TouchableOpacity>
                  </View>
                
                  <Text style={{color: '#000', fontSize: 12}}>{item.kd}</Text>
                  <Text style={{color: '#000', fontSize: 12}}>{item.dwa}</Text>
                </View>
              </View>

              <View
                style={{
                  // width: width * 0.2, 
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  alignSelf:'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('KApply',{
                    policyId:item.policies_id ,
                    kisanId: props.route.params.kisanIdd,
                  })}
                  // onPress={alert}
                >
                  <View
                    style={{
                      backgroundColor: '#FFF',
                      width: 90,
                      height: 32,
                      borderRadius: 30,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      // marginLeft: 30,
                      borderWidth: 1,
                      borderColor: '#1ac9ff',
                    }}>
                    {/* <MCIcon
                      name="arrow-right"
                      size={22}
                      style={{color: '#1ac9ff'}}
                    /> */}
                    <Text style={{color: '#1ac9ff', fontWeight: 'bold'}}>
                      {Strings.Apply}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

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
  item2: {
    width: width * 0.97,
    // padding: 10,
    borderRadius: 10,
    // borderColor: '#222f3e',
    borderColor: '#1ac9ff',
    elevation: 5,
    marginBottom: 5,
    borderWidth: 1,
    // height: 80,
    alignSelf: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  item: {
    flex: 1,
    overflow: 'hidden',
    // marginBottom: 0,
    borderRadius: 10,
    margin: 8,
    width: width * 0.8,
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
    elevation: 5,
    shadowColor: '#000',
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
    borderColor: '#1ac9ff',
    borderWidth: 0.5,
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

export default function Employee(props) {

  const [policyList, setPolicyList] = useState([])
  const [getSelectedLanguage, setSelectedLanguage] = useState('');


  const fetchPolicies=async()=>{
    var result = await getData('policies/displayPolicies')
    console.log('fetchPolicies',result)
    setPolicyList(result)
  }

  useEffect(() => {
    fetchPolicies();
    selectedLanguage()
      .then(res => {
        console.log(res);
        setSelectedLanguage(res);
        console.log(Strings.Add);
        console.log(Strings.All);
      })
      .catch(() => {});
      
  },[])

  return (
    <View style={{flex: 1}}>
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
                  Kisan - APP
                </Text>
                {/* <Text style={{color: '#FFF'}}>Development, Mumbai</Text> */}
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View style={[styles.container]}>
        <View style={{marginVertical: 5}} />
        <View style={{width: width}}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              color: '#464646',
              fontWeight: 'bold',
            }}>
            {Strings.All} {Strings.Government} {Strings.Farmers} {Strings.Policy}
          </Text>
        </View>
        <View style={{marginVertical: 5}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            // alignItems: 'center',
            // bottom: 10,
          }}>
          <View>
            <View style={{width: width * 0.8}}>
              <View style={styles.minisearch1}>
                <Icon style={{...styles.emailIcon1}} name="search" size={15} />
                <TextInput
                  onChangeText={text => {
                    setsearchtext(text);
                    handleSearch(text);
                  }}
                  style={{
                    ...styles.minitextStyleText1,
                    fontFamily: FontFamily.regular,
                    fontSize: 12,
                  }}
                  placeholderTextColor="#535353"
                  placeholder={Strings.Search}></TextInput>
              </View>
            </View>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View duration={500} animation="slideInLeft">
          <View>
            <View style={{paddingTop: 10}}>
              {/* <ScrollView showsVerticalScrollIndicator={false}> */}
              <FlatList
                data={policyList}
                renderItem={({item}) => (
                  <HorizontalList item={item} props={props} />
                )}
                keyExtractor={item => item.id}
              />
              {/* </ScrollView> */}
            </View>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}
