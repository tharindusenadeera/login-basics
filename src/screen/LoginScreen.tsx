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

const LoginScreen = () => {
  const navigation = useNavigation();
  const handleRedirect = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <TouchableOpacity onPress={handleRedirect}>
          <AntDesign name="arrowleft" size={30} color={Colors.primary} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
