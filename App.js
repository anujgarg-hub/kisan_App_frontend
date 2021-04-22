import React from 'react';

import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  Alert,
} from 'react-native';


import KMainNavigationStack from './kishan/MainNavigationStack';
//import KSplash from './kishan/Splash';
//import KLogin from './kishan/Login';
//import KProfileNew from './kishan/ProfileNew';
//import KCategory from './kishan/Category';
//import KSettings from './kishan/Settings';
//import KChangeLanguage from './kishan/ChangeLanguage';
//import KEmployee from './kishan/Employees';
//import KRegistration from './kishan/Registration';
//import KApply from './kishan/Apply';




import {LogBox} from 'react-native';
const styles = StyleSheet.create({
  mainContainer: {
    padding: 0,
    marginBottom: 0,
    backgroundColor: '#FFF',
    flex: 1,
  },
});
export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <View style={styles.mainContainer}>
      <KMainNavigationStack />
    </View>
  );
}
