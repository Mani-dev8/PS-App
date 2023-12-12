import {View, Text, Animated as RNAnimated} from 'react-native';
import React from 'react';
import classNames from 'classnames';
import {IData, TGeometricShape} from '../../utils';
import Animated from 'react-native-reanimated';
type Props = {
  type: TGeometricShape;
  image: any;
  translateY: RNAnimated.AnimatedInterpolation<string | number>;
  translateX: RNAnimated.AnimatedInterpolation<string | number>;
  translateXMinus: RNAnimated.AnimatedInterpolation<string | number>;
};
const GeometricShapes = ({
  type,
  image,
  translateY,
  translateX,
  translateXMinus,
}: Props) => {
  return (
    <RNAnimated.View
      className={classNames('absolute z-50', {
        'w-48 h-48 -left-16 top-28': type === 'circle',
        'w-32 h-32 -right-6 bottom-10': type === 'square',
        'w-44 h-44 -right-6 -bottom-20': type === 'plus',
        'w-32 h-32 -left-5 top-10': type === 'triangle',
      })}
      style={
        type === 'triangle'
          ? {
              transform: [
                {
                  translateX: translateX,
                },
              ],
            }
          : type === 'circle'
          ? {
              transform: [
                {
                  translateX: translateX,
                },
              ],
            }
          : {
              transform: [
                {
                  translateX: translateXMinus,
                },
              ],
            }
      }>
      <RNAnimated.Image
        source={image}
        className={`h-full w-full`}
        resizeMode={'contain'}
        style={{transform: [{translateY}]}}
      />
    </RNAnimated.View>
  );
};

export default GeometricShapes;
