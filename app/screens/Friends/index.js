import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchFriendsList} from './friends.actions';
import {useAppAccessor} from '../../hooks';
import {
  FlatList,
  HStack,
  Image,
  VStack,
  Text,
  Center,
  Spinner,
} from 'native-base';

export default function Friends() {
  const dispatch = useDispatch();
  const {getFriends} = useAppAccessor();

  const {friends, loadingFriends} = getFriends();

  useEffect(() => {
    dispatch(fetchFriendsList());
  }, []);

  if (loadingFriends) {
    return (
      <Center flex={1} bg={'#313543'}>
        <Spinner color={'white'} />
      </Center>
    );
  }

  return (
    <VStack flex={1} bg={'#313543'}>
      <Text color={'white'} fontWeight={'bold'} fontSize={20} m={2}>
        Friends
      </Text>

      <FlatList
        style={{flex: 1}}
        data={friends}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          const {username, display_name, avatar} = item;

          return (
            <HStack p={2} bg={'#1c2127'} my={1} mx={2}>
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
          );
        }}
      />
    </VStack>
  );
}
