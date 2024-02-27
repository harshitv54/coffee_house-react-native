import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import GradientBGIcon from './GradientBGIcon';
import ProfilePic from './ProfilePic';

interface SecondaryScreensHeaderBarProps {
  title?: string;
  BackHandler?: any;
}

const SecondaryScreensHeaderBar: React.FC<SecondaryScreensHeaderBarProps> = ({
  title,
  BackHandler,
}) => {
  return (
    <View style={styles.HeaderContainer}>
      <TouchableOpacity
        onPress={() => {
          BackHandler();
        }}>
        <GradientBGIcon
          name="left"
          color={COLORS.primaryLightGreyHex}
          size={FONTSIZE.size_16}
        />
      </TouchableOpacity>
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default SecondaryScreensHeaderBar;
