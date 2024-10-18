import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
//@ts-ignore
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../utils/fonts';
import {useState} from 'react';

const LoginScreen = () => {
  const navigation: any = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleRedirect = () => {
    navigation.goBack();
  };

  const navigateSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <TouchableOpacity
          onPress={handleRedirect}
          style={styles.backButtonWrapper}>
          <AntDesign name="arrowleft" size={30} color={Colors.primary} />
        </TouchableOpacity>
        <View style={styles.welcomeLayout}>
          <Text style={styles.welcomeText}>Hey, Welcome Back</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <Ionicons name="mail-outline" size={25} color={Colors.secondary} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.textInputContainer}>
            <SimpleLineIcons name="lock" size={25} color={Colors.secondary} />
            <TextInput
              secureTextEntry={secureEntry}
              style={styles.textInput}
              placeholder="Enter your password"
            />
            <TouchableOpacity
              onPress={() => setSecureEntry((prev: boolean) => !prev)}>
              <Ionicons name="eye-outline" size={25} color={Colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.forgotPasswordWrapper}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </View>
        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.continueContainer}>
          <Text style={styles.continueText}>or continue with</Text>
        </View>
        <View style={styles.googleButtonWrapper}>
          <TouchableOpacity style={styles.googleButtonWrapperTouch}>
            <Image
              source={require('../assets/google-icon.png')}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createAccountWrapper}>
          <Text style={styles.createAccountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={navigateSignup}>
            <Text style={styles.createAccount}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  backButtonWrapper: {
    marginVertical: 20,
    height: 50,
    width: 50,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  welcomeLayout: {
    height: 144,
    width: 155,
  },
  welcomeText: {
    fontFamily: Fonts.SemiBold,
    fontSize: 32,
    color: Colors.primary,
    fontWeight: 600,
  },
  formContainer: {
    marginTop: 20,
  },
  textInputContainer: {
    flexDirection: 'row',
    borderRadius: 100,
    borderColor: Colors.secondary,
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 55,
    alignItems: 'center',
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: Fonts.Light,
    fontWeight: 300,
    fontSize: 14,
  },
  forgotPasswordWrapper: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  forgotPasswordText: {
    fontFamily: Fonts.SemiBold,
    color: Colors.primary,
    fontWeight: 600,
    fontSize: 16,
    textAlign: 'right',
  },
  loginButtonWrapper: {
    borderWidth: 1,
    borderRadius: 90,
    height: 55,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {},
  loginText: {
    color: Colors.white,
    fontFamily: Fonts.Bold,
    fontSize: 16,
    fontWeight: 700,
  },
  googleButtonWrapper: {
    borderWidth: 1,
    borderRadius: 90,
    height: 55,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonWrapperTouch: {
    flexDirection: 'row',
  },
  googleText: {
    color: Colors.primary,
    fontFamily: Fonts.SemiBold,
    fontWeight: 600,
  },
  continueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  continueText: {
    color: Colors.primary,
    fontFamily: Fonts.Light,
  },
  createAccountWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    fontFamily: Fonts.Light,
    marginRight: 5,
  },
  createAccount: {
    fontFamily: Fonts.Bold,
  },
  googleImage: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
});
