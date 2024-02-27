import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import {auth} from '../../Firebase';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import RightIcon from 'react-native-vector-icons/Entypo';
import PaymentIcon from 'react-native-vector-icons/MaterialIcons';
import FavoriteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HistoryIcon from 'react-native-vector-icons/FontAwesome5';

const UserScreen = ({navigation}: any) => {
  const handleSignOut = async () => {
    await auth.signOut().then(() => {
      navigation.push('SpalshScreen');
    });
  };
  return (
    <View style={styles.UserScreenContainer}>
      <FocusAwareStatusBar backgroundColor={COLORS.primaryBlackHex} />
      {/* Upper View */}
      <ImageBackground
        source={require('../assets/coffee_assets/arabica_coffee_beans/arabica_coffee_beans_portrait.png')}
        resizeMode="cover"
        style={styles.UpperContainerImage}
        imageStyle={{backgroundColor: COLORS.primaryBlackHex, opacity: 0.5}}>
        <View style={styles.UpperContainer}>
          <View style={styles.ImageContainer}>
            <Image
              source={require('../assets/app_images/avatar.png')}
              style={styles.Image}
            />
          </View>
          <View style={styles.UserEmailTextContainer}>
            <Text style={styles.UserEmailText1}>Logged In With : </Text>
            <Text style={styles.UserEmailText2}>
              {auth?.currentUser?.email}{' '}
            </Text>
          </View>
        </View>
        {/* Lower View */}
        <View style={styles.LowerContainer}>
          <View style={styles.ScreensContainer}>
            <TouchableOpacity
              style={styles.ScreenRoute}
              onPress={() => {
                navigation.push('PaymentsMethod');
              }}>
              <View style={styles.ScreenIconContainer}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.IconLinearGradientContainer}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                  <PaymentIcon
                    name="payment"
                    size={35}
                    color={COLORS.primaryLightGreyHex}
                  />
                </LinearGradient>
                <Text style={styles.RouteText}>Payment Methods</Text>
              </View>
              <View>
                <RightIcon
                  name="chevron-right"
                  size={25}
                  color={COLORS.primaryOrangeHex}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ScreenRoute}
              onPress={() => {
                navigation.push('Favorite');
              }}>
              <View style={styles.ScreenIconContainer}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.IconLinearGradientContainer}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                  <FavoriteIcon
                    name="heart"
                    size={35}
                    color={COLORS.primaryLightGreyHex}
                  />
                </LinearGradient>
                <Text style={styles.RouteText}>Favorites</Text>
              </View>
              <View>
                <RightIcon
                  name="chevron-right"
                  size={25}
                  color={COLORS.primaryOrangeHex}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ScreenRoute}
              onPress={() => {
                navigation.push('History');
              }}>
              <View style={styles.ScreenIconContainer}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.IconLinearGradientContainer}
                  colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                  <HistoryIcon
                    name="history"
                    size={35}
                    color={COLORS.primaryLightGreyHex}
                  />
                </LinearGradient>
                <Text style={styles.RouteText}>Order History</Text>
              </View>
              <View>
                <RightIcon
                  name="chevron-right"
                  size={25}
                  color={COLORS.primaryOrangeHex}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.LogOutButtonContainer}>
            <TouchableOpacity
              onPress={handleSignOut}
              style={[styles.button, styles.buttonOutline]}>
              <Text style={styles.buttonOutlineText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  UserScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
  },
  UpperContainerImage: {
    flex: 1,
    height: '70%',
    width: '100%',
  },
  UpperContainer: {
    flex: 1,
    height: '40%',
    alignItems: 'center',
  },
  LowerContainer: {
    height: '60%',
    backgroundColor: COLORS.primaryBlackHex,
    borderTopLeftRadius: BORDERRADIUS.radius_25,
    borderTopRightRadius: BORDERRADIUS.radius_25,
    alignItems: 'center',
  },
  ImageContainer: {
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    width: Dimensions.get('window').width * 0.49,
    height: Dimensions.get('window').width * 0.49,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    marginTop: SPACING.space_30,
    borderColor: COLORS.primaryOrangeHex,
  },
  Image: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.45,
    borderRadius: 100,
  },
  UserEmailTextContainer: {
    marginTop: SPACING.space_20,
    alignItems: 'center',
  },
  UserEmailText1: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
  },
  UserEmailText2: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
  },
  ScreensContainer: {
    padding: SPACING.space_30,
    marginTop: SPACING.space_15,
    justifyContent: 'center',
    width: '100%',
  },
  ScreenRoute: {
    marginTop: SPACING.space_20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ScreenIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconLinearGradientContainer: {
    padding: SPACING.space_8,
    borderRadius: BORDERRADIUS.radius_15,
  },
  RouteText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    marginLeft: SPACING.space_20,
  },
  button: {
    backgroundColor: COLORS.primaryOrangeHex,
    width: '100%',
    padding: 15,
    borderRadius: BORDERRADIUS.radius_20,
    alignItems: 'center',
  },
  LogOutButtonContainer: {
    width: '40%',
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
});

export default UserScreen;
