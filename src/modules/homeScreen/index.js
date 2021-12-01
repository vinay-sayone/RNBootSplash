import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
