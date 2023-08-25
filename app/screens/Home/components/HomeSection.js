import React from 'react';
import {VStack, Text} from 'native-base';

export default function HomeSection({label, value, link}) {
  return (
    <VStack bg={'#1c2127'} mx={3} mt={0.5} py={2} px={4}>
      <Text color={'#606984'} fontSize={14} fontWeight={'bold'}>
        {label}
      </Text>
      <Text
        color={link ? '#8c8dff' : '#9baec8'}
        fontWeight={'bold'}
        fontSize={14}
        mt={0}>
        {value}
      </Text>
    </VStack>
  );
}
