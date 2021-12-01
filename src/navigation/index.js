/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../modules/homeScreen';
import SplashScreen from '../modules/splashScreen';

const {Screen, Navigator} = createNativeStackNavigator();

const AppNavigator = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
      console.log('Bootsplash has been hidden successfully');
    });
  }, []);

  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Splash" component={SplashScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default AppNavigator;
