import {View, Text, Image} from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';

type Props = {};

const Shared2 = (props: Props) => {
  return (
    <View className={`flex-1`}>
      <SharedElement id="share1">
        <Image
          source={require('../../assets/images/cyberpunk2077.png')}
          className="w-full h-full"
          resizeMode="cover"
        />
      </SharedElement>
    </View>
  );
};

export default Shared2;

Shared2.sharedElements = route => {
  return [
    {
      id: `share1`,
      animation: 'move',
      resize: 'cover',
    },
  ];
};
