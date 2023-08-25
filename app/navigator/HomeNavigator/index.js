import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screens} from '../../constants';
import {Home} from '../../screens';
import HomeTabBar from './HomeTabBar';

const MainStack = createBottomTabNavigator();

function HomeTabbar() {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <HomeTabBar {...props} />}>
      <MainStack.Screen
        key={'home'}
        name={screens.inside.homeBottomTabs.home}
        component={Home}
        options={{
          title: 'Profile',
        }}
      />
      <MainStack.Screen
        key={'friends'}
        name={screens.inside.homeBottomTabs.friends}
        component={Home}
        options={{
          title: 'Profile',
        }}
      />
    </MainStack.Navigator>
  );
}

export default HomeTabbar;
