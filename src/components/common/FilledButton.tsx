import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {twMerge} from 'tailwind-merge';

type Props = {
  title: string;
  twcnContainer?: string;
  twcnTitle?: string;
};

const FilledButton = ({title, twcnContainer, twcnTitle}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={twMerge(
        'relative w-full rounded-lg bg-primary-blue z-30 py-2.5',
        twcnContainer,
      )}>
      <Text
        className={twMerge(
          `text-base font-SemiBold text-center text-white uppercase`,
          twcnTitle,
        )}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FilledButton;
