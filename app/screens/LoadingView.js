import React from 'react';
import {Center, Image, Text} from 'native-base';
import {useEffect} from 'react';
import {useDispatch} from '../hooks';
import {appInit} from '../application/application.actions';

const LoadingView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(appInit());
    }, 3000);
  }, []);

  return (
    <Center flex={1} justifyContent={'center'} alignItems={'center'}>
      <Image
        source={require('../assets/icons/SplashIcon.png')}
        w={200}
        h={200}
        alt={''}
      />
    </Center>
  );
};

export default LoadingView;
