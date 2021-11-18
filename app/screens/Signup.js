import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../components/CustomTextInput';
import LongButton from '../components/LongButton';
import InlineTextButton from '../components/InlineTextButton';
import Heading from '../components/Heading';
import { useForm, Controller } from 'react-hook-form';

function Signup({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => console.log('REGISTER FORM', data);
  return (
    <LinearGradient colors={['#228ee8', '#1465d0', '#0129ac']} style={styles.container}>
      <Heading title="Đăng ký tài khoản" style={{ position: 'absolute', top: 50 }} />
      {/* LOGIN FORM */}
      <View>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title="Họ và tên"
              textValue={value}
              onChangeText={(name) => setName(name)}
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title="Điện thoại"
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
          name="email"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title="Địa chỉ Email"
              textValue={value}
              keyboardType="email-address"
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
              textValue={value}
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
              password
              hide
            />
          )}
        />
        <Controller
          control={control}
          name="retype-pass"
          render={({ field: { onChange, value, onBlur } }) => (
            <CustomTextInput
              title="Nhập lại mật khẩu"
              textValue={value}
              style={styles.marginTop}
              onBlur={onBlur}
              onChangeText={onChange}
              password
            />
          )}
        />
        <Text style={styles.agreement}>
          Khi bạn đăng ký tài khoản, bạn đã đồng ý với các điều khoản sử dụng & chính sách dịch vụ
          của Mr.Thợ.
        </Text>
        <LongButton title="Đăng ký tài khoản" onPress={handleSubmit(onSubmit)} />
      </View>
      <InlineTextButton
        textContent="Bạn đã có tài khoản? "
        btnContent="Đăng nhập"
        restTextContent=" ngay"
        style={styles.inlineTextBtn}
        onPress={() => navigation.navigate('Login')}
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
  marginTop: {
    marginTop: 35,
  },
  agreement: {
    color: '#fff',
    paddingLeft: 15,
    paddingTop: 20,
  },
  inlineTextBtn: {
    position: 'absolute',
    bottom: 50,
  },
});

export default Signup;
