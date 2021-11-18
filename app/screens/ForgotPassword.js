import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';
import LongButton from '../components/LongButton';
import CircleButton from '../components/CircleButton';
import InlineTextButton from '../components/InlineTextButton';
import Heading from '../components/Heading';
import { useForm, Controller } from 'react-hook-form';

function ForgotPassword({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => console.log('FORGOT PASSWORD FORM', data);
  return (
    <LinearGradient colors={['#228ee8', '#1465d0', '#0129ac']} style={styles.container}>
      <Heading title="Quên mật khẩu" style={{ position: 'absolute', top: 50 }} />
      <View>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title="Địa chỉ Email/Số điện thoại"
              textValue={value}
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <LongButton
          title="Lấy lại mật khẩu"
          style={styles.btnGetPass}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <Text style={styles.guideline}>
        Vui lòng nhập địa chỉ email hoặc số điện thoại để lấy lại mật khẩu
      </Text>
      <View style={styles.registerGroup}>
        <View style={styles.lineThrough} />
        <InlineTextButton
          textContent="Bạn chưa có tài khoản? "
          btnContent="Đăng ký"
          restTextContent=" ngay"
          style={styles.inlineTextBtn}
          onPress={() => navigation.navigate('Signup')}
        />
        <View style={styles.groupBtnAnotherLogin}>
          <CircleButton iconUrl={require('../assets/facebook.png')} style={styles.marginRight} />
          <CircleButton iconUrl={require('../assets/google.png')} />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnGetPass: {
    marginTop: 50,
  },
  lineThrough: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.4)',
    marginTop: 25,
  },
  guideline: {
    color: '#fff',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    fontStyle: 'italic',
  },
  registerGroup: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 70,
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
    marginTop: 20,
  },
});

export default ForgotPassword;
