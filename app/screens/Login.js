import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';
import LongButton from '../components/LongButton';
import CircleButton from '../components/CircleButton';
import InlineTextButton from '../components/InlineTextButton';
import Heading from '../components/Heading';
import { useForm, Controller } from 'react-hook-form';

function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => console.log('LOGIN FORM', data);
  return (
    <LinearGradient colors={['#228ee8', '#1465d0', '#0129ac']} style={styles.container}>
      <Heading style={{ position: 'absolute', top: 50 }} />
      {/* LOGIN FORM */}
      <View>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title="Số điện thoại"
              iconUrl={require('../assets/user.png')}
              textValue={value}
              keyboardType="numeric"
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title="Mật khẩu"
              iconUrl={require('../assets/lock.png')}
              textValue={value}
              style={styles.passwordInput}
              onBlur={onBlur}
              onChangeText={onChange}
              password
              hide
            />
          )}
        />
        <LongButton title="Đăng nhập" onPress={handleSubmit(onSubmit)} />
      </View>
      <TouchableOpacity
        style={styles.btnForgotPass}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotPassText}>Quên mật khẩu</Text>
      </TouchableOpacity>
      <View style={styles.lineThrough} />
      <Text style={styles.anotherLoginText}>Hoặc đăng nhập bằng</Text>
      {/* LOGIN WITH ANOTHER WAY */}
      <View style={styles.groupBtnAnotherLogin}>
        <CircleButton iconUrl={require('../assets/fingerprint.png')} style={styles.marginRight} />
        <CircleButton iconUrl={require('../assets/facebook.png')} style={styles.marginRight} />
        <CircleButton iconUrl={require('../assets/google.png')} />
      </View>
      <InlineTextButton
        textContent="Bạn chưa có tài khoản? "
        btnContent="Đăng ký"
        restTextContent=" ngay"
        style={styles.inlineTextBtn}
        onPress={() => navigation.navigate('Signup')}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInput: {
    marginTop: 35,
  },
  btnForgotPass: {
    marginTop: 20,
  },
  forgotPassText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  lineThrough: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: 25,
  },
  anotherLoginText: {
    color: '#fff',
    marginTop: 20,
  },
  groupBtnAnotherLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  marginRight: {
    marginRight: 20,
  },
  inlineTextBtn: {
    position: 'absolute',
    bottom: 50,
  },
});

export default Login;
