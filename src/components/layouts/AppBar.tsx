import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {colors, width} from '../../utils';
import {twMerge} from 'tailwind-merge';

type Props = {
  twcnContainer?: string;
  isDarkContainer?: boolean;
};

const AppBar = ({twcnContainer, isDarkContainer = false}: Props) => {
  return (
    <View
      className={twMerge(
        'flex-row items-center justify-between h-[64px] px-4',
        twcnContainer,
      )}>
      <MaterialCommunityIcons
        name="drag-horizontal-variant"
        size={36}
        color={!isDarkContainer ? colors['primary-blue'] : 'white'}
      />
      <MaterialCommunityIcons
        name="sony-playstation"
        size={44}
        color={!isDarkContainer ? colors['primary-blue'] : 'white'}
        style={{
          position: 'absolute',
          left: '50%',
          transform: [{translateX: -width * 0.025}],
        }}
      />
      <View className="flex-row gap-x-3">
        <MaterialCommunityIcons
          name="cart-outline"
          size={28}
          color={!isDarkContainer ? colors['primary-blue'] : 'white'}
        />
        <MaterialCommunityIcons
          name="magnify"
          size={28}
          color={!isDarkContainer ? colors['primary-blue'] : 'white'}
        />
      </View>
    </View>
  );
};

export default AppBar;
