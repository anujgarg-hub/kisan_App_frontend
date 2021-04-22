// In App.js in a new project
import {Dimensions} from 'react-native';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import {Image as ImageR} from 'react-native';
import KSplash from './Splash';
import KLogin from './Login';
import KCategory from './Category';
import KSettings from './Settings';
import KChangeLanguage from './ChangeLanguage';
import KProfile from './ProfileNew';
import KEmployees from './Employees';
import KRegistration from './Registration';
import KApply from './Apply';
import KShowPolicy from './ShowPolicy';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import ActionButton from 'react-native-circular-action-menu';

import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Image,
  configureFonts,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from './config/Colors';
import Category from './Category';
const {width, height} = Dimensions.get('window');
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   style: {
      //     // backgroundColor: '#e71a23',
      //     backgroundColor: '#FFF',
      //     height: 65,
      //     borderTopLeftRadius: 20,
      //     borderTopRightRadius: 20,
      //     // borderRadius: 30,
      //     overflow: 'hidden',
      //   },
      //   showLabel: true,
      //   // animationEnabled: true,
      //   activeBackgroundColor: '#1faba4',
      //   // inactiveBackgroundColor: '#8d8f90',
      // }}
      tabBarOptions={{
        style: {
          backgroundColor: Colors.white,
          // borderRadius: 100,
          // width: width*0.8,
          // justifyContent: 'center',
          // alignSelf: 'center',
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
          // height: 55,
          overflow: 'hidden',
        },

        animationEnabled: true,
        inactiveTintColor: Colors.gray,
        activeTintColor: Colors.lightpurple,
        // showLabel: false,
        // activeBackgroundColor: '#1faba4',
        // activeTintColor: Colors.white,
      }}>
      <Tab.Screen
        name="Home"
        component={KCategory}
        options={{
          MyTransition,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MCIcon
              name="home"
              style={{color: '#1ac9ff'}}
              // color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Setting"
        component={KSettings}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, size}) => (
            <MIcon
              name="app-settings-alt"
              style={{color: '#1ac9ff'}}
              // color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView
        style={{backgroundColor: Colors.lightpurple}}
        {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <Avatar.Image
              // source={{
              //   uri:
              //     'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
              // }}
              source={require('../kishanimg/1.png')}
              size={60}
            />
            <Title style={styles.title}>Vikram Diwakar</Title>
            <Caption style={styles.caption}>vikramdiwaker2@gmail.com</Caption>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  202
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  159
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              // style={{backgroundColor: '#64ffda'}}
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="home"
                  // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              label="Home"
              labelStyle={{color: Colors.white}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="chart-line" // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              labelStyle={{color: Colors.white}}
              label="Reports"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <FAIcon
                  name="money"
                  // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              labelStyle={{color: Colors.white}}
              label="Team's Salary"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="cog"
                  // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              labelStyle={{color: Colors.white}}
              label="Settings"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="share"
                  // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              labelStyle={{color: Colors.white}}
              label="Share"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="star"
                  // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              labelStyle={{color: Colors.white}}
              label="Rate Us"
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="book"
                  // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              labelStyle={{color: Colors.white}}
              label="User Guide"
              onPress={() => {}}
            />
          </Drawer.Section>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialCommunityIcons
                  name="logout"
                  // color={color}
                  color={Colors.white}
                  size={size}
                />
              )}
              labelStyle={{color: Colors.white}}
              label="Logout"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          alignSelf: 'center',
          alignContent: 'flex-end',
          bottom: 10,
          position: 'absolute',
        }}>
        <ImageR
          source={require('../kishanimg/logo.png')}
          style={{
            alignSelf: 'center',
            width: 80,
            height: 25,
            // marginLeft: 20,
            marginTop: 0,
          }}
          //   resizeMode={'contain'}
        />
        <Text style={{color: Colors.white}}>Designed by Vikram Diwakar</Text>
      </View>
    </>
  );
}

const DrawerNav = createDrawerNavigator();

 function MyDrawer() {
  return (
    <DrawerNav.Navigator
      drawerContent={() => <DrawerContent />}
      initialRouteName="Home1">
      <DrawerNav.Screen name="Home1" component={MyTabs} />
    </DrawerNav.Navigator>
  );
}

const Stack = createStackNavigator();

function MainNavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="KSplash" component={KSplash} />
        <Stack.Screen name="KLogin" component={KLogin} />
        <Stack.Screen name="KProfile" component={KProfile} />
        <Stack.Screen name="KCategory" component={KCategory} />
        <Stack.Screen name="KSettings" component={KSettings} />
        <Stack.Screen name="KChangeLanguage" component={KChangeLanguage} />
        <Stack.Screen name="KEmployees" component={KEmployees} />
        <Stack.Screen name="KRegistration" component={KRegistration} />
        <Stack.Screen name="KApply" component={KApply} />
        <Stack.Screen name="KShowPolicy" component={KShowPolicy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: Colors.lightpurple,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
    color: Colors.white,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: Colors.white,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    color: Colors.white,
  },
  drawerSection: {
    marginTop: 15,
    color: Colors.white,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default MainNavigationStack;
