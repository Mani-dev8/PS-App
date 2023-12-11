import {View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../utils';

type Props = {};

const PlusButton = (props: Props) => {
  return (
    <View
      className={`w-9 h-9 rounded-full  absolute bottom-3 right-3 items-center justify-center z-10`}>
      <View className={`bg-white w-7 h-7 absolute rounded-full`} />
      <MaterialCommunityIcons
        name="plus-circle"
        size={36}
        color={colors['primary-blue']}
      />
    </View>
  );
};

export default PlusButton;
