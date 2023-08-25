import {Divider, Text, VStack} from 'native-base';
import React from 'react';
import {colors} from '../constants';

export default ({containerProps, labelProps, valueProps, label, value}) => {
  return (
    <VStack mt={2} {...{containerProps}}>
      <Text
        color={colors['fieldContainer.label']}
        fontSize={10}
        fontFamily={'body'}
        fontWeight={'500'}
        {...{labelProps}}>
        {label}
      </Text>
      <Text
        color={colors['fieldContainer.value']}
        fontSize={14}
        mt={1}
        fontFamily={'body'}
        fontWeight={'500'}
        {...{valueProps}}>
        {value}
      </Text>
      <Divider mt={2} color={colors['fieldContainer.divider']} />
    </VStack>
  );
};
