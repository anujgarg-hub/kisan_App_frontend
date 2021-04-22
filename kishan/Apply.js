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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
// import {TextInput, List ,Button,  Menu, Divider,Provider} from 'react-native-paper';

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
// import DateTimePicker from '@react-native-community/datetimepicker';
import {Row, Rows, Table} from 'react-native-table-component';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Carousel from 'react-native-banner-carousel';
// import ActionButton from 'react-native-circular-action-menu';
import ActionButton from 'react-native-action-button';
// import {SocialIcon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
//const BannerWidth = Dimensions.get('window').width;
//const BannerHeight = 260;
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { postData } from './FetchService';


const Horidata = [
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
  },
  {
    hname: 'Kisan Farmer Policy',
    pic: require('../kishanimg/policy1.png'),
    kd: 'Policy',
    //   dwa: 'DWA:0',
  },
];

// function HorizontalList({item}) {
//   return (
//     <View style={styles.item2}>
//       <ImageBackground
//         resizeMode={'cover'}
//         source={require('../kishanimg/bgbg1.png')}
//         style={{
//           flex: 1,
//           width: width * 0.97,
//           // height: 80,
//           padding: 0,
//           justifyContent: 'space-between',
//           overflow: 'hidden',
//         }}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <View
//             style={{
//               // justifyContent: 'space-between',
//               // alignItems: 'center',
//               // alignSelf: 'center',

//               marginTop: 0,
//               padding: 10,
//             }}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 // alignSelf: 'center',
//               }}>
//               <View>
//                 <Image
//                   source={item.pic}
//                   style={{
//                     width: 60,
//                     height: 60,
//                     // marginLeft: 20,
//                     // marginTop: 10,
//                   }}
//                   resizeMode={'contain'}
//                 />
//               </View>

//               <View
//                 style={{
//                   width: width * 0.5,
//                   justifyContent: 'center',
//                   // alignItems: 'center',
//                   alignSelf: 'center',
//                 }}>
//                 <View style={{top: 8}}>
//                   <Text
//                     style={{
//                       color: '#1ac9ff',
//                       fontSize: 15,
//                       fontWeight: 'bold',
//                     }}>
//                     {item.hname}
//                   </Text>
//                   <Text style={{color: '#000', fontSize: 12}}>{item.kd}</Text>
//                   <Text style={{color: '#000', fontSize: 12}}>{item.dwa}</Text>
//                 </View>
//               </View>

//               <View
//                 style={{
//                   // width: width * 0.2,
//                   // justifyContent: 'center',
//                   // alignItems: 'center',
//                   alignSelf: 'center',
//                 }}>
//                 {/* <TouchableOpacity onPress={() => refRBSheet.current.open()}> */}
//                 <TouchableOpacity>
//                   <View
//                     style={{
//                       backgroundColor: '#FFF',
//                       width: 90,
//                       height: 32,
//                       borderRadius: 30,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       alignSelf: 'center',
//                       // marginLeft: 30,
//                       borderWidth: 1,
//                       borderColor: '#1ac9ff',
//                     }}>
//                     {/* <MCIcon
//                       name="arrow-right"
//                       size={22}
//                       style={{color: '#1ac9ff'}}
//                     /> */}
//                     <Text style={{color: '#1ac9ff', fontWeight: 'bold'}}>
//                       Claim
//                     </Text>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </ScrollView>
//       </ImageBackground>
//     </View>
//   );
// }

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
    color: 'white',
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

