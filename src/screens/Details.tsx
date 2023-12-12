import {View, Text, Image, Share} from 'react-native';
import React from 'react';
import AppBar from '../components/layouts/AppBar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackParamList} from '../../types';
import LinearGradient from 'react-native-linear-gradient';
import FilledButton from '../components/common/FilledButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../components/common/BackButton';
import Animated, {FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated';
import {transition} from './Home';
import {SharedElement} from 'react-navigation-shared-element';
type Props = {
  route: {params: AppStackParamList['Details']};
};
type DetailRouteProp = RouteProp<AppStackParamList, 'Details'>;
const Details = ({route}: Props) => {
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

        <View className={`w-full h-full relative`}>
          <SharedElement id={sharedId}>
            <Image
              source={image}
              className={`h-full w-full`}
              resizeMode="cover"
            />
          </SharedElement>
          <Animated.View
            entering={FadeIn.duration(300).delay(400)}
            className={`flex-1 absolute bottom-0 self-center w-full h-full`}>
            <LinearGradient
              className={`w-full h-full`}
              colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.1)']}
              start={{x: 0.5, y: 0.9}}
              end={{x: 0.5, y: 0.6}}
            />
          </Animated.View>
          {titleImage && (
            <View className={`absolute left-2 h-full w-36 -top-16 z-10`}>
              <SharedElement id="sharedTitle">
                <Image
                  source={require('../../assets/images/text_the_last_of_us.png')}
                  className={`w-36 h-[570px]`}
                  style={{
                    objectFit: 'contain',
                    alignSelf: 'center',
                  }}
                  resizeMode="contain"
                />
              </SharedElement>
            </View>
          )}

          <View className="p-5 absolute bottom-0 left-0 w-full">
            <View className="w-full h-24 mb-12 flex-row items-center justify-between self-center z-10">
              <Animated.View
                className=""
                // entering={FadeInDown.duration(400).delay(200)}
              >
                <SharedElement id={`${sharedId}_title`}>
                  <Text
                    className="text-white text-lg"
                    style={{fontFamily: 'OpenSans-SemiBold'}}>
                    {title}
                  </Text>
                </SharedElement>
                <SharedElement id={`${sharedId}_subTitle`}>
                  <Text className="text-base text-white">
                    Exclusive PlayStation
                  </Text>
                </SharedElement>
                <SharedElement id={`${sharedId}_ps4`}>
                  <Image
                    source={require('../../assets/images/ps4.png')}
                    className={`w-20 h-6 object-contain`}
                  />
                </SharedElement>
              </Animated.View>
              <Image
                source={require('../../assets/images/pegi_18.png')}
                className={`w-12 mr-2`}
                resizeMode="contain"
              />
            </View>
            <Animated.View entering={FadeInDown.duration(400).delay(300)}>
              <FilledButton title="Pre-Order now" twcnContainer="" />
            </Animated.View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;

Details.sharedElements = ({route}: Props) => {
  const {sharedId} = route.params;
  return [
    {
      id: sharedId,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: 'sharedTitle',
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `${sharedId}_title`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `${sharedId}_subTitle`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `${sharedId}_ps4`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};
