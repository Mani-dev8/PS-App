import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {twMerge} from 'tailwind-merge';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../../types';
import {useNavigation} from '@react-navigation/native';

type Props = {twcnContainer?: string};

const BackButton = ({twcnContainer}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={handleBack}
      className={twMerge(
        `flex flex-row gap-x-1 rounded-full bg-[#00000040] py-2 pl-1 pr-4`,
        twcnContainer,
      )}>
      <SimpleLineIcons name="arrow-left" size={20} color={'white'} />
      <Text className="text-white uppercase font-Medium">Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
