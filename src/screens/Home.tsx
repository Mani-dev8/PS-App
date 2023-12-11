import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Animated as RNAnimated,
} from 'react-native';
import React, {useRef} from 'react';
import AppBar from '../components/layouts/AppBar';
import Card from '../components/common/Card';
import {IData, data} from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import PlusButton from '../components/common/PlusButton';
import Animated, {
  SharedTransition,
  withSpring,
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolation,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../types';
import GeometricShapes from '../components/common/GeometricShapes';

type Props = {};

// SHARED-ELEMENT TRANSITION CUSTOM STYLE
export const transition = SharedTransition.custom(values => {
  'worklet';
  return {
    originX: withTiming(values.targetOriginX, {
      easing: Easing.ease,
    }),
    originY: withTiming(values.targetOriginY, {
      easing: Easing.ease,
    }),
  };
});

const Home = (props: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const scrollY = useRef(new RNAnimated.Value(10)).current;
  const geometricScrollY = useRef(new RNAnimated.Value(20)).current;
  const scrollHandler = RNAnimated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {
      useNativeDriver: true,
    },
  );

  const AnimatedFlatList = RNAnimated.createAnimatedComponent(FlatList<IData>);

  return (
    <View className={`flex-1`}>
      <AppBar />
      <AnimatedFlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Text className="font-SemiBold uppercase text-primary-blue mx-auto ">
              great games
            </Text>
            <Text className="text-xl mx-auto font-Normal mb-5">
              Coming Soon
            </Text>
          </>
        }
        data={data}
        keyExtractor={(_, index) => index.toString()}
        onScroll={scrollHandler}
        renderItem={({item, index}) => {
          const translateY = scrollY.interpolate({
            inputRange: [-100, index * 400],
            outputRange: [-index * 70, -20],
            extrapolate: 'extend',
          });
          const translateYCircle = scrollY.interpolate({
            inputRange: [-100, index * 400],
            outputRange: [index * 20, -40],
            extrapolate: 'extend',
          });
          return (
            <View className={`relative`}>
              {item.shapes &&
                item.shapes.map((itm, index) => {
                  return (
                    <GeometricShapes
                      key={index.toString()}
                      type={itm.name}
                      image={itm.image}
                      translateY={translateYCircle}
                    />
                  );
                })}
              <Card index={index} translateY={translateY} item={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;
