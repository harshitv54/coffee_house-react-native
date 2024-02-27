import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import PaymentMethod from '../components/PaymentMethod';
import SecondaryScreensHeaderBar from '../components/SecondaryScreensHeaderBar';

const PaymentList = [
  {
    name: 'Wallet',
    icon: 'icon',
    isIcon: true,
  },
  {
    name: 'Google Pay',
    icon: require('../assets/app_images/gpay.png'),
    isIcon: false,
  },
  {
    name: 'Apple Pay',
    icon: require('../assets/app_images/applepay.png'),
    isIcon: false,
  },
  {
    name: 'Amazon Pay',
    icon: require('../assets/app_images/amazonpay.png'),
    isIcon: false,
  },
];

const PaymentMethodsScreen = ({navigation, route}: any) => {
  const BackHandler = () => {
    navigation.pop();
  };
  const [paymentMode, setPaymentMode] = useState('Credit Card');
  return (
    <View style={styles.ScreenContainer}>
      <FocusAwareStatusBar backgroundColor={COLORS.primaryBlackHex} />
      <SecondaryScreensHeaderBar title='Payment Methods' BackHandler={BackHandler}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View style={styles.PaymentOptionsContainer}>
          {PaymentList.map((data: any) => (
            <TouchableOpacity key={data.name} onPress={() => (
              setPaymentMode(data.name)
            )}>
              <PaymentMethod
                paymentMode={paymentMode}
                name={data.name}
                icon={data.icon}
                isIcon={data.isIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  HeaderContainer: {
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
  EmptyView: {
    height: SPACING.space_36,
    width: SPACING.space_36,
  },
  PaymentOptionsContainer: {
    padding: SPACING.space_15,
    gap: SPACING.space_15,
  },
});

export default PaymentMethodsScreen;
