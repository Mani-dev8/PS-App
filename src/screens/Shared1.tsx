import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import {SharedElement} from 'react-navigation-shared-element';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const Shared1 = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View className={`flex-1 items-center justify-center gap-y-4`}>
      <SharedElement id="share1">
        <Image
          source={require('../../assets/images/cyberpunk2077.png')}
          className={`w-40 h-40 absolute`}
          resizeMode="cover"
        />
      </SharedElement>
      <Button onPress={() => navigation.navigate('Details')} title="share2" />
    </View>
  );
};

export default Shared1;

Shared1.sharedElements = route => {
  return [
    {
      id: `share1`,
      animation: 'move',
      resize: 'cover',
    },
  ];
};
