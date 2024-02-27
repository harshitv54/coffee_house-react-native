import {
  KeyboardAvoidingView,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {auth} from '../../Firebase';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Tab');
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registerd with: ', user.email);
      })
      .catch(error => alert(error.message));
  };

  const handleLogin = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with: ', user.email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.primaryBlackHex}}>
      <ImageBackground
        source={require('../assets/login_page/login_page_img.png')}
        resizeMode="cover"
        style={styles.LoginPageImage}
        imageStyle={{backgroundColor: COLORS.primaryBlackHex, opacity: 0.6}}>
        <FocusAwareStatusBar translucent={true} backgroundColor='transparent' />
        <View style={styles.headerTextContainer1}>
          <Text style={styles.headerText1}>Coffee.</Text>
        </View>
        <View style={styles.headerTextContainer2}>
          <Text style={styles.headerText2}>Taste The Bliss Of Life</Text>
        </View>
        <ScrollView>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
              <View style={styles.InputHeaderTextContainer}>
                <Text style={styles.InputHeaderText}>Login / Register</Text>
              </View>
              <TextInput
                placeholder="Email"
                placeholderTextColor={COLORS.primaryLightGreyHex}
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor={COLORS.primaryLightGreyHex}
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Register</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  headerTextContainer1: {
    height: '25%',
    justifyContent: 'center',
    marginLeft: 15,
  },
  headerTextContainer2: {
    height: '15%',
    justifyContent: 'center',
    marginLeft: 15,
    marginTop: 30,
  },
  headerText1: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_30 * 2,
    color: COLORS.primaryWhiteHex,
  },
  headerText2: {
    fontSize: FONTSIZE.size_30,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryWhiteHex,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: COLORS.primaryBlackHex,
  },
  inputContainer: {
    width: '75%',
    paddingTop: 40,
  },
  input: {
    backgroundColor: COLORS.primaryDarkGreyHex,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: BORDERRADIUS.radius_20,
    borderWidth: 1,
    marginTop: 15,
    color: COLORS.primaryWhiteHex,
  },
  buttonContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: COLORS.primaryOrangeHex,
    width: '100%',
    padding: 15,
    borderRadius: BORDERRADIUS.radius_20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 15,
  },
  buttonOutline: {
    backgroundColor: COLORS.primaryBlackHex,
    marginTop: 15,
    borderColor: COLORS.primaryOrangeHex,
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: COLORS.primaryOrangeHex,
    fontSize: 15,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  InputHeaderText: {
    color: COLORS.primaryWhiteHex,
  },
  InputHeaderTextContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  LoginPageImage: {
    flex: 1,
    height: '70%',
    width: '100%',
  },
});
