import React from 'react';
import {Platform} from 'react-native';
import {Text, VStack} from 'native-base';
import {Pressable, TextInput} from 'react-native';

export default function FieldInput({
  label,
  value,
  isPressable,
  containerPress,
  onChange,
}) {
  const wrapComponent = children => {
    if (isPressable) {
      return <Pressable onPress={containerPress}>{children}</Pressable>;
    }

    return children;
  };

  return wrapComponent(
    <VStack bg={'#1c2127'} mx={3} mt={3} py={2} px={4}>
      <Text color={'#606984'} fontSize={12} fontWeight={'bold'}>
        {label}
      </Text>
      <TextInput
        defaultValue={value}
        color={'white'}
        style={{marginTop: 6}}
        onChange={value => {
          onChange(value);
        }}
        style={{height: Platform.OS === 'android' ? 34 : 30}}
      />
    </VStack>,
  );
}
