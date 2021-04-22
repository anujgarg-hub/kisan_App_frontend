// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useState,useEffect} from 'react';
import {statecity} from './StateCity';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {TextInput, List ,Button,  Menu, Divider,Provider} from 'react-native-paper';
import {Input} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
const {width, height} = Dimensions.get('window');
import {FontFamily} from './config/FontFamily';
import * as Animatable from 'react-native-animatable';
import ActionButton from 'react-native-circular-action-menu';
// Import Image Picker
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ScrollView} from 'react-native';
import { postData , postDataAndImage } from './FetchService';
import {Picker} from '@react-native-picker/picker';
// import { Button, Menu, Divider, Provider } from 'react-native-paper';


const App = props => {
  const [filePath, setFilePath] = useState({});

const [kisanId, setKisanId] = useState('')
const [name, setName] = useState('')
const [fatherName, setFatherName] = useState('')
const [mobile, setMobile] = useState('')
const [emailId, setEmailId] = useState('')
const [address, setAddress] = useState('')
const [state, setState] = useState('')
const [city, setCity] = useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
// const [picture, setPicture] = useState({icon :'' , fileIcon:''})
const [visible, setVisible] = React.useState(false);
const [visible2, setVisible2] = React.useState(false);

const [getStateList, setStateList] = useState([]) ;
const [getCityList, setCityList] = useState([]) ;


  const openMenu = () => {alert('opening');setVisible(true)};

  const closeMenu = () => {alert('close');setVisible(false)};;


  const openMenu2 = () => {alert('opening');setVisible2(true)};

  const closeMenu2 = () => {alert('close');setVisible2(false)};;


  const fetchState=()=>{
    var S_list=[] ;
    statecity.map((item,key)=>{
        S_list[key] = item.state
    })
      setStateList(S_list);
     console.log("S_list",S_list);
     
  }


  const fillStates=()=>{
    return(
      getStateList.map((item)=>{
        return(
          <Picker.Item label={item} value={item}  />
        )
      })
    )
  }


  const fetchCity=(stateid)=>{
    var C_list=[];
    statecity.map((item,key)=>{
      if(item.state == stateid)
      {
        item.districts.map((data ,key)=>
        {
          C_list[key] = data;
        })
      }
    })
    setCityList(C_list) ;  
    console.log('C_list',C_list)
  }

  const fillCities=()=>{
    return(
    getCityList.map(item=>{
      return  <Picker.Item label={item} value={item}  />
    }))
  }

  const handleState=(text)=>{
    setState(text)
    fetchCity(text)
  }

  useEffect(()=>{
    fetchState()
  },[])

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        setFilePath(response);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  const handleRegister=async()=>{
    // alert('in handle register')

    // const formData = new FormData();

    const body={
      name:name,
      fname:fatherName,
      mobileno:mobile,
      emailid:emailId,
      state:state,
      city:city,
      password:password,
      address:address
    } 
    // formData.append('name',name)
    // formData.append('fname',fatherName)
    // formData.append('mobileno',mobile)
    // formData.append('emailid',emailId)
    // formData.append('state',state)
    // formData.append('city',city)
    // formData.append('password',password)
    // formData.append('picture',filePath)
    // formData.append('picture',{uri:filePath})
    // formData.append('address',address)
    // console.log('filepath',filePath);
    // alert('before config')
    // var config={headers:{'content-type':'multipart/form-data'}}
    // alert('before api call')
    // const result = await postDataAndImage('kissan/addKisan',formData,config)
    const result = await postData('kissan/addKisan',body)

    // alert(JSON.stringify(result))
    console.log('resultAddKisan',result)

    const kisanId = result.insertId
    console.log('kissanIdRegistration',kisanId)
    if(result)
    {
      alert('Registered Successfully !!!')
      props.navigation.navigate('KCategory',{kisanIddddd : kisanId})
    }
    // if(!result)
    // {
    //   alert('NoT')
    // }
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        resizeMode={'contain'}
        source={require('../kishanimg/bgbg1.png')}
        style={styles.backgroundFlat}>
        <View
          style={{
            width: width,
            height: 30,
            // backgroundColor: '#FFF',
          }}></View>
        <View
          style={{
            //   marginTop: StatusBar.currentHeight + 0,
            marginBottom: height * 0.02,
          }}>
          <Image
            source={require('../kishanimg/logo.png')}
            style={{
              width: 82,
              height: 70,
              marginLeft: 20,
              marginTop: 10,
            }}
            //   resizeMode={'contain'}
          />
        </View>
        <View
          style={{
            width: width * 0.19,
            // marginTop: StatusBar.currentHeight + 50,
            marginLeft: 25,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#464646',
              fontFamily: FontFamily.bold1,
              borderBottomWidth: 0.3,
              borderColor: '#000',
              fontWeight: 'bold',
            }}>
            Registration
          </Text>
        </View>
        <View
          style={{
            width: width * 0.9,
            textAlign: 'center',
            alignSelf: 'center',
            marginTop: 20,
            // marginBottom: 10,
          }}>
          <Text
            style={{
              color: '#1ac9ff',
              fontFamily: FontFamily.regular,
              fontSize: 11,
            }}>
            Please enter your details.
          </Text>
        </View>

        <View>
          <View
            style={{
              width: width,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              {/* <View style={{width: width * 0.44, right: 2}}>
                <TextInput
                  mode="outlined"
                  label="Kishan ID"
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
                  onChangeText={(text)=>setKisanId(text)}
                />
              </View> */}
              <View style={{width: width * 0.9}}>
                <TextInput
                  mode="outlined"
                  label="Name"
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
                  onChangeText={(text)=>setName(text)}

                />
              </View>
            </View>
            <View style={{width: width * 0.9}}>
              <TextInput
                mode="outlined"
                label="Fathers name"
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
                onChangeText={(text)=>setFatherName(text)}

              />
            </View>
            <View style={{width: width * 0.9}}>
              <TextInput
                mode="outlined"
                label="Mobile no."
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
            </View>
            <View style={{width: width * 0.9}}>
              <TextInput
                mode="outlined"
                label="Email ID"
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
                onChangeText={(text)=>setEmailId(text)}

              />
            </View>
            <View style={{width: width * 0.9}}>
              <TextInput
                mode="outlined"
                label="Address"
                multiline={true}
                numberOfLines={3}
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
                onChangeText={(text)=>setAddress(text)}

              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={{width: width * 0.44, right: 2}}>
                 {/* <List.Section */}
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
                  {/* <List.Accordion
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: '#D3D3D3',
                    }}
                    titleStyle={{color: 'grey'}}
                    title="State"
                    onChangeText={(text)=>setState(text)}
                    value={state}
                    >
                    <List.Item title="Madhya Pradesh" value="Madhya Pradesh" />
                    <List.Item title="Uttar Pradesh" value="Uttar Pradesh" />
                  </List.Accordion> */}
                {/* </List.Section> */}
                   {/* <Text>
  <Provider>
    
        <Menu
          visible={visible2}
          
          onDismiss={closeMenu2}
          // onPress={closeMenu}
          anchor={<Button onPress={openMenu2}>State</Button>}>
          <Menu.Item  title="Madhya Pradesh" />
          <Menu.Item  title="Uttar Pradesh" />
         
        </Menu>
        </Provider>
                 </Text> */}

<Picker
                    onValueChange={(text)=>handleState(text)}

                    >
                    <Picker.Item label="Select State" value="" color="#7a7a7a"  />
                    {/* <Picker.Item label="MP" value="MP"  /> */}
                     {fillStates()} 
                  </Picker>
                  </View>
              </View>
              <View style={{width: width * 0.45, left: 2}}>
                 <View
                    style={{
                    // top: -10,
                    borderStartWidth: 1,
                    borderEndWidth: 1,
                    borderTopWidth: 1,
                    boderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderRadius: 5,
                    overflow: 'hidden',
                    borderColor: '#7a7a7a',
                  }} 
                  
                  theme={{
                    colors: {
                      placeholder: 'white',
                      text: '#7a7a7a',
                      primary: '#e2231a',
                      underlineColor: 'transparent',
                      background: '#FFF',
                    },
                  }} >
                  
                  {/* <List.Accordion
                    style={{
                      borderBottomWidth: 0.5,
                      borderColor: '#D3D3D3',
                    }}
                    titleStyle={{color: 'grey'}}
                    title="City"
                    onChangeText={(text)=>setCity(text)}
                  
                    >
                    <List.Item title="Madhya Pradesh" />
                    <List.Item title="Uttar Pradesh" />
                  </List.Accordion> */}
                  {/* <Text>
  <Provider>
    
        <Menu
          visible={visible}
          
          // onDismiss={closeMenu}
          // onPress={closeMenu}
          anchor={<Button onPress={openMenu}>City</Button>}>
          <Menu.Item  title="Madhya Pradesh" />
          <Menu.Item  title="Uttar Pradesh" />
        </Menu>
        </Provider>
                 </Text> */}
                 <Picker
                    // selectedValue={getBrand}
                    // selectedValue="MP" 
                    // style={{marginTop: 10, underlineColor: 'transparent'}}
                    // style={{color: getBrand == '' ? 'grey' : '#000'}}
                    // onValueChange={(itemValue) => handelBrand(itemValue)}
                    onValueChange={(text)=>setCity(text)}

                    >
                    <Picker.Item label="Select City" value="" color="#7a7a7a" />
                    {/* <Picker.Item label="Gwl" value="Gwl"  /> */}
                    {fillCities()}
                  </Picker>
                  </View>
              </View>
              
            </View>
            <View style={{flexDirection: 'row', top: -5}}>
              <View style={{width: width * 0.44, right: 2}}>
                <TextInput
                  mode="outlined"
                  label="Password"
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
              <View style={{width: width * 0.45, left: 2}}>
                <TextInput
                  mode="outlined"
                  secureTextEntry={true}
                  label="Confirm Password"
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
                  onChangeText={(text)=>setConfirmPassword(text)}

                />
              </View>
            </View>
            <View style={{width: width * 0.9}}>
              <View style={{top: 0}}>
                <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{filePath.uri}</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={styles.buttonStyle}
                  onPress={() => captureImage('photo')}>
                  <Text style={styles.textStyle}>
                    <FAIcon name="image" size={20} /> Upload Picture
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text style={styles.textStyle}>Launch Camera for Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('video')}>
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity> */}
              </View>
            </View>

            <View style={{width: width * 0.9, top: 0}}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('KLogin')}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // padding: 10,
                    // marginTop: 10,
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
                      Already Registered User? Login
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
                    // padding: 20,
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                      borderRadius: 100,
                      elevation: 5,
                    }}>
                    <View
                      style={
                        {
                          // padding: 5,
                        }
                      }>
                      <TouchableOpacity
                        onPress={handleRegister}
                        // onPress={() => props.navigation.navigate('KCategory')}
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
                            Register
                          </Text>

                          <FAIcon
                            name="arrow-right"
                            size={16}
                            style={{marginLeft: 5}}
                            color="#FFF"
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </Animatable.View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            // alignItems: 'flex-end',
            padding: 25,
            marginTop: StatusBar.currentHeight + 15,
          }}></View>
      </ImageBackground>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    // paddingVertical: 20,
  },
  textStyle: {
    padding: 8,
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#1ac9ff',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#1ac9ff',
    // marginVertical: 10,
    // width: 250,
  },
  imageStyle: {
    width: 200,
    // height: 200,
    // margin: 5,
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
  backgroundFlat: {
    // flex: 1,
    justifyContent: 'center',
    // width: width * 0.92,
    // height: height * 1.1,
    borderRadius: 10,
  },
});
