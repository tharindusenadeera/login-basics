import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

//@ts-ignore
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../utils/colors';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <AntDesign name="arrowleft" size={30} color={Colors.primary} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
