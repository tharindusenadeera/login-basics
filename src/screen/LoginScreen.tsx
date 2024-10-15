import {
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
import {Colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../utils/fonts';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleRedirect = () => {
    navigation.goBack();
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
            />
          </View>
          <View>
            <TextInput />
          </View>
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
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: Fonts.Light,
    fontWeight: 300,
    fontSize: 14,
  },
});
