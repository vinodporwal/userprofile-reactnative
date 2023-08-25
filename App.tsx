import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider, extendTheme} from 'native-base';
import AppNavigator from './app/navigator';
import store from './app/lib/createStore';
import {SafeAreaView} from 'react-native';
import defaultTheme from './defaultTheme';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NativeBaseProvider theme={extendTheme(defaultTheme)}>
          <AppNavigator />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaView>
  );
}
