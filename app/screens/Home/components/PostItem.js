import React from 'react';
import {Dimensions} from 'react-native';
import {HStack, Image, Text, VStack} from 'native-base';
import RenderHTML from 'react-native-render-html';

const width = Dimensions.get('window').width;

export default function PostItem({post}) {
  const {
    account: {avatar, display_name, username},
    content,
  } = post;
  return (
    <VStack bg={'#1c2127'} my={2}>
      <HStack p={2}>
        <Image
          borderColor={'black'}
          borderWidth={1}
          source={{
            uri: avatar,
          }}
          h={50}
          w={50}
        />

        <VStack>
          <Text ml={2} color={'white'} fontWeight={'bold'} fontSize={16}>
            {display_name}
          </Text>
          <Text ml={2} color={'white'} fontWeight={'bold'} fontSize={14}>
            @{username}
          </Text>
        </VStack>
      </HStack>

      <Text px={2} pb={2} color={'white'}>
        {content.replace(/<[^>]+>/g, '')}
      </Text>
    </VStack>
  );
}
