import LottieView from 'lottie-react-native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import {auth} from '../../Firebase';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    navigateToAuthScreen();
  }, [navigation]);

  function navigateToAuthScreen() {
    setTimeout(function () {
      if (auth.currentUser != null) {
        navigation.push('Home');
      } else {
        navigation.push('Login');
      }
    }, 1500);
  }

  return (
    <View style={styles.SplashScreenContainer}>
      <FocusAwareStatusBar backgroundColor={COLORS.primaryBlackHex} />
      <LottieView
        style={styles.LottieStyle}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SplashScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.primaryBlackHex,
  },
  LottieStyle: {
    height: 300,
  },
  LottieText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryOrangeHex,
    textAlign: 'center',
  },
});

export default SplashScreen;
