import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
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
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity onPress={handleRedirect} style={styles.backButton}>
          <AntDesign name="arrowleft" size={30} color={Colors.primary} />
        </TouchableOpacity>
        <View style={styles.welcomeLayout}>
          <Text style={styles.welcomeText}>Hey, Welcome Back</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  backButton: {
    marginVertical: 20,
    marginHorizontal: 25,
  },
  welcomeLayout: {
    height: 144,
    width: 155,
    marginHorizontal: 25,
  },
  welcomeText: {
    fontFamily: Fonts.Medium,
    fontSize: 32,
    color: Colors.primary,
    fontWeight: 600,
  },
});
