import { View, Text, Image } from 'react-native'
import React from 'react'

type Props = {}

const Shadow = (props: Props) => {
  return (
    <Image
      source={require('../../../assets/images/shadow.png')}
      className={`w-full scale-[1.35] mt-20 self-center absolute -bottom-10`}
      resizeMode="contain"
    />
  );
}

export default Shadow