export default function Apply(props) {

  const [show, setShow] = useState(false);
  const [getStatus, setStatus] = useState('')
    const [applyDate, setApplyDate] = useState()
    const [propGetPolicy, setpropPolicy] = useState('')

    var policyiddd = props.route.params.policyId ;
    var kisanIdddddd = props.route.params.kisanId ;
  
  const showDatePicker = () => {
    // try {
      console.log('called');
      setShow(true);
      // showMode('date');
    // } catch (error) {
      // console.warn(error);
    // }
  };

  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    // setDate(currentDate);
    //change Dateformat in our format
    var dd = new Date(currentDate);
    var d =
      dd.getDate() < 10
        ? '0' + new Date(currentDate).getDate()
        : new Date(currentDate).getDate();
    var m =
      parseInt(dd.getMonth() + 1) < 10
        ? '0' + parseInt(new Date(currentDate).getMonth() + 1)
        : new Date(currentDate).getMonth() + 1;
    var y = dd.getFullYear();

    let tempdate = y + '-' + m + '-' + d;
    setApplyDate(tempdate);
    // setMode('time');
    // setShow1(true);
  };


  

  useEffect(()=>{
      console.log('coming props on Apply page',props.route.params.policyId , props.route.params.kisanId)
      setpropPolicy(props.route.params.policyId)
  },[])

  // const fillPolicyId=()=>{
  //   return <Picker.Item label={props.route.params.policyId} value={props.route.params.policyId}  />
  // }
  
  // const handlePolicyId=(text)=>{
  //   setPoliciId(text)
  // }

  const handleStatus=(text)=>{
    setStatus(text)
  }


  const handleApply=async()=>{
    let body={
      kisanid : kisanIdddddd ,
      policyid : policyiddd ,
      dateapply : applyDate ,
      status : getStatus ,

    }
    var result = await postData('farmerpolicies/addFarmerPolicy',body)
    console.log('resultOnAplyPage',result)
    if(result)
    {
      alert('Policy Applied..')
      props.navigation.navigate('KShowPolicy',{kisanId:kisanIdddddd})
    }
  }


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
                  Kishan - APP
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
            Apply Policy
          </Text>
        </View>
        <View style={{marginVertical: 5}} />
        <View
          style={{
            // flexDirection: 'row',
            justifyContent: 'center',
            alignSelf: 'center',
            // alignItems: 'center',
            // bottom: 10,
          }}>
          <View>
            <View style={{width: width * 0.8,}}>
              {/* <View style={styles.minisearch1}>
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
                  placeholder="Search"></TextInput>
              </View> */}
            </View>
          </View>

          <Text style={{marginTop:20,marginBottom:-20}}>Policy Id</Text>

          <View  
          
          style={{
            borderStartWidth: 1,
            borderEndWidth: 1,
            borderTopWidth: 1,
            boderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 5,
            overflow: 'hidden',
            borderColor: '#7a7a7a',
            marginTop:20,
            backgroundColor:'#fff'            
            
          }}
          theme={{
            colors: {
              placeholder: 'white',
              text: '#7a7a7a',
              primary: '#e2231a',
              underlineColor: 'transparent',
              background: '#FFF',
              
            },
          }}
          >
            {/* <Text>Anuj</Text> */}
           
                {/* <TextInput
                  // mode="outlined"
                  // label="Kishan ID"
                  // keyboardType="name-phone-pad"
                  // theme={{
                  //   colors: {
                  //     placeholder: '#666',
                  //     text: '#666',
                  //     primary: '#666',
                  //     borderWidth: '0.5',
                  //     //   underlineColor: 'red',
                  //     background: '#FFF',
                  //   },
                  // }}
                  //   underlineColor={'#000'}
                  // onChangeText={(text)=>setKisanId(text)}
                  placeholder="Anuj"
                  
                  ></TextInput> */}

                 {/* <Picker
                    onValueChange={(text)=>handlePolicyId(text)}

                    >
                    <Picker.Item label="Policy Id" value="" color="#7a7a7a"  />
                    <Picker.Item label={`${props.route.params.policyId}`} value={`${props.route.params.policyId}`}  />
                    
                  </Picker>
               */}
                <TextInput  placeholder="Policy Id" editable={false} color="black">{policyiddd}</TextInput>
          </View>
          <Text style={{marginTop:20,marginBottom:-20}}>Kisan Id</Text>
          <View 
           style={{
            borderStartWidth: 1,
            borderEndWidth: 1,
            borderTopWidth: 1,
            boderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 5,
            overflow: 'hidden',
            borderColor: '#7a7a7a',
            marginTop:20,
            backgroundColor:'#fff' ,    
            
          }}
          theme={{
            colors: {
              placeholder: 'white',
              text: '#7a7a7a',
              primary: '#e2231a',
              underlineColor: 'transparent',
              background: '#FFF',
              
            },
          }}
          >
          
            <TextInput  placeholder="Kisan Id" editable={false} color="black">{kisanIdddddd}</TextInput>
          </View>

          <Text style={{marginTop:20,marginBottom:-20}} >Date for Apply</Text>
          <View 
           style={{
            borderStartWidth: 1,
            borderEndWidth: 1,
            borderTopWidth: 1,
            boderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderRadius: 5,
            overflow: 'hidden',
            borderColor: '#7a7a7a',
            marginTop:20,
            backgroundColor:'#fff' ,    
            
          }}
          theme={{
            colors: {
              placeholder: 'white',
              text: '#7a7a7a',
              primary: '#e2231a',
              underlineColor: 'transparent',
              background: '#FFF',
              
            },
          }}
          >
          <TouchableOpacity onPress={showDatePicker}>
           <TextInput placeholder="Choose Date" editable={false} value={applyDate} color="black"></TextInput>
           </TouchableOpacity>
           { show && (
          <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date()}
                      minimumDate={new Date()}
                      // mode={mode}
                      is24Hour={false}
                      display="default"
                      onChange={onChangeDateTime}
                      
                    />)}
           
          </View>


          <Text style={{marginTop:20,marginBottom:-20}}>Status </Text>

            <View 
             style={{
              borderStartWidth: 1,
              borderEndWidth: 1,
              borderTopWidth: 1,
              boderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: 1,
              borderRadius: 5,
              overflow: 'hidden',
              borderColor: '#7a7a7a',
              marginTop:20,
              backgroundColor:'#fff'            
              
            }}
            theme={{
              colors: {
                placeholder: 'white',
                text: '#7a7a7a',
                primary: '#e2231a',
                underlineColor: 'transparent',
                background: '#FFF',
                
              },
            }}
            >
          <Picker
                    onValueChange={(text)=>handleStatus(text)}

                    >
                    <Picker.Item label="Status"  color="#7a7a7a"  />
                    <Picker.Item label="Pending" value="Pending"  />
                     {/* {fillStates()}  */}
                  </Picker>
              </View>    

              <View
              style={{
                padding: 2,
                //   backgroundColor: '#5959ff',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 100,
                elevation: 5,
                marginTop:10
              }}>
              <View
                style={
                  {
                    // padding: 5,
                  }
                }>
                <TouchableOpacity
                  // onPress={() => props.navigation.navigate('KCategory')}
                 onPress={handleApply}
                 >
                  <LinearGradient
                    // colors={['#e71a23', '#b5005d']}
                    colors={['#1faba4', '#1ac9ff']}
                    start={{x: 1, y: 1}}
                    end={{x: 0, y: 0}}
                    style={{
                      ...styles.LinearGradientStyle,
                    }}>
                    <Text
                      style={{
                        ...styles.buttonText,
                        fontSize: 20,
                        // fontFamily: FontFamily.regular,
                      }}>
                      Apply{' '}
                    </Text>
                    {/* <Animatable.Text
                      animation="fadeIn"
                      // easing="ease-out"
                      iterationCount="infinite"
                      style={{textAlign: 'center'}}> */}
                    <FAIcon
                      name="arrow-right"
                      size={16}
                      style={{marginLeft: 5}}
                      color="#FFF"
                    />
                    {/* </Animatable.Text> */}
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          
        </View>
      </View>

     
    </View>
  );
  
}
