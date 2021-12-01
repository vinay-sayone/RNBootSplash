import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, Image, Animated} from 'react-native';
import styles from './Styles';

const SplashScreen = ({navigation}) => {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  const rotation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Animated.Image
          source={require('../../assets/bootsplash_logo.png')}
          style={[
            styles.splashImg,
            {
              transform: [{rotate: rotation}],
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
