import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated as RNAnimated,
  Easing,
} from 'react-native';
import React, {memo, useRef} from 'react';
import {IData, colors, data} from '../../utils';
import PlusButton from './PlusButton';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../types';
import {transition} from '../../screens/Home';
import {SharedElement} from 'react-navigation-shared-element';

type Props = {
  index: number;
  translateY: RNAnimated.AnimatedInterpolation<string | number>;
  item: IData;
};

const Card = ({index, translateY, item}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const scaleValue = useRef(new RNAnimated.Value(1)).current;

  const scaleInterpolation = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handlePress = () => {
    RNAnimated.timing(scaleValue, {
      toValue: 0.76,
      duration: 200,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start(() => {
      RNAnimated.timing(scaleValue, {
        toValue: 1,
        duration: 600,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: true,
      }).start();
    });
    setTimeout(() => {
      navigation.navigate('Details', {
        image: item.image,
        title: item.title,
        sharedId: `sharedTag${index}`,
        titleImage: item.titleImage,
      });
    }, 200);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handlePress}
      className={`w-full max-w-[300px] mx-auto  mb-12`}>
      <RNAnimated.View
        className="w-full max-w-[300px] h-fit aspect-[4/5] overflow-hidden rounded-2xl relative "
        style={{transform: [{scale: scaleInterpolation}]}}>
        <SharedElement id={`sharedTag${index}`}>
          <View className={'w-full aspect-[4/5] self-center'}>
            <RNAnimated.Image
              source={item.image}
              className={`w-full h-[130%]`}
              style={{
                transform: [{translateY}],
                objectFit: 'fill',
                alignSelf: 'center',
              }}
            />
          </View>
        </SharedElement>
        {item.titleImage && (
          <SharedElement
            className={`absolute left-4 w-28 h-full -top-8`}
            id="sharedTitle">
            <RNAnimated.Image
              source={require('../../../assets/images/text_the_last_of_us.png')}
              className={`w-full h-full`}
              style={{
                objectFit: 'contain',
                alignSelf: 'center',
              }}
            />
          </SharedElement>
        )}
        <View className="absolute mx-auto bottom-4 pl-7 z-20">
          <Text
            className="text-white text-lg"
            style={{fontFamily: 'OpenSans-SemiBold'}}>
            {item.title}
          </Text>
          <Text className="text-base text-white">Exclusive PlayStation</Text>
          <Image
            source={require('../../../assets/images/ps4.png')}
            className={`w-20 h-6 object-contain`}
          />
        </View>
        <PlusButton />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
          start={{x: 0.5, y: 0.74}}
          end={{x: 0.5, y: 0.3}}
          className="absolute w-full aspect-square bottom-0 "
        />
      </RNAnimated.View>
    </TouchableOpacity>
  );
};

export default memo(Card);
