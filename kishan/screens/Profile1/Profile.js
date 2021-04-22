import React, {Component} from 'react';
import {Card, Icon} from 'react-native-elements';
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MCIcon from 'react-native-vector-icons/MaterialIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
// import {useSelector} from 'react-redux';
// import {BaseURL} from '../../FecthServerServices';
const data = [
  {
    ec: 'P91L-001',
    en: 'Vikas Singh',
    doj: '25-01-2021',
    division: 'Nehru, Colony',
    location: 'Gwalior, Madhya Pradesh',
    department: 'Mobility Development',
    designation: 'Designer',
    Shift: 'Day Shift',
  },
];
const dataTwo = [
  {
    cn: '458976234',
    ce: 'vikramdiwaker2@gmail.com',
    cc: 'Gwalior,Madhya Pradesh',
    ccc: 'India',
  },
];
function ItemTwo({item}) {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          // borderBottomColor: '#a5a5a5',
          // borderBottomWidth: 0.3,
          // borderStyle: 'dotted',
          marginTop: 20,
        }}>
        <View style={{width: width * 0.3}}>
          <Text style={styles.texStyle}>Current Contact No.</Text>
          <Text style={styles.texStyle}>Current Email Id</Text>
          <Text style={styles.texStyle}>Current City</Text>
          <Text style={styles.texStyle}>Current Country</Text>
        </View>
        <View style={{width: width * 0.1}}>
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
        </View>
        <View style={{width: width * 0.6}}>
          <Text style={styles.price}>{item.cn}</Text>
          <Text style={styles.price}>{item.ce}</Text>
          <Text style={styles.price}>{item.cc}</Text>
          <Text style={styles.price}>{item.ccc}</Text>
        </View>
      </View>
    </View>
  );
}
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
          marginTop: 20,
        }}>
        <View style={{width: width * 0.3}}>
          <Text style={styles.texStyle}>Employee Code</Text>
          <Text style={styles.texStyle}>Employee Name</Text>
          <Text style={styles.texStyle}>Date of Joining</Text>
          <Text style={styles.texStyle}>Division</Text>
          <Text style={styles.texStyle}>Location</Text>
          <Text style={styles.texStyle}>Department</Text>
          <Text style={styles.texStyle}>Designation</Text>
          <Text style={styles.texStyle}>Shift</Text>
        </View>
        <View style={{width: width * 0.1}}>
          <MIcon style={styles.icon} name="arrow-right" />

          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
          <MIcon style={styles.icon} name="arrow-right" />
        </View>
        <View style={{width: width * 0.6}}>
          <Text style={styles.price}>{item.ec}</Text>
          <Text style={styles.price}>{item.en}</Text>
          <Text style={styles.price}>{item.doj}</Text>
          <Text style={styles.price}>{item.division}</Text>
          <Text style={styles.price}>{item.location}</Text>
          <Text style={styles.price}>{item.department}</Text>
          <Text style={styles.price}>{item.designation}</Text>
          <Text style={styles.price}>{item.Shift}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardContainer: {
    // backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  texStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    // letterSpacing: 1,
    padding: 3,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1faba4',
    letterSpacing: 1,
    padding: 3,
  },
  icon: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    // letterSpacing: 1,
    margin: 3.5,
  },
  texStyleSmall: {
    fontSize: 11,
    // fontWeight: 'bold',
    color: '#999999',
  },
  loginContainer: {
    // width: width * 0.92,
    backgroundColor: '#1faba4',
    // justifyContent:"center",
    // alignSelf:'center',
    alignItems: 'center',
    color: '#FFF',
    padding: 5,
  },
  Heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    letterSpacing: 1,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
    zIndex: 9999,
    // height: 180,
  },
  headerContainer: {},
  headerColumn: {
    // height: 160,
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
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    // backgroundColor: '#FFF',
  },
  telContainer: {
    // backgroundColor: '#FFF',
    // flex: 1,
    // paddingTop: 30,
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
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 10,
    width: 170,
    marginTop: StatusBar.currentHeight,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
});

