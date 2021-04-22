/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, ActivityIndicator, StatusBar} from 'react-native';
// import Login from './Login';
// import Sign from './Sign';
// import Login from './Login';
// import Homescreen from './Home';
// import Age from './Age';
// import Maps from './Maps';
// import Location from './location';
import {RootNavigator} from './NavigationDrw/RootNavigator';
import Login from './Login';
export default function ProductStack() {
  const Stack = createStackNavigator();
  // const Auth = createStackNavigator({Home: Homescreen});
  // const Authscreen = () => {
  //   return (
  //     <View>
  //       <ActivityIndicator />
  //       <StatusBar barStyle="default" />
  //     </View>
  //   );
  // };
  return (
    <Stack.Navigator headerMode="none" initialRouteName="RootNavigator">
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Age" component={Age} /> */}

      {/* <Stack.Screen name="Sign" component={Sign} /> */}
      {/* <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="Location" component={Location} /> */}

      <Stack.Screen
        name="RootNavigator"
        component={RootNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
