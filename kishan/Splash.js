import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StatusBar,
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
const {width, height} = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animationValue: new Animated.Value(0),
    };
  }
  startAnimation = () => {
    Animated.timing(this.state.animationValue, {
      toValue: 30,
      duration: 2000,
      easing: Easing.bounce,
      easing: Easing.back(5),
      easing: Easing.elastic(7),
      // easing: Easing.bezier(0.17, 1.5, 0.63, 0.15),
      // easing : Easing.ease(20),
      useNativeDriver: true,
    }).start();
  };

  componentDidMount() {
    setTimeout(() => {
      this.startAnimation();
    }, 500);
    setTimeout(() => {
      // this.props.navigation.navigate('NViewPager');
      this.props.navigation.navigate('KChangeLanguage');
    }, 1000);
  }
  render() {
    const animatedStyle = {
      transform: [{translateY: this.state.animationValue}],
    };
    return (
      <View style={styles.MainContainer}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />

        <LinearGradient
          // colors={['#004990', '#1faba4']}
          colors={['#fff', '#fff']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={[styles.LinearGradientStyle]}>
          {/* <TouchableWithoutFeedback onPress={this.startAnimation}> */}
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.animatedBox, animatedStyle]}>
              {/* <Animated.View> */}
              {/* <Image
                source={require('../dmsimg/valvolinetranslogowhite.png')}
                style={{
                  width: 100,
                  height: 55,
                  alignSelf: 'center',
                }}
                resizeMode={'contain'}
              /> */}
              <Image
                source={require('../kishanimg/splash.png')}
                style={{
                  width: 300,
                  height: 300,

                  // justifyContent: 'flex-end',
                  alignSelf: 'center',
                }}
                // resizeMode={'contain'}
              />
              {/* <LinearTextGradient
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  alignSelf: 'center',
                }}
                locations={[0, 1]}
                // colors={['#ee3625', '#3eb1f0']}
                colors={['#FFF', '#3eb1f0']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Text>Valvoline</Text>
              </LinearTextGradient> */}
            </Animated.View>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </View>
      // <View style={styles.container}>
      //   <StatusBar barStyle="light-content" backgroundColor="#fff" />
      //   <Image source={require('../unoloimg/logoplus91.png')} />
      //   <TouchableWithoutFeedback onPress={this.startAnimation}>
      //     <Animated.View
      //       style={[styles.animatedBox, animatedStyle]}></Animated.View>
      //   </TouchableWithoutFeedback>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  animatedBox: {
    // backgroundColor: '#0091EA',
  },
  LinearGradientStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
});
