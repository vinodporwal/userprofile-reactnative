import React, {useState} from 'react';
import {HStack, Image, Pressable, ScrollView, Text, VStack} from 'native-base';
import moment from 'moment';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useAppAccessor} from '../../hooks';
import FieldInput from '../../components/FieldInput';
import {useNavigation} from '@react-navigation/native';

export default function EditProfile() {
  const {getHome} = useAppAccessor();
  const navigation = useNavigation();

  const {profile} = getHome();

  const [changeJoinedDate, setChangeJoinedDate] = useState(false);
  const [joinedDate, setJoinedDate] = useState(profile.created_at);
  const [profilePhoto, setProfilePhoto] = useState(profile.avatar);

  const [updated, setUpdated] = useState(false);

  return (
    <VStack flex={1} bg={'#313543'}>
      <HStack p={4}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcon
            name={'keyboard-backspace'}
            size={30}
            color={'white'}
            alignItems={'center'}
          />
        </Pressable>
        <Text flex={1} color={'white'} fontSize={16} mt={1} ml={4}>
          Edit Profile
        </Text>

        {updated && (
          <MaterialIcon
            name={'done'}
            size={26}
            color={'white'}
            alignItems={'center'}
          />
        )}
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          <HStack alignSelf={'center'} mb={10} mt={4}>
            <Image
              borderColor={'black'}
              borderWidth={1}
              source={{
                uri: profilePhoto,
              }}
              h={100}
              w={100}
            />

            <Pressable
              position={'absolute'}
              ml={88}
              mt={-2}
              bg={'white'}
              alignSelf={'baseline'}
              p={1}
              borderRadius={'full'}
              onPress={async () => {
                try {
                  const result = await launchImageLibrary();
                  setProfilePhoto(result.assets[0].uri);
                  setUpdated(true);
                } catch (error) {
                  console.log(error);
                }
              }}>
              <MaterialIcon name={'mode-edit'} size={16} />
            </Pressable>
          </HStack>

          <FieldInput
            label={'JOINED'}
            value={moment(joinedDate).format('MMM D, YYYY')}
            isPressable
            containerPress={() => setChangeJoinedDate(true)}
          />

          {profile.fields.map(field => {
            return (
              <FieldInput
                label={field.name}
                value={field.value.match(/href="([^"]+)"/)[1]}
                link
                onChange={() => {
                  setUpdated(true);
                }}
              />
            );
          })}

          <DateTimePickerModal
            isVisible={changeJoinedDate}
            mode="date"
            date={new Date(joinedDate)}
            onConfirm={date => {
              setJoinedDate(date);
              setChangeJoinedDate(false);
              setUpdated(true);
            }}
            onCancel={() => {
              setChangeJoinedDate(false);
            }}
          />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
