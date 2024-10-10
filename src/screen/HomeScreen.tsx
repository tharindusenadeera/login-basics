import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from '../utils/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.commonView}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Image source={require('../assets/man.png')} style={styles.banner} />
          <Text style={styles.title}>Lorem ipsum dolor.</Text>
          <Text style={{padding: 10}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore 
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  commonView: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 140,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  banner: {
    height: 240,
    width: 230,
    marginVertical: 20,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
  },
});
