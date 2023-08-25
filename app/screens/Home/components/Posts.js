import React from 'react';
import {VStack, Text} from 'native-base';
import PostItem from './PostItem';

export default function Posts({posts}) {
  return (
    <VStack mx={4}>
      <Text
        color={'white'}
        fontFamily={'body'}
        fontWeight={'900'}
        fontSize={16}>
        Posts
      </Text>

      {(posts ?? []).map(post => {
        return <PostItem {...{post}} />;
      })}
    </VStack>
  );
}
