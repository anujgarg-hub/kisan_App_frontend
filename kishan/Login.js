import React, {Component, useEffect,useRef, useState} from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
const {width, height} = Dimensions.get('window');
import {FontFamily} from './config/FontFamily';
import * as Animatable from 'react-native-animatable';
import ActionButton from 'react-native-circular-action-menu';
// import COIcon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import { postData } from './FetchService';
import {selectedLanguage} from './helper/ChangeLng';
import Strings from './constant/LocalizedStrings';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyleText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#fbc531',
    width: 200,
    padding: 0,
  },

  textStyle: {
    fontSize: 18,
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 2,
    borderRadius: 70,
  },
  boxs: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 0,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 70,
    width: 300,
  },
  textl: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  textbottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
    borderColor: '#FFF',
    marginBottom: 40,
  },

  head: {
    fontSize: 45,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  backgroundFlat: {
    // flex: 1,
    // justifyContent: 'center',
    // width: width * 0.92,
    // height: height * 1.1,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    // backgroundColor: '#f6f6fb',
    backgroundColor: '#fafafc',
  },
  LinearGradientStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 40,
    borderRadius: 30,
    elevation: 7,
    shadowColor: '#FFF',
    shadowRadius: 10,
    shadowOpacity: 1.6,
    // marginBottom: 10,
    // padding: 4,
    // fontFamily: FontFamily.regular,
  },

  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    // margin: 10,
    color: '#fff',
    backgroundColor: 'transparent',
  },
  vikram: {
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 5,
    shadowColor: '#000',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  backgroundImage: {
    // flex: 1,
    // justifyContent: 'center',
    width: width,
    height: height * 1.1,
    opacity: 0.9,
  },
  loginContainer: {
    padding: 10,
    width: width * 0.2,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: '#ecf0f1',
  },
});

