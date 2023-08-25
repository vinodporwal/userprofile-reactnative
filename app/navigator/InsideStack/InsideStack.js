import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from '../../constants';
import {Home, Friends, EditProfile} from '../../screens';

const MainStack = createNativeStackNavigator();

function InsideStack() {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name={screens.inside.home} component={Home} />
      <MainStack.Screen name={screens.inside.friends} component={Friends} />
      <MainStack.Screen
        name={screens.inside.editProfile}
        component={EditProfile}
      />
    </MainStack.Navigator>
  );
}

export default InsideStack;
