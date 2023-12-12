import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated as RNAnimated,
  Easing,
} from 'react-native';
import React, {memo, useEffect, useRef} from 'react';
import {IData, colors, data} from '../../utils';
import PlusButton from './PlusButton';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../types';
import {transition} from '../../screens/Home';
import {SharedElement} from 'react-navigation-shared-element';
import Shadow from './Shadow';
import Animated, {
  FadeIn,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';

type Props = {
  index: number;
  translateY: RNAnimated.AnimatedInterpolation<string | number>;
  separationHeight: RNAnimated.AnimatedInterpolation<string | number>;
  item: IData;
  onPress: () => void;
};

const Card = ({index, translateY, onPress, item, separationHeight}: Props) => {
  const opacity = useSharedValue(1);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const scaleValue = useRef(new RNAnimated.Value(1)).current;

  const scaleInterpolation = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const handlePress = () => {
    onPress();
    RNAnimated.timing(scaleValue, {
      toValue: 0.86,
      duration: 100,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      RNAnimated.timing(scaleValue, {
        toValue: 1,
        duration: 200,
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
    }, 10);
  };

  useEffect(() => {
    opacity.value = 0;
  }, []);

  const animatedStyle = {
    opacity: interpolate(opacity.value, [0, 1], [0, 1]),
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={handlePress}
      className={`w-full max-w-[300px] mx-auto`}>
      <RNAnimated.View style={{height: separationHeight}} />
      <RNAnimated.View
        className="w-full max-w-[300px] h-fit aspect-[4/5] relative "
        style={{
          transform: [{scale: scaleInterpolation}],
        }}>
        <Shadow />
        <View
          className={
            'w-full aspect-[4/5] self-center  rounded-2xl  overflow-hidden'
          }>
          <SharedElement id={`sharedTag${index}`}>
            <RNAnimated.Image
              source={item.image}
              className={`w-full h-[450px] rounded-2xl`}
              style={{
                transform: [{translateY}],
                objectFit: 'fill',
                alignSelf: 'center',
              }}
              resizeMode="cover"
            />
          </SharedElement>

          <Animated.View
            className={`absolute w-full aspect-square self-center  bottom-0 z-50`}
            style={animatedStyle}>
            <LinearGradient
              colors={['rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)']}
              start={{x: 0.5, y: 0.74}}
              end={{x: 0.5, y: 0.3}}
              className="w-full h-full"
            />
          </Animated.View>
        </View>
        {item.titleImage && (
          <SharedElement
            className={`absolute left-4 w-28 h-full -top-8`}
            id="sharedTitle">
            <Image
              source={require('../../../assets/images/text_the_last_of_us.png')}
              className={`w-full h-[370px]`}
              style={{
                objectFit: 'contain',
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
          </SharedElement>
        )}
        <View className="absolute mx-auto bottom-4 pl-7 z-20">
          <SharedElement id={`sharedTag${index}_title`}>
            <Text
              className="text-white text-lg"
              style={{fontFamily: 'OpenSans-SemiBold'}}>
              {item.title}
            </Text>
          </SharedElement>
          <SharedElement id={`sharedTag${index}_subTitle`}>
            <Text className="text-base text-white">Exclusive PlayStation</Text>
          </SharedElement>
          <SharedElement id={`sharedTag${index}_ps4`}>
            <Image
              source={require('../../../assets/images/ps4.png')}
              className={`w-20 h-6 object-contain`}
            />
          </SharedElement>
        </View>
        <PlusButton />
      </RNAnimated.View>
    </TouchableOpacity>
  );
};

export default Card;

Card.sharedElements = ({index}: Props) => {
  return [
    {
      id: `sharedTag${index}`,
      animation: 'move',
    },
    {
      id: 'sharedTitle',
      animation: 'move',
    },
  ];
};
