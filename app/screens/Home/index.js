import React, {useEffect} from 'react';
import {
  Center,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from 'native-base';
import {useDispatch} from 'react-redux';
import {fetchProfile} from './home.actions';
import {useAppAccessor} from '../../hooks';
import HomeSection from './components/HomeSection';
import moment from 'moment';
import Posts from './components/Posts';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {screens} from '../../constants';

function Home() {
  const dispatch = useDispatch();
  const {getHome} = useAppAccessor();
  const navigation = useNavigation();

  const {profile, posts, loadingProfile, loadingPosts} = getHome();

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  if (loadingProfile) {
    return (
      <Center flex={1} bg={'#313543'}>
        <Spinner color={'white'} />
      </Center>
    );
  }

  return (
    <ScrollView bg={'#313543'} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          source={{uri: profile.header}}
          w={'full'}
          h={200}
          alt={''}
          position={'absolute'}
        />
        <HStack mt={160}>
          <Image
            borderColor={'black'}
            borderWidth={1}
            source={{
              uri: profile.avatar,
            }}
            h={100}
            w={100}
            ml={3}
          />

          <Pressable
            position={'absolute'}
            ml={100}
            mt={-1}
            bg={'white'}
            alignSelf={'baseline'}
            p={1}
            borderRadius={'full'}
            onPress={() => {
              navigation.navigate(screens.inside.editProfile);
            }}>
            <MaterialIcon name={'mode-edit'} size={16} />
          </Pressable>

          <VStack flex={1}>
            <Text
              mt={50}
              ml={4}
              color={'white'}
              fontWeight={'bold'}
              fontSize={16}>
              {profile.display_name}
            </Text>
            <Text ml={4} color={'white'} fontWeight={'bold'} fontSize={14}>
              @{profile.username}
            </Text>
          </VStack>

          <Pressable
            mt={60}
            mr={4}
            bg={'white'}
            justifyContent={'center'}
            alignSelf={'baseline'}
            borderRadius={'full'}
            px={4}
            onPress={() => {
              navigation.navigate('friends');
            }}>
            <Text color={'black'}>FRIENDS</Text>
          </Pressable>
        </HStack>

        <VStack my={4}>
          <HomeSection
            label={'JOINED'}
            value={moment(profile.created_at).format('MMM D, YYYY')}
          />
          {profile.fields.map(field => {
            return (
              <HomeSection
                label={field.name}
                value={field.value.match(/href="([^"]+)"/)[1]}
                link
              />
            );
          })}
        </VStack>

        {loadingPosts ? <Spinner color={'white'} /> : <Posts {...{posts}} />}
      </VStack>
    </ScrollView>
  );
}

export default Home;