const stylesTel = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
  smsIcon: {
    color: '#1faba4',
    fontSize: 30,
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: '#1faba4',
    fontSize: 30,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const stylesSep = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  separatorOffset: {
    flex: 2,
    flexDirection: 'row',
  },
  separator: {
    borderColor: '#EDEDED',
    borderWidth: 0.8,
    flex: 8,
    flexDirection: 'row',
  },
});

const stylesEmail = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  emailColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  emailIcon: {
    color: '#1faba4',
    fontSize: 30,
  },
  emailNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  emailNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  emailRow: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  emailText: {
    fontSize: 16,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
});

function Contact(props) {
  // var userData = useSelector((state) => state.userData);
  // var user = Object.values(userData)[0];
  // console.log(user);
  const onPressPlace = () => {
    console.log('place');
  };

  const onPressTel = number => {
    Linking.openURL(`tel://${number}`).catch(err => console.log('Error:', err));
  };

  const onPressSms = () => {
    console.log('sms');
  };

  const onPressEmail = email => {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(err =>
      console.log('Error:', err),
    );
  };

  const renderHeader = () => {
    // const {
    //   avatar,
    //   avatarBackground,
    //   name,
    //   address: {city = '', country = ''},
    // } = props;

    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={0}
          source={{
            uri:
              'https://www.teahub.io/photos/full/291-2914547_wallpaper-turquesa.jpg',
          }}>
          <Animatable.View
            // delay={(index + 1) * 1000}
            duration={3000}
            animation="zoomIn">
            <View style={styles.headerColumn}>
              <Image
                style={styles.userImage}
                // source={{uri: `https://i.imgur.com/GfkNpVG.jpg`}}
                source={require('../../../dmsimg/1.png')}
              />
              <Text style={styles.userNameText}>Vikram Diwakar</Text>

              <View style={styles.userAddressRow}>
                {/* <View>
                  <MCIcon
                    name="place"
                    underlayColor="transparent"
                    iconStyle={styles.placeIcon}
                    onPress={onPressPlace}
                  />
                </View> */}
                <View style={styles.userCityRow}>
                  <Text style={styles.userCityText}>
                    vikramdiwaker2@gmail.com
                  </Text>
                  <Text
                    style={{fontSize: 17, alignSelf: 'center', color: '#FFF'}}>
                    Human Resource
                  </Text>
                </View>
              </View>
            </View>
          </Animatable.View>
        </ImageBackground>
      </View>
    );
  };

  const renderDesignation = () => {
    return (
      <View style={{marginTop: 0}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1faba4',
              padding: 10,
            }}>
            <FAIcon style={{color: '#FFF'}} size={20} name="user" />
            <Text style={{color: '#FFF', fontSize: 15, fontWeight: 'bold'}}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#666',
              padding: 10,
            }}>
            <FAIcon style={{color: '#FFF'}} size={20} name="users" />
            <Text style={{color: '#FFF', fontSize: 15, fontWeight: 'bold'}}>
              Team
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              borderColor: '#a5a5a5',
              borderWidth: 1,
              width: width * 0.95,
              borderRadius: 10,
              height: height * 0.3,
              marginTop: 10,
              flex: 1,
            }}>
            <View
              style={{
                // justifyContent: 'center',
                // alignContent: 'center',
                // alignItems: 'center',
                marginTop: 10,
                flex: 1,
              }}>
              <View style={styles.loginContainer}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#FFF',
                    letterSpacing: 1,
                  }}>
                  About
                </Text>
              </View>
              <FlatList
                data={data}
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: width,
            // justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: width * 0.95,
              borderColor: 'grey',
              borderWidth: 0.5,
              borderRadius: 10,
              overflow: 'hidden',
              top: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                overflow: 'hidden',
                margin: 3,
                flex: 1,
                width: width * 0.95,

                // backgroundColor: '#FFF',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('NHome')}>
                <View style={{backgroundColor: '#FFF', flexDirection: 'row'}}>
                  <Text style={{marginLeft: 10, marginTop: 8, color: '#000'}}>
                    Reporting To
                  </Text>
                  <View
                    style={{
                      width: width * 0.6,
                    }}>
                    <MCIcon
                      style={{
                        marginTop: 10,
                        color: '#000',
                        alignSelf: 'flex-end',
                      }}
                      name="arrow-right"
                      size={15}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{borderColor: '#666', borderWidth: 0.2}} />
            <View
              style={{
                backgroundColor: '#FFF',
                // borderColor: 'grey',
                // borderWidth: 0.5,
              }}>
              <ScrollView
                style={{paddingTop: 20, bottom: 10}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                  <Image
                    source={require('../../../dmsimg/1.png')}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      // textAlign: 'center',
                      marginTop: 5,
                      color: '#000',
                      fontSize: 13,
                    }}>
                    Vikram Diwakar
                  </Text>
                  <Text
                    style={{
                      // textAlign: 'center',
                      marginTop: 5,
                      color: '#666',
                      fontSize: 10,
                    }}>
                    (Chief Executive Officer)
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>

        {/* <TouchableOpacity style={styles.emailContainer}>
          <View style={[stylesEmail.container]}>
            <View style={stylesEmail.iconRow}>
              <Icon
                name="people-alt"
                underlayColor="transparent"
                iconStyle={stylesEmail.emailIcon}
                onPress={() => onPressEmail()}
              />
            </View>
            <View style={stylesEmail.emailRow}>
              <View style={stylesEmail.emailColumn}>
                <Text style={stylesEmail.emailText}>Vikram Diwakar</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity> */}
      </View>
    );
  };

  // const renderTel = () => {
  //   // <FlatList
  //   //   contentContainerStyle={styles.telContainer}
  //   //   data={props.tels}
  //   //   renderItem={(list) => {
  //   //     const { id, name, number } = list.item;

  //   return (
  //     <TouchableOpacity style={styles.telContainer}>
  //       {/* <View style={[stylesTel.container]}>
  //         <View style={stylesTel.iconRow}>
  //           <Icon
  //             name="call"
  //             underlayColor="transparent"
  //             iconStyle={stylesTel.telIcon}
  //             onPress={() => onPressTel(user.mobileno)}
  //           />
  //         </View>
  //         <View style={stylesTel.telRow}>
  //           <View style={stylesTel.telNumberColumn}>
  //             <Text style={stylesTel.telNumberText}>+91 8770206043</Text>
  //           </View>
  //           <View style={stylesTel.telNameColumn}>
  //             <Text style={stylesTel.telNameText}>{'Personal'}</Text>
  //           </View>
  //         </View>
  //         <View style={stylesTel.smsRow}>
  //           <Icon
  //             name="textsms"
  //             underlayColor="transparent"
  //             iconStyle={stylesTel.smsIcon}
  //             onPress={() => onPressSms()}
  //           />
  //         </View>
  //       </View> */}
  //     </TouchableOpacity>
  //   );
  //   //     }}
  //   //   />
  //   // );
  // };

  // const renderEmail = () => {
  //   return (
  //     <TouchableOpacity style={styles.emailContainer}>
  //       {/* <View style={[stylesEmail.container]}>
  //         <View style={stylesEmail.iconRow}>
  //           <Icon
  //             name="email"
  //             underlayColor="transparent"
  //             iconStyle={stylesEmail.emailIcon}
  //             onPress={() => onPressEmail()}
  //           />
  //         </View>
  //         <View style={stylesEmail.emailRow}>
  //           <View style={stylesEmail.emailColumn}>
  //             <Text style={stylesEmail.emailText}>
  //               vikramdiwaker2@gmail.com
  //             </Text>
  //           </View>
  //           <View style={stylesEmail.emailNameColumn}>
  //             <Text style={stylesEmail.emailNameText}>{'Work'}</Text>
  //           </View>
  //         </View>
  //       </View> */}
  //     </TouchableOpacity>
  //   );
  //   //   }}
  //   // />
  // };

  return (
    <ScrollView style={styles.scroll}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <View>
        <Card containerStyle={styles.cardContainer}>
          {renderHeader()}

          {/* {renderDesignation()} */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1faba4',
                padding: 10,
              }}>
              <FAIcon style={{color: '#FFF'}} size={20} name="user" />
              <Text style={{color: '#FFF', fontSize: 15, fontWeight: 'bold'}}>
                Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#666',
                padding: 10,
              }}>
              <FAIcon style={{color: '#FFF'}} size={20} name="users" />
              <Text style={{color: '#FFF', fontSize: 15, fontWeight: 'bold'}}>
                Team
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <View
              style={{
                borderColor: '#a5a5a5',
                borderWidth: 1,
                width: width * 0.95,
                borderRadius: 10,
                height: height * 0.3,
                marginTop: 10,
                flex: 1,
              }}>
              <View
                style={{
                  marginTop: 10,
                  flex: 1,
                }}>
                <View style={styles.loginContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#FFF',
                      letterSpacing: 1,
                    }}>
                    About
                  </Text>
                </View>
                <FlatList
                  data={data}
                  renderItem={({item}) => <Item item={item} />}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: width,
              // justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <View
              style={{
                width: width * 0.95,
                borderColor: 'grey',
                borderWidth: 0.5,
                borderRadius: 10,
                overflow: 'hidden',
                top: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  overflow: 'hidden',
                  margin: 3,
                  flex: 1,
                  width: width * 0.95,

                  // backgroundColor: '#FFF',
                }}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('NHome')}>
                  <View style={{backgroundColor: '#FFF'}}>
                    <Text
                      style={{
                        marginLeft: 10,
                        marginTop: 10,
                        bottom: 3,
                        color: '#000',
                      }}>
                      Reporting To
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{borderColor: '#666', borderWidth: 0.2}} />
              <View
                style={{
                  backgroundColor: '#FFF',
                  // borderColor: 'grey',
                  // borderWidth: 0.5,
                }}>
                <ScrollView
                  style={{paddingTop: 20, bottom: 10}}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <View style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                    <Image
                      source={require('../../../dmsimg/1.png')}
                      style={{
                        width: 40,
                        height: 40,
                      }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        // textAlign: 'center',
                        marginTop: 5,
                        color: '#000',
                        fontSize: 13,
                      }}>
                      Vikram Diwakar
                    </Text>
                    <Text
                      style={{
                        // textAlign: 'center',
                        marginTop: 5,
                        color: '#666',
                        fontSize: 10,
                      }}>
                      (Chief Executive Officer)
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <View
              style={{
                borderColor: '#a5a5a5',
                borderWidth: 1,
                width: width * 0.95,
                borderRadius: 10,
                height: height * 0.2,
                marginTop: 10,
                flex: 1,
              }}>
              <View
                style={{
                  marginTop: 10,
                  flex: 1,
                }}>
                <View style={styles.loginContainer}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#FFF',
                      letterSpacing: 1,
                    }}>
                    Contact Info
                  </Text>
                </View>
                <FlatList
                  data={dataTwo}
                  renderItem={({item}) => <ItemTwo item={item} />}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
          {/* <View style={stylesSep.container}>
            <View style={stylesSep.separatorOffset} />
            <View style={stylesSep.separator} />
          </View> */}
          {/* {renderTel()} */}
          {/* <View style={stylesSep.container}>
            <View style={stylesSep.separatorOffset} />
            <View style={stylesSep.separator} />
          </View> */}
          {/* {renderEmail()} */}
        </Card>
      </View>
    </ScrollView>
  );
}

export default Contact;
