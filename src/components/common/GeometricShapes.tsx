import {View, Text, Animated} from 'react-native';
import React from 'react';
import classNames from 'classnames';
import {IData, TGeometricShape} from '../../utils';

type Props = {
  type: TGeometricShape;
  image: any;
  translateY: Animated.AnimatedInterpolation<string | number>;
};
//absolute w-48 h-36 z-40 -left-20 top-20
const GeometricShapes = ({type, image, translateY}: Props) => {
  return (
    <View
      className={classNames('absolute z-50', {
        'w-48 h-48 -left-16 top-28': type === 'circle',
        'w-32 h-32 -right-6 bottom-10': type === 'square',
        'w-44 h-44 -right-6 -bottom-20': type === 'plus',
        'w-32 h-32 -left-5 top-10': type === 'triangle',
      })}>
      <Animated.Image
        source={image}
        className={`h-full w-full`}
        resizeMode={'contain'}
        style={{transform: [{translateY}]}}
      />
    </View>
  );
};

export default GeometricShapes;
