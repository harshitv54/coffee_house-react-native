import React, {useState} from 'react';
import {
  ImageProps,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ImageBackgroundInfo from './ImageBackgroundInfo';
import LinearGradient from 'react-native-linear-gradient';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import DownIcon from 'react-native-vector-icons/Entypo';
import UpIcon from 'react-native-vector-icons/Entypo';

interface FavouritesItemCardProps {
  id: string;
  imagelink_portrait: ImageProps;
  name: string;
  special_ingredient: string;
  type: string;
  ingredients: string;
  average_rating: number;
  ratings_count: string;
  roasted: string;
  description: string;
  favourite: boolean;
  ToggleFavouriteItem: any;
}

const FavouritesItemCard: React.FC<FavouritesItemCardProps> = ({
  id,
  imagelink_portrait,
  name,
  special_ingredient,
  type,
  ingredients,
  average_rating,
  ratings_count,
  roasted,
  description,
  favourite,
  ToggleFavouriteItem,
}) => {
  const [fullDesc, setFullDesc] = useState(false);
  return (
    <View style={styles.CardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_portrait}
        type={type}
        id={id}
        favourite={favourite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredients}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavourite={ToggleFavouriteItem}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.ContainerLinearGradient}>
        {fullDesc ? (
          <TouchableWithoutFeedback
            onPress={() => {
              setFullDesc(prev => !prev);
            }}>
            <View style={styles.DescriptionContainer}>
              <Text style={styles.DescriptionTitle}>Description</Text>
              <Text style={styles.DescriptionText}>{description}</Text>
              <View style={styles.DescriptionIcon}>
                <UpIcon
                  name="chevron-up"
                  size={25}
                  color={COLORS.primaryOrangeHex}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback
            onPress={() => {
              setFullDesc(prev => !prev);
            }}>
            <View style={styles.DescriptionContainer}>
              <Text style={styles.DescriptionTitle}>Description</Text>
              <Text style={styles.DescriptionText} numberOfLines={3}>
                {description}
              </Text>
              <View style={styles.DescriptionIcon}>
                <DownIcon
                  name="chevron-down"
                  size={25}
                  color={COLORS.primaryOrangeHex}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
  },
  ContainerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_16,
  },
  DescriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex,
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
  },
  DescriptionContainer: {
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
    gap: SPACING.space_10,
  },
  DescriptionIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavouritesItemCard;