export default function Login(props) {

  const [getSelectedLanguage, setSelectedLanguage] = useState('');

  const [getkisanId, setKisanId] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')

  var kisanId =0;
  
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


  const handleSubmit = () => {
    // props.navigation.navigate("Homeretailer")

    props.navigation.navigate('NLogin');
  };

  const handleLogin=async()=>{

    let body ={mobile , password}
    var result  = await postData('kissan/login',body)
    console.log('resultLogin',result)

    // const kisanId = result.reslt[0].kissanid
    // console.log('kissanId',kisanId)
    // setKisanId(kisanId)


    if(result.status)
    {
       props.navigation.navigate('KCategory',{kisanIddddd : result.reslt[0].kissanid} )
    }
    else
    {
      alert(`${Strings.Pleaseentercorrectmobilepassword}`)
    }
  }
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  // const fadeAnim = useRef(new Animated.Value(0)).current;

  // const fadeIn = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 1000,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 1000,
  //   }).start();
  // };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <ImageBackground
        resizeMode={'contain'}
        source={require('../kishanimg/bgbg1.png')}
        style={styles.backgroundFlat}> */}
      <View
        style={{
          width: width,
          height: 80,
          // backgroundColor: '#FFF',
        }}>
        {/* <ImageBackground
              source={require('../dmsimg/bg.png')}
              style={[{width: width, height: 85}]}
              resizeMode={'center'}></ImageBackground> */}
      </View>
      <View
        style={{
          //   marginTop: StatusBar.currentHeight + 0,
          marginBottom: height * 0.01,
        }}>
        <Image
          source={require('../kishanimg/logo.png')}
          style={{
            width: 82,
            height: 70,
            marginLeft: 20,
            marginTop: 0,
          }}
          //   resizeMode={'contain'}
        />
      </View>
      <Animatable.View duration={500} animation="zoomIn">
        <View
          style={{
            width: width * 0.11,
            marginTop: StatusBar.currentHeight + 50,
            marginLeft: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#666',
              fontFamily: FontFamily.bold1,
              borderBottomWidth: 0.5,
              borderColor: '#000',
            }}>
           {Strings.LOGIN}
          </Text>
        </View>
        <View
          style={{
            width: width * 0.9,
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: '#1ac9ff',
              fontFamily: FontFamily.regular,
              fontSize: 11,
            }}>
           {Strings.Pleaseenteryourvalidmobilenumberandpassword}
          </Text>
        </View>
        <View>
          <View
            style={{
              width: width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: width * 0.9}}>
              <TextInput
                mode="outlined"
                label={Strings.KMobile}
                keyboardType="phone-pad"
                theme={{
                  colors: {
                    placeholder: '#666',
                    text: '#666',
                    primary: '#666',
                    borderWidth: '0.5',
                    //   underlineColor: 'red',
                    background: '#FFF',
                  },
                }}
                //   underlineColor={'#000'}
                onChangeText={(text)=>setMobile(text)}
              />
              {/* <Input
              variant="outlined"
              placeholderTextColor="#000"
              placeholder="Email"
              style={{borderColor: '#000', color: '#000'}}
              // keyboardType="name-phone-pad"
              underlineColor={'#000'}
              leftIcon={<FAIcon name="user" size={16} color="#000" />}
            /> */}
            </View>

            <View style={{width: width * 0.9}}>
              <TextInput
                mode="outlined"
                label={Strings.Password}
                secureTextEntry={true}
                keyboardType="name-phone-pad"
                theme={{
                  colors: {
                    placeholder: '#666',
                    text: '#666',
                    primary: '#666',
                    borderWidth: '0.5',
                    //   underlineColor: 'red',
                    background: '#FFF',
                  },
                }}
                //   underlineColor={'#000'}
                onChangeText={(text)=>setPassword(text)}

              />
            </View>
          </View>
        </View>
      </Animatable.View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('KRegistration')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginTop: 10,
          }}>
          <View
            style={{
              width: width * 0.9,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#464646',
                fontFamily: FontFamily.regular,
                fontSize: 14,
                fontWeight: 'bold',
              }}>
             {Strings.DonthaveanaccountRegister}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Animatable.View
        duration={500}
        style={{zIndex: 9}}
        animation="slideInLeft">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            marginTop: 20,
          }}>
          <View
            // elevation={8}
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                padding: 2,
                //   backgroundColor: '#5959ff',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 100,
                elevation: 8,
              }}>
              <View
                style={
                  {
                    // padding: 5,
                  }
                }>
                <TouchableOpacity
                  // onPress={() => props.navigation.navigate('KCategory')}
                 onPress={handleLogin}
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
                        fontSize: 17,
                        fontFamily: FontFamily.regular,
                      }}>
                      {Strings.LOGIN}{' '}
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
      </Animatable.View>
      <View
        style={{
          marginTop: StatusBar.currentHeight + 0,
          //   marginBottom: height * 0.02,
        }}>
        <Image
          source={require('../kishanimg/kishan.png')}
          style={{
            width: 200,
            height: 200,
            alignSelf: 'center',
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          // alignItems: 'flex-end',
          padding: 25,
          marginTop: StatusBar.currentHeight + 15,
        }}>
        {/* <View>
          <Text
            style={{
              marginLeft: 20,
              marginTop: 0,
              color: '#000',
              fontFamily: FontFamily.regular,
              borderBottomWidth: 0.5,
              borderColor: '#000',
            }}>
            Sign up
          </Text>
        </View> */}
        {/* 
        <View
          style={{
            justifyContent: 'space-between',
            // alignItems: 'flex-end',
          }}>
          <View style={{padding: 0}}>
            <TouchableOpacity onPress={() => handleLogOut()}>
              <Text
                style={{
                  ...styles.buttonText,
                  fontFamily: FontFamily.regular,
                  borderBottomWidth: 0.5,
                  borderColor: '#000',
                  color: '#000',
                  // width: 45,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* <ActionButton
            buttonColor="#1faba4"
            position="center"
            icon={<MCIcon name="plus" size={25} style={{color: '#FFF'}} />}>
            <ActionButton.Item
              buttonColor="#d82c2c"
              title="New Task"
              onPress={() => console.log('notes tapped!')}>
              <FAIcon name="user" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#3498db"
              title="Notifications"
              onPress={() => {}}>
              <FAIcon name="bell" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor="#1abc9c"
              title="All Tasks"
              onPress={() => {}}>
              <FAIcon name="tasks" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton> */}

        {/* <LottieView source={require('../lottie/43885-laptop-working.json')} /> */}
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}
