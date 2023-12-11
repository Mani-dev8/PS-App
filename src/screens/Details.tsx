import {View, Text, Image} from 'react-native';
import React from 'react';
import AppBar from '../components/layouts/AppBar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackParamList} from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import FilledButton from '../components/common/FilledButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/common/BackButton';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {transition} from './Home';
import {SharedElement} from 'react-navigation-shared-element';
type Props = {};
type DetailRouteProp = RouteProp<AppStackParamList, 'Details'>;
const Details = (props: Props) => {
  const {
    params: {image, title, sharedId, titleImage},
  } = useRoute<DetailRouteProp>();

  return (
    <View className={`flex-1 bg-black`}>
      <AppBar twcnContainer="" isDarkContainer={true} />
      <BackButton twcnContainer="absolute top-24 z-30 left-5" />
      <View className="flex-1 h-full w-full  justify-between ">
        <View className="bg-primary-blue self-end rounded-full p-2 w-[68] aspect-square items-center justify-center absolute right-5 top-4 z-30">
          <Ionicons name="game-controller" size={40} color={'white'} />
          <Text className="uppercase text-[10px] text-white font-Medium -mt-1">
            games
          </Text>
        </View>

        <Animated.View className={`w-full h-full relative`}>
          <SharedElement id={sharedId}>
            <View className="h-full w-full flex items-center justify-center">
              <Image
                source={image}
                className={`h-full w-full`}
                resizeMode="cover"
              />
            </View>
          </SharedElement>
          {titleImage && (
            <Animated.View
              className={`absolute left-2 h-full w-36 -top-16 z-50`}
              sharedTransitionTag="sharedTitle">
              <Image
                source={require('../../assets/images/text_the_last_of_us.png')}
                className={`w-full h-full`}
                style={{
                  objectFit: 'contain',
                  alignSelf: 'center',
                }}
              />
            </Animated.View>
          )}
          <LinearGradient
            colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.1)']}
            start={{x: 0.5, y: 0.9}}
            end={{x: 0.5, y: 0.6}}
            className={`flex-1 absolute bottom-0 left-0 w-full h-full`}
          />
          <View className="p-5 absolute bottom-0 left-0 w-full">
            <View className="w-full h-24 mb-12 flex-row items-center justify-between self-center z-10">
              <Animated.View className="" entering={FadeInDown.duration(400)}>
                <Text
                  className="text-white text-lg"
                  style={{fontFamily: 'OpenSans-SemiBold'}}>
                  {title}
                </Text>
                <Text className="text-base text-white">
                  Exclusive PlayStation
                </Text>
                <Image
                  source={require('../../assets/images/ps4.png')}
                  className={`w-20 h-6 object-contain`}
                />
              </Animated.View>
              <Image
                source={require('../../assets/images/pegi_18.png')}
                className={`w-12 mr-2`}
                resizeMode="contain"
              />
            </View>
            <Animated.View entering={FadeInDown.duration(400).delay(100)}>
              <FilledButton title="Pre-Order now" twcnContainer="" />
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default Details;
