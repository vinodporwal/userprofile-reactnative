import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InsideStack from './InsideStack/InsideStack';
import {LoadingView} from '../screens';
import useAppAccessor from '../hooks/useappAccessor';
import {roots} from '../constants';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const {getApplication} = useAppAccessor();
  const {root} = getApplication();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {root === roots.LOADING ? (
          <Stack.Screen name="AuthLoading" component={LoadingView} />
        ) : null}
        {root === roots.INSIDE ? (
          <Stack.Screen name="InsideStack" component={InsideStack} />
        ) : null}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
