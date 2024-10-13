import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation: any = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.commonView}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          <Image source={require('../assets/man.png')} style={styles.banner} />
          <Text style={styles.title}>Lorem ipsum dolor.</Text>
          <Text style={styles.subTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore 
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButtonWrapper}
              onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButtonWrapper}>
              <Text style={styles.signupButtonText}>Signup</Text>
            </TouchableOpacity>
          </View>
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
    fontFamily: Fonts.SemiBold,
    fontSize: 36,
    fontWeight: 600,
    textAlign: 'center',
    paddingHorizontal: 36,
    color: Colors.primary,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: Fonts.Medium,
    color: Colors.secondary,
    paddingHorizontal: 30,
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.secondary,
    width: '80%',
    height: 60,
    borderRadius: 100,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: Colors.primary,
    borderRadius: 98,
  },
  loginButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.SemiBold,
  },
  signupButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  signupButtonText: {
    fontSize: 18,
    fontFamily: Fonts.SemiBold,
  },
});
